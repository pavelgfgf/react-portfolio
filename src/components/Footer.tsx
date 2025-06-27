import { FaYoutube, FaEnvelope, FaTelegram, FaVk } from "react-icons/fa6";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Заголовок */}
        <h2 className="text-xl font-semibold">Контакты</h2>

        {/* Описание */}
        <p className="text-sm text-gray-400 leading-relaxed">
        Я начинающий fullstack-разработчик. Интересуюсь созданием современных веб-приложений —
        от интерфейса до серверной части. Изучаю технологии, такие как React, TypeScript, Django и базы данных.
        Сейчас активно развиваю навыки через собственные проекты и учебные задачи, чтобы в будущем
        создавать качественные и удобные решения для пользователей.
        </p>

        {/* Email */}
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <FaEnvelope className="text-lg" />
          <a
            href="mailto:pasafuflygin@gmail.com"
            className="hover:text-white transition"
          >
            pasafuflygin@gmail.com
          </a>
        </div>

        {/* Соцсети */}
        <div className="flex gap-6 text-xl mt-4 text-gray-400">
          <a
            href="https://vk.com/pavelgfgf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaVk />
          </a>
          <a
            href="https://t.me/pavelgfgf52"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTelegram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;