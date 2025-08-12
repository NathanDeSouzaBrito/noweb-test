import { useState } from "react";
import IconArrow from "../../assets/icons/iconDownArrow.svg";
import Li from "../Li";
import Logo from "../../assets/icons/iconLogo.svg";
import Button from "../Button";
import Search from "../Search";
import IconButtonMenu from "../../assets/icons/iconThreeBars.svg";
import IconClose from "../../assets/icons/iconClose.svg";
import useCepStore from "../../store/cepStore";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = [
    { href: "/", text: "Home", icon: IconArrow },
    { href: "/aboutUs", text: "About Us" },
    { href: "/portfolio", text: "Portfolio", icon: IconArrow },
    { href: "/pages", text: "Pages", icon: IconArrow },
    { href: "/blog", text: "Blog", icon: IconArrow },
    { href: "/contactUs", text: "Contact Us" },
  ];

  const open = useCepStore((s) => s.openModal);
  return (
    <nav className="fixed top-0 left-0 w-full flex h-[104px] items-center justify-around px-4 sm:px-6 lg:px-12 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex-shrink-0 md:mr-2">
        <img src={Logo} alt="Logo" className="w-28 sm:w-25 lg:w-37" />
      </div>

      {/* Menu Desktop/Tablet */}
      <ul className="hidden md:flex flex-row items-center gap-6 lg:gap-7">
        {menuItems.map((item) => (
          <Li
            key={item.text}
            href={item.href}
            text={item.text}
            title={item.text}
            icon={item.icon}
            active={activeItem === item.text}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </ul>

      {/* Search + Button Desktop */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <Search onClick={open} />
        <Button />
      </div>

      {/* Botão Hambúrguer (Mobile) */}
      {!isMenuOpen && (
        <button
          aria-label="Open Menu"
          className="md:hidden flex items-center justify-center"
          onClick={toggleMenu}
        >
          <img className="w-8 h-8" src={IconButtonMenu} alt="Menu" />
        </button>
      )}

      {/* Menu Mobile Fullscreen */}
      {isMenuOpen && (
        <div className="fixed h-[60%] inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium animate-fadeIn z-50">
          {/* Botão Fechar */}
          <button
            aria-label="Close Menu"
            className="absolute top-5 right-5"
            onClick={toggleMenu}
          >
            <img className="w-8 h-8" src={IconClose} alt="Close" />
          </button>

          <ul className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <Li
                key={item.text}
                href={item.href}
                text={item.text}
                title={item.text}
                icon={item.icon}
                active={activeItem === item.text}
                onClick={() => {
                  setActiveItem(item.text);
                  toggleMenu();
                }}
              />
            ))}
          </ul>

          <div className="flex gap-5 mt-5">
            <Search onClick={open} />
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
