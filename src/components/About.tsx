import { motion } from "framer-motion"; // react animation library
import { Button } from "../components/ui/button"; // custom component
import  aboutBg from "../assets/about-bkg.png"; // background banner
import teamImg from "../assets/team.jpg"; // team profile pic
import { Link } from "react-router-dom"; // to link btns

const About = () => {
  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-medium mb-6">
              Sobre nós
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-6">
              Inovando no Universo Gaming
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Fundada em 2023, a <span className="font-semibold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">FEU GAMES STUDIO</span> nasceu 
              da paixão por criar experiências de jogos memoráveis. 
              Nossa missão é transportar jogadores para mundos extraordinários através de histórias 
              envolventes e gameplay inovador.
            </p>

            {/* Sobre nós page btn */}
            <div className="flex gap-8">
             <Button variant="heroOutline" size="xl" asChild>
              <Link to="/sobre-nos#about">
              SAIBA MAIS SOBRE NÓS
              </Link>
            </Button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="w-full"
          >
            <img
              src={teamImg}
              alt="team"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md h-auto rounded-2xl"
           />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
