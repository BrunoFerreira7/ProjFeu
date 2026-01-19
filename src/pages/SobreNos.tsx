import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Zap, Linkedin, Github, Instagram, Twitter, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerBg from "../assets/about-bkg.png"; //banner image file
import { BannerPage } from "../components/BannerPage";
import { BannerDecor } from "../components/BannerDecor";
import bannerDc from "../assets/about-bkg-decor.png";
import douglasPhoto from "../assets/douglas.jpg";
import marianaPhoto from "../assets/mariana-lombardo.jpeg";
import brunoPhoto from "../assets/bruno-ferreira.jpg";
import mairaPhoto from "../assets/maira-moreno.jpg";

const values = [
  {
    icon: Heart,
    title: "Paixão por Jogos",
    description: "Amamos o que fazemos e isso se reflete em cada pixel dos nossos jogos.",
  },
  {
    icon: Users,
    title: "Jogadores em Primeiro Lugar",
    description: "Nossa comunidade é a razão da nossa existência. Ouvimos e entregamos.",
  },
  {
    icon: Zap,
    title: "Inovação Constante",
    description: "Buscamos sempre novas tecnologias e mecânicas para surpreender.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Não lançamos um jogo até que ele atinja nossos padrões de qualidade.",
  },
];

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Background Strip -> usa StripDecor.tsx component */}
      <BannerPage title="Sobre Nós" backgroundImg={bannerBg}/>
      
      {/* Intro Text Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mais que jogos. Experiências
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              O <span className="font-semibold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">FEU GAMES STUDIO</span> é
               movido pela paixão por jogos e pelo desejo de transformar ideias em
              experiências jogáveis no Brasil. Desenvolvemos projetos com criatividade, dedicação e um 
              olhar constante para evolução e qualidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-blue-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-background" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Criar jogos que transcendam o entretenimento, proporcionando experiências 
                memoráveis que conectem pessoas ao redor do mundo. Buscamos inovar 
                constantemente para entregar produtos que superem as expectativas dos jogadores.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-blue-500 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-background" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como um estúdio criativo de referência no desenvolvimento de jogos,
                valorizando a inovação, a identidade e a experiência do jogador,
                e estabelecendo novos padrões de qualidade na indústria.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-medium mb-6">
              Valores
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Nossos Valores como Empresa
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada linha de código que escrevemos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-surface border border-border hover:border-blue-500 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative */}
      <BannerDecor decorImg={bannerDc}/>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-medium mb-6">
              Equipe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Conheça a Equipe FEU
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça as pessoas talentosas que transformam ideias em experiências inesquecíveis!
            </p>
          </motion.div>
          
          {/* Repeater */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Douglas Feu",
                role: "Desenvolvedor & Fundador",
                bio: "Analista de Sistemas e desenvolvedor de jogos indie. Equilibra a rotina técnica com a construção criativa de mundos interativos.",
                photo: douglasPhoto,
                linkedin: "#",
                github: "#",
                twitter: "https://x.com/DougFeu",
                website: "https://store.steampowered.com/curator/44740826",
              },
              {
                name: "Bruno Ferreira",
                role: "Desenvolvedor Web & Estudante de Matemática (UERJ)",
                bio: "Cria soluções limpas e centradas no usuário, com foco em resolver problemas reais com qualidade e criatividade.",
                photo: brunoPhoto,
                linkedin: "https://www.linkedin.com/in/bruno-ferreira-031874262/",
                github: "https://github.com/BrunoFerreira7",
                website: "https://brunoferreira7.github.io/Portifolio_2025/",
              },
              {
                name: "Maira Moreno",
                role: "Desenvolvedora Web & Pesquisadora (Fiocruz)",
                bio: "Profissional com atuação multidisciplinar, abrangendo desenvolvimento web front-end e visualização de dados.",
                photo: mairaPhoto,
                linkedin: "https://www.linkedin.com/in/mairamorenoc/",
                github: "https://github.com/mairamorenoc",
                website:"#",
              },
              {
                name: "Mariana Lomardo",
                role: "Desenvolvedora Web & Estudante de Desenvolvimento de Sistemas",
                bio: "Especialista em desenvolvimento de soluções digitais, com foco em qualidade, usabilidade e experiência do usuário.",
                photo: marianaPhoto,
                linkedin: "#",
                github: "#",
                instagram: "#",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-surface border border-border hover:border-blue-500 transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.photo ?? "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-blue-700 text-lg mb-1">{member.name}</h3>
                <p className="text-white text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-800 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-800 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-800 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
