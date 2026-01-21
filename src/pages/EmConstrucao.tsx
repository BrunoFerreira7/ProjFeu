import React, { useState } from 'react';
// Caso não tenha lucide-react, instale com: npm install lucide-react
import { Play, ShoppingCart, Globe, Gamepad2, ChevronRight } from 'lucide-react';
import imagemJogo1 from '../assets/capsula_principal_eng.png'; 
import imagemJogo2 from '../assets/jogo-2.png';
import Header from "../components/Header";      
import HeroBanner from '../components/ui/HeroBanner'; // O componente que criamos acima

interface GameData {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  siteUrl: string;
  trailerUrl?: string;
  steamUrl?: string;
}

const games: GameData[] = [
  {
    id: 1,
    title: "O Medo Desconhecido",
    category: "Terror Survival",
    description: "The Unknown Fear é sobre um condenado à morte, que teve a memória apagada. Sua única chance de mudar de vida é recuperar um arquivo no computador principal de uma instalação secreta. Será que você conseguirá uma nova vida ou a criatura aprisionada na instalação irá devorar seu corpo?",
    image: imagemJogo2,  
    siteUrl: "#",
    trailerUrl: " https://www.youtube.com/watch?v=Shjnu3aZebQ",
    steamUrl: "https://store.steampowered.com/app/2619300/O_Medo_Desconhecido/",
  },
  {
    id: 2,
    title: "O Show de Zozo",
    category: "ACTION ADVENTURE",
    description: "Bem vindas crianças, este é o show das suas vidas, sua última maior brincadeira, não prometemos nada menos do que um grande show cheio de diversão e entretenimento... Para alguém pelo menos.",
    image: imagemJogo1, 
    siteUrl: "#",
    trailerUrl: "https://www.youtube.com/watch?v=T6hQniXppT0",
    steamUrl: "",
  }
];

const EmConstrucao = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentGame = games[activeTab];

  return (

     <div className="min-h-screen bg-background">
      <Header />

       {/* Nova Parte de Cima Inspirada na Referência [1] */}
      <HeroBanner />

      {/* Seção de Jogos que fizemos antes */}
      <main className="py-12">
        
     
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">
      {/* Cabeçalho da Seção [2] */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1 border border-cyan-500/50 rounded">
            <Gamepad2 size={16} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            Nossos Jogos
          </h2>
        </div>
        <p className="text-gray-400 max-w-3xl">
          Explore nossa coleção de jogos desenvolvidos com paixão e dedicação. Cada título reflete nosso compromisso com a qualidade e a inovação no mundo dos games.
        </p>
      </div>

      {/* Conteúdo Principal dos Jogos */}
      <div className="max-w-6xl mx-auto space-y-8">

          {/* Seleção de Abas */}
        <div className="flex gap-4 mb-4">
          {games.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all border-b-2 ${
                activeTab === index ? "border-cyan-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {game.title}
            </button>
          ))}
        </div>

        {/* Card Principal do Jogo [2] */}
        <div className="flex flex-col md:flex-row bg-[#0b1220] border border-white/5 shadow-2xl overflow-hidden">
          
          {/* Lado Esquerdo: Imagem */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <img 
              src={currentGame.image} 
              alt={currentGame.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Lado Direito: Conteúdo */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-12 relative bg-gradient-to-br from-[#0f172a] to-[#020617]">
            <div>
              <h1 className="text-5xl font-black mb-2 tracking-tight uppercase leading-none italic">
                {currentGame.title}
              </h1>
              <p className="text-cyan-400 font-bold text-xs mb-8 tracking-widest uppercase">
                {currentGame.category}
              </p>
              <p className="text-gray-400 leading-relaxed text-base mb-8 max-w-md">
                {currentGame.description}
              </p>
            </div>

            {/* Barra de Ações Inferior [2] */}
            <div className="flex flex-wrap items-center mt-auto border-t border-white/10 pt-6">
              <a 
                href={currentGame.siteUrl} 
                className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 hover:text-white transition-colors mr-auto mb-4 md:mb-0"
              >
                <Globe size={14} /> Visite o Site <ChevronRight size={12} />
              </a>
              
              <div className="flex bg-[#39d2ec] text-black">
                
                <a href={currentGame.trailerUrl}><button className="flex items-center gap-2 px-5 py-3 border-r border-black/10 hover:bg-cyan-300 transition-colors font-bold text-[10px]">
                  <Play size={14} fill="black" /> TRAILER
                </button></a>
                <a href={currentGame.steamUrl}>
                <button className="flex items-center gap-2 px-5 py-3 border-r border-black/10 hover:bg-cyan-300 transition-colors font-bold text-[10px]">
                  <ShoppingCart size={14} /> STEAM
                </button></a>
                <button className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300 transition-colors font-bold text-[10px]">
                   <Gamepad2 size={14} /> BUY NOW
                </button>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  



</div>
);

};

 
export default EmConstrucao;  
