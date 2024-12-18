import React from "react";
import Image from "next/image";
// Custom Card component defined above
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Define the technology interface
interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

// Technology icons as components
/* const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path
      d="M8.5 2C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9H15.5C17.433 9 19 7.433 19 5.5C19 3.567 17.433 2 15.5 2H8.5Z"
      fill="#FF7262"
    />
    <path
      d="M8.5 9C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16H15.5C17.433 16 19 14.433 19 12.5C19 10.567 17.433 9 15.5 9H8.5Z"
      fill="#1ABCFE"
    />
    <path
      d="M5 19.5C5 17.567 6.567 16 8.5 16C10.433 16 12 17.567 12 19.5C12 21.433 10.433 23 8.5 23C6.567 23 5 21.433 5 19.5Z"
      fill="#0ACF83"
    />
  </svg>
); */

const TypeScriptIcon = () => (
  <svg
    className="w-6 h-6 text-blue-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const ReactIcon = () => (
  <Image src="/React-icon.svg" alt="React Logo" width={24} height={24} />
);

const TailwindIcon = () => (
  <svg
    className="w-6 h-6 text-cyan-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

const MySQLIcon = () => (
  <Image src="/mysql.svg" width={26} height={26} alt="MySQL Logo" />
);
const NextJSIcon = () => (
  <div className="bg-white w-6 h-6 rounded-full p-[-1px]">
    <Image src="/Next-icon.svg" alt="Next Logo" width={26} height={26} />
  </div>
);

const MongoDBIcon = () => (
  <svg
    className="w-6 h-6 text-green-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);

const NodeIcon = () => (
  <svg
    className="w-6 h-6 text-green-600"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
);
const Docker = () => (
  <Image src="/dock.svg" alt="Docker Logo" width={26} height={26} />
);
// Define the technologies data
const technologies: Technology[] = [
  {
    name: "Docker",
    description: "Plateforme logicielle",
    icon: <Docker />,
  },

  {
    name: "TypeScript",
    description: "JavaScript en mieux",
    icon: <TypeScriptIcon />,
  },
  {
    name: "React",
    description: "JavaScript Library",
    icon: <ReactIcon />,
  },
  {
    name: "Tailwind",
    description: "CSS Framework",
    icon: <TailwindIcon />,
  },
  {
    name: "MySQL",
    description: "Base de données",
    icon: <MySQLIcon />,
  },
  {
    name: "Next.js",
    description: "Framework React",
    icon: <NextJSIcon />,
  },
  {
    name: "MongoDB",
    description: "Base de données NoSQL",
    icon: <MongoDBIcon />,
  },
  {
    name: "Node.js",
    description: "Environnement d'exécution ",
    icon: <NodeIcon />,
  },
];

const TechStack = () => {
  return (
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-6xl mx-auto">
        <p className="heading mb-8">Technologies que j&apos;utilise</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className={`hover:bg-zinc-800/50 transition-colors item${index}`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-zinc-800/50 rounded-lg">{tech.icon}</div>
                <div>
                  <h3 className="font-medium text-white">{tech.name}</h3>

                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
