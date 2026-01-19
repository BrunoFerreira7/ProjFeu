import { Toaster } from "./components/ui/toaster"; // gestão error msj 
import { TooltipProvider } from "./components/ui/tooltip"; // para os tooltips dos botões
import { BrowserRouter, Routes, Route } from "react-router-dom"; // navegação sem recarregar páginas
import Index from "./pages/Index"; // homepage
import SobreNos from "./pages/SobreNos";
import TrabalheConosco from "./pages/TrabalheConosco";
import Novidades from "./pages/Novidades";
import EmConstrucao from "./pages/EmConstrucao";
import { ScrollToTop } from "./components/ScrollToTop"; // custom component faz scroll pro topo quando modar rota

const App = () => (
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
      <ScrollToTop /> 
        <Routes>
          {/* LINKANDO AS PÁGINAS NO HOME */}
          <Route path="/" element={<Index />} /> {/* Homepage */}
          {/* Substituir pelas páginas prontas */}
          <Route path="/sobre-nos" element={<SobreNos />} />  
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/emconstrucao" element={<EmConstrucao />} />
          {/* Colocar os outras paths embaixo */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
);

export default App;