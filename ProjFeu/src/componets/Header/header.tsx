import { useState } from "react";
import logo from "../../assets/logo-doug.png";
import logoX from "../../assets/logo-x.png";
import logoInstagram from "../../assets/logo-instagram.png";
import logoFace from "../../assets/logo-face.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["HOME", "NOVIDADES", "JOGOS", "SOBRE A EMPRESA", "TRABALHE CONOSCO",  "TERMOS DE SERVIÇOS", "LOGIN"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-slate-950 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12" />

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {navItems.map((item, index) => (
            <div key={item} className="flex items-center">
              <a
                href="#"
                className="hover:text-gray-400 transition font-sans"
              >
                {item}
              </a>
              {index < navItems.length - 1 && (
                <span className="border-r border-gray-600 h-5 ml-4"></span>
              )}
            </div>
          ))}

          {/* Redes sociais */}
          <div className="flex items-center gap-3 ml-4">
            <img src={logoX} alt="X" className="h-5 cursor-pointer" />
            <img src={logoInstagram} alt="Instagram" className="h-5 cursor-pointer" />
            <img src={logoFace} alt="Facebook" className="h-5 cursor-pointer" />
          </div>
        </nav>

        {/* Botão Burger (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col text-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-6 py-4 hover:bg-slate-800 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes sociais Mobile */}
          <div className="flex justify-center gap-6 py-4 border-t border-slate-800">
            <img src={logoX} alt="X" className="h-5" />
            <img src={logoInstagram} alt="Instagram" className="h-5" />
            <img src={logoFace} alt="Facebook" className="h-5" />
          </div>
        </nav>
      )}
    </header>
  );
}
