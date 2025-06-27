import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#222222] text-white w-full py-4">
      <nav className="max-w-7xl mx-auto px-6 flex justify-end space-x-10">
        <a href="#home" className="font-semibold hover:text-gray-300 transition-colors">
          Главная
        </a>
        <a href="#projects" className="font-semibold hover:text-gray-300 transition-colors">
          Проекты
        </a>
        <a href="#experience" className="font-semibold hover:text-gray-300 transition-colors">
          Опыт разработки
        </a>
        <a href="#contact" className="font-semibold hover:text-gray-300 transition-colors">
          Контакты
        </a>
        <a href="#contact" className="font-semibold hover:text-gray-300 transition-colors">
          Вход
        </a>
      </nav>
    </header>
  );
};

export default Header;