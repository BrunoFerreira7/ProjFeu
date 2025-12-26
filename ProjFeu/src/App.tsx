import Header from "./componets/Header/header";
import Footer from "./componets/Footer/footer";

function App() {
  return (
    <>
      <Header />

      <main className="p-10 text-white text-3xl">
        Conteúdo da página...
      </main>

      <div className="min-h-screen flex flex-col">  
      {/* Conteúdo da página */}
      <main className="flex-1">
        {/* Aqui vai seu conteúdo */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
    </>
  );
}

export default App;