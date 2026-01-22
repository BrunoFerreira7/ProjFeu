import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Send, CheckCircle, Users, Rocket, Heart, Coffee } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { BannerPage } from "../components/BannerPage";
import bannerDc from "../assets/career-bkg.png";

const benefits = [
  {
    icon: Rocket,
    title: "Crescimento",
    description: "Oportunidades de desenvolvimento profissional contínuo.",
  },
  {
    icon: Users,
    title: "Equipe Incrível",
    description: "Trabalhe com profissionais apaixonados por jogos.",
  },
  {
    icon: Heart,
    title: "Benefícios",
    description: "Plano de saúde, vale-refeição e muito mais.",
  },
  {
    icon: Coffee,
    title: "Ambiente",
    description: "Escritório moderno com áreas de descanso e jogos.",
  },
];

const TrabalheConosco = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">

      <BannerPage title="Trabalhe Conosco" backgroundImg={bannerDc}/>

      {/* main Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-medium mb-6">
              Carreiras
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Faça parte do universo FEU
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Junte-se ao nosso time e ajude a criar os jogos do futuro. 
              Estamos sempre em busca de talentos apaixonados por games!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-surface border border-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-background" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">
                Como se Candidatar
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Estamos sempre em busca de pessoas talentosas e apaixonadas por jogos. 
                Se você quer fazer parte do nosso time, preencha o formulário ao lado 
                com suas informações e uma breve mensagem sobre você.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-muted-foreground">
                    Envie seu currículo e portfólio (se aplicável) anexando links na mensagem.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-muted-foreground">
                    Conte sobre sua experiência com jogos e o que te motiva a trabalhar conosco.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-muted-foreground">
                    Nossa equipe de RH analisará sua candidatura e entrará em contato.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mt-6 text-sm">
                Você também pode enviar seu currículo diretamente para:{" "}
                <a href="mailto:carreiras@feugames.com" className="text-blue-600 hover:underline">
                  carreiras@feugames.com
                </a>
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-surface border border-border"
            >
              <h3 className="font-display text-xl font-bold mb-6">Envie sua candidatura</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background hover:border-blue-600 focus:border-blue-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background hover:border-blue-600 focus:border-blue-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte sobre você, sua experiência e por que quer trabalhar conosco..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background hover:border-blue-600 focus:border-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Candidatura
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrabalheConosco;
