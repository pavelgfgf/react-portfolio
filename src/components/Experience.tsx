import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  icon: string;
  period: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    company: "Russian Robotics",
    role: "Практикант",
    icon: "/icons/google.png", // Иконку положи в public/icons/
    period: "Май 2025 – Июнь 2025",
    description:
      "Занимался разработкой собственного пет-проекта.",
  },
];


const Experience: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-12 uppercase">
        Опыт разработки
      </h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {experience.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4">
            <img
              src={item.icon}
              alt={item.company}
              className="w-6 h-6 mt-1"
            />
            <div className="flex-1">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="font-bold">
                  <span className="text-white">{item.role}</span>
                </h3>
                <span className="text-sm text-gray-400">{item.period}</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;