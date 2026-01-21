import Header from "../components/Header";
import Intro from "../components/Intro";
import Games from "../components/Games";
import About from "../components/About";
import Footer from "../components/Footer";
import { BannerDecor } from "../components/BannerDecor";
import BannerDc from "../assets/home-bkg-decor.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Intro />
      <Games />
      <BannerDecor decorImg={BannerDc}/>
      <About />
      <Footer />
    </div>
  );
};

export default Index;
