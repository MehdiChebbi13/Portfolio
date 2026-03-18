import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const contactProfile = {
  eyebrow: "Informations de contact",
  title: "Contactez-moi",
  availability: "Disponible pour stage, alternance ou mission freelance",
  responseTime: "Reponse estimee : sous 24 heures",
  location: "Biot, France",
};

const contactMethods = [
  {
    label: "Email",
    value: "medichebbi9@gmail.com",
    href: "mailto:medichebbi9@gmail.com",
    icon: <FaEnvelope className="h-5 w-5 text-purple" />,
  },
  {
    label: "Telephone",
    value: "+33 7 83 37 40 70",
    href: "tel:+33783374070",
    icon: <FaPhone className="h-5 w-5 text-purple" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mehdi-chebbi9/",
    href: "https://www.linkedin.com/in/mehdi-chebbi9/",
    icon: <FaLinkedin className="h-5 w-5 text-purple" />,
  },
  {
    label: "GitHub",
    value: "github.com/MehdiChebbi13",
    href: "https://github.com/MehdiChebbi13",
    icon: <FaGithub className="h-5 w-5 text-purple" />,
  },
];

function Contact() {
  return (
    <section id="contact" className="pb-24 pt-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="heading">
          Restons en <span className="text-purple">contact</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
          Une section de contact simple avec des donnees fictives pour vous
          laisser une base propre a personnaliser.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(16,23,42,0.94),rgba(24,24,27,0.9))] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <p className="text-xs uppercase tracking-[0.3em] text-purple/80">
              {contactProfile.eyebrow}
            </p>
            <h3 className="mt-4 max-w-xl text-3xl font-bold text-white md:text-4xl">
              {contactProfile.title}
            </h3>
            {/* <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              {contactProfile.summary}
            </p> */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:border-purple/50 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/55">{method.label}</p>
                      <p className="text-sm font-medium text-white transition group-hover:text-purple md:text-base">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Disponibilite
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                {contactProfile.availability}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {contactProfile.responseTime}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <FaLocationDot className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <p className="text-sm text-white/55">Localisation</p>
                  <p className="text-lg font-semibold text-white">
                    {contactProfile.location}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Vous pouvez remplacer ce bloc par votre ville, fuseau horaire,
                disponibilite ou toute autre information utile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
