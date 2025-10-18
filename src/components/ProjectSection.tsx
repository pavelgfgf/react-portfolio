import React from "react";

const technologies = [
  { name: "JavaScript", icon: "https://pavelgfgf.github.io/react-portfolio/icons/javascript.png" },
  { name: "Node.js", icon: "https://pavelgfgf.github.io/react-portfolio/icons/nodejs.png" },
  { name: "HTML5", icon: "https://pavelgfgf.github.io/react-portfolio/icons/html.png" },
  { name: "CSS3", icon: "https://pavelgfgf.github.io/react-portfolio/icons/css.png" },
  { name: "React", icon: "https://pavelgfgf.github.io/react-portfolio/icons/reactjs.png" },
];

const projects = [
  {
    title: "Проект секции часто задаваемых вопросов",
    image: "https://pavelgfgf.github.io/react-portfolio/faq.jpg",
    link: "https://pavelgfgf.github.io/react-faq-section/",
    description: "POWER OF HTML",
  },
  {
    title: "Сайт объявлений",
    image: "https://pavelgfgf.github.io/react-portfolio/ads.jpg",
    link: "https://pavelgfgf.github.io/react-ads/",
    description: "UNLOCK CSS MAGIC",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4" id="projects">
      <div className="text-center mb-12">
        <p className="text-gray-300 mb-6 text-sm tracking-widest uppercase">
          Опыт разработки с
        </p>
        <div className="flex justify-center items-center gap-6">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.icon}
              alt={tech.name}
              className="h-10 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

      <h2 className="text-center text-orange-500 text-3xl font-bold mb-10">
        ПРОЕКТЫ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-xs uppercase text-gray-400">Нажмите для просмотра</p>
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl"
              >
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;