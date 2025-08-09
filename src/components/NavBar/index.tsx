import { useState } from "react";
import IconArrow from "../../assets/icons/iconDownArrow.svg";
import Li from "../Li";
import Logo from "../../assets/icons/iconlogo.svg";
import Button from "../Button";
import Search from "../Search";
import IconButtonMenu from "../../assets/icons/iconThreeBars.svg";
import IconClose from "../../assets/icons/iconClose.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="flex items-center lg:justify-around px-4 sm:px-6 lg:px-12 h-[80px] bg-white shadow-md relative z-50 sm:justify-between">
      {/* Logo */}
      <div className="flex-shrink-0 md:mr-2">
        <img src={Logo} alt="Logo" className="w-28 sm:w-30 lg:w-37" />
      </div>

      {/* Menu Desktop/Tablet */}
      <ul className="hidden md:flex flex-row items-center gap-6 lg:gap-7 text-sm lg:text-base font-medium">
        <Li href="/" text="Home" title="home" icon={IconArrow} />
        <Li href="/aboutUs" text="About Us" title="About Us" />
        <Li
          href="/portfolio"
          text="Portfolio"
          title="Portfolio"
          icon={IconArrow}
        />
        <Li href="/pages" text="Pages" title="Pages" icon={IconArrow} />
        <Li href="/blog" text="Blog" title="Blog" icon={IconArrow} />
        <Li href="/contactUs" text="Contact Us" title="Contact Us" />
      </ul>

      {/* Search + Button Desktop */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <Search />
        <Button />
      </div>

      {/* Botão Hambúrguer (Mobile) */}
      {!isMenuOpen && (
        <button
          aria-label="Open Menu"
          className="md:hidden flex items-center justify-center "
          onClick={toggleMenu}
        >
          <img className="w-8 h-8" src={IconButtonMenu} alt="Menu" />
        </button>
      )}

      {/* Menu Mobile Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium animate-fadeIn z-50">
          {/* Botão Fechar */}
          <button
            aria-label="Close Menu"
            className="absolute top-5 right-5"
            onClick={toggleMenu}
          >
            <img className="w-8 h-8" src={IconClose} alt="Close" />
          </button>

          <Li href="/" text="Home" title="home" icon={IconArrow} />
          <Li href="/aboutUs" text="About Us" title="About Us" />
          <Li
            href="/portfolio"
            text="Portfolio"
            title="Portfolio"
            icon={IconArrow}
          />
          <Li href="/pages" text="Pages" title="Pages" icon={IconArrow} />
          <Li href="/blog" text="Blog" title="Blog" icon={IconArrow} />
          <Li href="/aboutUs" text="About Us" title="About Us" />

          <div className="flex gap-5 mt-5">
            <Search />
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
