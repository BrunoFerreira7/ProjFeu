import React from 'react';
// Caminhos corrigidos para subir dois níveis de 'ui' para 'src' (Fonte [3], [4])
import logoDoug from "../../assets/logo-doug.png"; 
import bgArt from "../../assets/home-bkg-decor.png";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[600px] bg-[#020617] flex flex-col md:flex-row overflow-hidden border-b border-cyan-500/30">
      
      {/* LADO ESQUERDO: A FOTO (Sem "comer" o nome) */}
      <div className="relative w-full md:w-1/2 h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${bgArt})`,
            // O clip-path cria a inclinação da Fonte [1] sem invadir o lado do texto
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' 
          }}
        />
        {/* Overlay ciano suave para combinar com a identidade visual */}
        <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply"></div>
      </div>

      {/* LADO DIREITO: O NOME E LOGO (No fundo azul escuro da Fonte [2]) */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-start px-8 md:px-16 bg-[#020617]">
        <div className="flex items-center gap-6 animate-fade-in">
          {/* Logo Doug (Fonte [2]) */}
          <img 
            src={logoDoug} 
            alt="Logo Doug" 
            className="w-24 md:w-40 h-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          />
          
          {/* Texto do Estúdio (Fonte [2]) */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight italic">
              CASA FEU JOGOS
            </h1>
            <p className="text-lg md:text-2xl font-light text-gray-400 uppercase tracking-[0.3em]">
              S T U D I O S
            </p>
          </div>
        </div>
      </div>

      {/* Linha decorativa de brilho inspirada na Fonte [1] */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </div>
  );
};

export default HeroBanner;