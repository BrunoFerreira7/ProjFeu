import logo from "../../assets/logo-doug.png";
import logoX from "../../assets/logo-x.png";
import logoInstagram from "../../assets/logo-instagram.png";
import logoFace from "../../assets/logo-face.png";

export default function Header() {
  return (
  <header className="
  w-full 
  bg-blue-950 
  text-white 
  px-8 
  py-4 sm:py-6 
  flex 
  flex-col sm:flex-row        
  justify-start sm:justify-between 
  items-center 
  gap-4 sm:gap-0           
  shadow-md
">
   <img src={logo} alt="Logo" className="h-16" />
      <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm font-medium">
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition pad">HOME</a>
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition ">NOVIDADES</a>
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition ">JOGOS</a>
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition ">SOBRE A EMPRESA</a>
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition ">TRABALHE CONOSCO</a>
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition ">TERMOS DE SERVIÇOS</a>
        <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white transition ">LOGIN</a>
        <img src={logoX} alt="LogoX" className="h-6" />
        <img src={logoInstagram} alt="LogoInstagram" className="h-6" />
        <img src={logoFace} alt="LogoFace" className="h-6" />
      </nav>
    </header>
    
  );
}