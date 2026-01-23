import Intro from "../components/Intro";
import Games from "../components/Games";
import About from "../components/About";
import { BannerDecor } from "../components/BannerDecor";
import BannerDc from "../assets/home-bkg-decor.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Intro />
      <Games />
      <BannerDecor decorImg={BannerDc} />
      <About />
    </div>
  );
};

export default Index;
