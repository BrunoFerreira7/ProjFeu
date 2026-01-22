import { Toaster } from "./components/ui/toaster"; // gestão error msj
import { TooltipProvider } from "./components/ui/tooltip"; // para os tooltips dos botões
import { BrowserRouter, Routes, Route } from "react-router-dom"; // navegação sem recarregar páginas
import Index from "./pages/Index"; // homepage
import SobreNos from "./pages/SobreNos";
import TrabalheConosco from "./pages/TrabalheConosco";
import Novidades from "./pages/Novidades";
import Jogos from "./pages/Jogos";
import { ScrollToTop } from "./components/ScrollToTop"; // custom component faz scroll pro topo quando modar rota
import TermoUso from "./pages/Termouso";
import Privacidade from "./pages/Privacidade";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
    <Header />
      <ScrollToTop />
      <Routes>
        {/* LINKANDO AS PÁGINAS NO HOME */}
        <Route path="/" element={<Index />} /> {/* Homepage */}
        {/* Substituir pelas páginas prontas */}
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/termosdeuso" element={<TermoUso />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        {/* Colocar os outras paths embaixo */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
