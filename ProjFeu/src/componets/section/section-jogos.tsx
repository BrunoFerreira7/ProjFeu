import zozo from "../../assets/zozo.png";

export default function Sectionjogos() {
return (
    <section className="w-full min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-10 bg-neutral-950">
        {/* IMAGEM */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
            src={zozo}
            alt="O Show de Zozo"
            className="
            w-88
            sm:w-104
            md:w-112
            lg:w-120
            h-auto
            "
    />
        </div>

        {/* CONTEÚDO */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h1 className="font-jersey text-white text-4xl sm:text-5xl md:text-7xl lg:text-6xl leading-tight">
            O SHOW DE ZOZO
        </h1>

        <p className="font-jersey text-white text-xl sm:text-2xl md:text-4xl lg:text-4xl">
            SINTA A ADRENALINA EM NOSSO SHOW
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
            FAÇA O DOWNLOAD JÁ
            </button>
            <button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
            SAIBA MAIS
            </button>
        </div>
        </div>

    </div>
    </section>
);
}
