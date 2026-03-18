"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const hashLinks = useMemo(
    () => navItems.filter((item) => item.link.startsWith("#")),
    [navItems],
  );
  const [activeLink, setActiveLink] = useState(hashLinks[0]?.link ?? "");
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  useEffect(() => {
    const handleProjectModalToggle = (event: Event) => {
      const modalEvent = event as CustomEvent<{ open?: boolean }>;
      setProjectModalOpen(Boolean(modalEvent.detail?.open));
    };

    window.addEventListener("project-modal-toggle", handleProjectModalToggle);

    return () => {
      window.removeEventListener(
        "project-modal-toggle",
        handleProjectModalToggle,
      );
    };
  }, []);

  useEffect(() => {
    if (hashLinks.length === 0) {
      return;
    }

    const sections = hashLinks
      .map((item) => {
        const section = document.querySelector(item.link);
        return section instanceof HTMLElement
          ? { link: item.link, element: section }
          : null;
      })
      .filter(
        (entry): entry is { link: string; element: HTMLElement } =>
          entry !== null,
      );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        const activeSection = sections.find(
          ({ element }) => element === visibleEntries[0].target,
        );

        if (activeSection) {
          setActiveLink(activeSection.link);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach(({ element }) => observer.observe(element));

    const handleHashChange = () => {
      const currentHash = window.location.hash;

      if (hashLinks.some((item) => item.link === currentHash)) {
        setActiveLink(currentHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hashLinks]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) {
      return;
    }

    event.preventDefault();
    setActiveLink(href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: projectModalOpen ? -100 : 0,
        opacity: projectModalOpen ? 0 : 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
        projectModalOpen && "pointer-events-none",
        className,
      )}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      {navItems.map((navItem, idx) => {
        const isActive = activeLink === navItem.link;

        return (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(event) => handleNavClick(event, navItem.link)}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
            <span
              className={cn(
                "absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple transition-opacity",
                isActive ? "opacity-100" : "opacity-0",
              )}
            />
          </Link>
        );
      })}
    </motion.div>
  );
};
