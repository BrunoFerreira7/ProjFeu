import logo from "../../assets/logo-doug.png";
export default function Footer() {
    return (
      <footer className="w-full bg-gradient-to-b from-blue-900 to-black text-white">
        {/* Logo */}
        <div className="flex justify-center h-20 -mt-8">
          <img
            src={logo}
            alt="Logo Doug"
            className="h-20"
          />
        </div>
  
        {/* Conteúdo principal */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          
          {/* FEU Estúdio */}
          <div>
            <h3 className="font-bold text-lg mb-4">FEU ESTÚDIO</h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
  
          {/* Estúdio */}
          <div>
            <h3 className="font-bold text-lg mb-4">ESTÚDIO</h3>
            <p className="text-gray-300 leading-relaxed">
              Endereço de contato <br />
              Cidade, Estado <br />
              CEP: 12345-000
            </p>
          </div>
  
          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">CONTATO</h3>
            <p className="text-gray-300 mb-4">
              StudioX Studios, Science Park <br />
              Street, Box 123, Skyblock <br />
              SLC-BA
            </p>
  
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition">
              ENTRE EM CONTATO
            </button>
          </div>
  
        </div>
  
        {/* Linha inferior */}
        <div className="border-t border-gray-950 py-4 text-center text-xs text-gray-400">
          © Feu Studio | Site Developed by Code32 | Site design by full | Cookies
        </div>
  
      </footer>
    )
  }