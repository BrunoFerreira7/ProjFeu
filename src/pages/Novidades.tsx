import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { BannerPage } from "../components/BannerPage";
import bannerBg from "../assets/news-bkg.png";

const newsItems = [
  {
    id: 1,
    title: "Dragon's Fury 2 anunciado oficialmente",
    date: "12 Jan 2024",
    category: "Anúncio",
    excerpt:
      "Após meses de especulação, confirmamos oficialmente o desenvolvimento de Dragon's Fury 2. O jogo promete gráficos revolucionários e uma história ainda mais épica.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80",
  },
  {
    id: 2,
    title: "Cosmic Assault atinge 5 milhões de jogadores",
    date: "08 Jan 2024",
    category: "Marco",
    excerpt:
      "Nosso título mais recente alcançou a marca de 5 milhões de jogadores ativos em apenas 3 meses de lançamento. Agradecemos a toda nossa comunidade!",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&q=80",
  },
  {
    id: 3,
    title: "Atualização de inverno para Neon Velocity",
    date: "02 Jan 2024",
    category: "Update",
    excerpt:
      "A atualização de inverno de Neon Velocity traz novas pistas, veículos e um modo de jogo inédito. Disponível agora para todos os jogadores.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
  },
  {
    id: 4,
    title: "FEU Games Studio na Brasil Game Show 2025",
    date: "28 Dez 2025",
    category: "Evento",
    excerpt:
      "Estaremos presentes na BGS 2025 com um estande exclusivo. Venha conhecer nossos próximos lançamentos e participar de atividades especiais.",
    image:
      "https://images.unsplash.com/photo-1614738499301-d2eed34f7b11?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Parceria com estúdio japonês para novo projeto",
    date: "20 Dez 2023",
    category: "Parceria",
    excerpt:
      "Anunciamos uma parceria estratégica com o renomado estúdio Sakura Interactive para o desenvolvimento de um RPG inovador.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
  },
  {
    id: 6,
    title: "Retrospectiva 2023: Um ano de conquistas",
    date: "15 Dez 2023",
    category: "Blog",
    excerpt:
      "2023 foi um ano incrível para a FEU Games Studio. Confira os principais marcos e conquistas que alcançamos junto com nossa comunidade.",
    image:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&q=80",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Anúncio: "bg-primary/10 text-primary",
    Marco: "bg-accent/10 text-accent",
    Update: "bg-secondary/10 text-secondary",
    Evento: "bg-green-500/10 text-green-500",
    Parceria: "bg-purple-500/10 text-purple-500",
    Blog: "bg-blue-500/10 text-blue-500",
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

const Novidades = () => {
  return (
    <div className="min-h-screen bg-background">
      <BannerPage title="Novidades" backgroundImg={bannerBg} />

      {/*Main Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-medium mb-6">
              Blog & Notícias
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Novidades da FEU
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Fique por dentro das últimas notícias, atualizações de jogos,
              eventos e tudo que acontece no universo FEU Games Studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl bg-surface border border-border overflow-hidden"
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(newsItems[0].category)}`}
                >
                  {newsItems[0].category}
                </span>
                <span className="text-muted-foreground text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {newsItems[0].date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 hover:text-blue-700 transition-colors cursor-pointer">
                {newsItems[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {newsItems[0].excerpt}
              </p>
              <Button variant="heroOutline" className="w-fit">
                Ler mais
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(1).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl bg-surface border border-border overflow-hidden hover:border-blue-500 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}
                    >
                      {news.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg">
              Carregar mais notícias
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Novidades;
