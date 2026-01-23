import imagemJogo1 from "../assets/capsula_principal_eng.png";
import imagemJogo2 from "../assets/jogo-2.png";
import HeroBanner from "../components/ui/HeroBanner";
import { FaYoutube } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Jogos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nova Parte de Cima Inspirada na Referência [1] */}
      <HeroBanner />

      {/* Seção de Jogos que fizemos antes */}
      <section className="w-full bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
          {/* Card Principal */}
          <div className="relative flex flex-col md:flex-row bg-[#0b1220] border border-white/5 shadow-2xl overflow-hidden">
            {/* Lado Esquerdo – Imagem */}
            <div className="relative w-full md:w-1/2 h-[420px] md:h-auto">
              <img
                src={imagemJogo1}
                alt="V Rising"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Lado Direito – Conteúdo */}
            <div className="relative w-full md:w-1/2 flex flex-col bg-[#0f172a]">
              {/* Conteúdo */}
              <div className="p-8 md:p-12 flex-1">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                  O show do Zozo
                </h1>

                <p className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-6">
                  Terror • Indie
                </p>

                <p className="text-gray-400 leading-relaxed max-w-md">
                  Bem vindas crianças, este é o show das suas vidas, sua última
                  maior brincadeira, não prometemos nada menos do que um grande
                  show cheio de diversão e entretenimento... Para alguém pelo
                  menos.
                </p>
              </div>
              {/* Botões */}
              <div className="flex flex-col bg-black border-t gap-1 mt-4 md:mt-0 lg:flex-row lg:justify-end">
                {/* Visit site */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2
      py-4 lg:px-2 text-lx text-center font-bold uppercase
      text-cyan-400 hover:text-white hover:transition-all hover:duration-400"
                >
                  <span>
                    <FaLink size={25} />
                  </span>
                  <span>ver na steam</span>
                </a>

                {/* Botões */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2
      py-4 lg:px-2 bg-cyan-400 text-lx text-center font-bold uppercase
      text-black hover:bg-cyan-300 hover:transition-all hover:duration-400"
                >
                  <span>
                    <FaYoutube size={25} />
                  </span>
                  <span>youtube</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row bg-[#0b1220] border border-white/5 shadow-2xl overflow-hidden">
            {/* Lado Esquerdo – Imagem */}
            <div className="relative w-full md:w-1/2 h-[420px] md:h-auto">
              <img
                src={imagemJogo2}
                alt="V Rising"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Lado Direito – Conteúdo */}
            <div className="relative w-full md:w-1/2 flex flex-col bg-[#0f172a]">
              {/* Conteúdo */}
              <div className="p-8 md:p-12 flex-1">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                  O Medo Desconhecido
                </h1>

                <p className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-6">
                  Terror • Indie • Ação
                </p>

                <p className="text-gray-400 leading-relaxed max-w-md">
                  The Unknown Fear é sobre um condenado à morte, que teve a
                  memória apagada. Sua única chance de mudar de vida é recuperar
                  um arquivo no computador principal de uma instalação secreta.
                  Será que você conseguirá uma nova vida ou a criatura
                  aprisionada na instalação irá devorar seu corpo?
                </p>
              </div>
              {/* Botões */}
              <div className="flex flex-col bg-black gap-1 border-t mt-4 md:mt-0 lg:flex-row lg:justify-end">
                {/* Visit site */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2
      py-4 lg:px-2 text-lx text-center font-bold uppercase
      text-cyan-400 hover:text-white hover:transition-all hover:duration-400"
                >
                  <span>
                    <FaLink size={25} />
                  </span>
                  <span>ver na steam</span>
                </a>

                {/* Botões */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2
      py-4 lg:px-2 bg-cyan-400 text-lx text-center font-bold uppercase
      text-black hover:bg-cyan-300 hover:transition-all hover:duration-400"
                >
                  <span>
                    <FaYoutube size={25} />
                  </span>
                  <span>youtube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jogos;
