import Header from "./componets/Header/header";
import Footer from "./componets/Footer/footer";
import Sectionjogos from "./componets/section/section-jogos";
import logo from "./assets/logo-doug.png";

function App() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col bg-slate-950 text-white">

        {/* MAIN */}
        <main className="flex-1 pt-32 px-8 md:px-16 flex items-center justify-center">
          
          {/* Conteúdo central */}
          <section className="flex items-center justify-center h-[70vh] w-full">
            
            <div className="flex items-center gap-6 md:gap-8">
              
              <img
                src={logo}
                alt="Casa Feu Jogos Studios"
                className="h-16 md:h-20"
              />

              <div className="leading-tight">
                <p className="text-2xl md:text-3xl font-semibold">
                  casa feu jogos
                </p>
                <strong className="tracking-[0.4em] text-xl md:text-2xl block mt-1">
                  studios
                </strong>
              </div>

            </div>

          </section>
        </main>

        {/* Section Jogos */}
        <Sectionjogos />

      </div>

      <Footer />
    </>
  );
}

export default App;
