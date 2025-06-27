import React from "react";

const Card: React.FC = () => {
  return (
    <section id="home" className="bg-black text-white pt-28 text-center px-5">
        <div className="relative inline-block">
        <div className="absolute inset-0 w-30 h-30 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  z-0" />
        <img
          src="../img/avatarka.png"
          alt="Avatar"
          className="relative z-10 w-40 h-40 md:w-40 md:h-40 rounded-full"
        />
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold">
        Я занимаюсь программированием и <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          мне нравится это!
        </span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
        Я начинающий fullstack-разработчик. Интересуюсь созданием современных веб-приложений —
        от интерфейса до серверной части. Изучаю технологии, такие как React, TypeScript, Django и базы данных.
        Сейчас активно развиваю навыки через собственные проекты и учебные задачи, чтобы в будущем
        создавать качественные и удобные решения для пользователей.
      </p>

      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://t.me/pavelgfgf52" className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Связаться
        </a>
        <a href="/cv.pdf" download className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
          Скачать резюме
        </a>
      </div>
    </section>
  );
};

export default Card;
