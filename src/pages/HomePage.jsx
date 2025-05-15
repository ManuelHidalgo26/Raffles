
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Gift, BarChart3, BellRing, Edit3 } from "lucide-react";

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="feature-card text-center p-6 md:p-8"
  >
    <div className="inline-block p-3 mb-4 bg-primary/20 rounded-full">
      {React.cloneElement(icon, { size: 32, className: "text-primary" })}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const HomePage = () => {
  const features = [
    {
      icon: <Users />,
      title: "Registro y Gestión de Usuarios",
      description: "Crea tu cuenta fácilmente y gestiona tus participaciones en sorteos.",
      delay: 0.1,
    },
    {
      icon: <Edit3 />,
      title: "Creación Personalizada de Sorteos",
      description: "Define reglas, premios y personaliza la apariencia de tus sorteos.",
      delay: 0.2,
    },
    {
      icon: <ShieldCheck />,
      title: "Seguridad y Transparencia",
      description: "Selección aleatoria de ganadores con algoritmos seguros y auditables.",
      delay: 0.3,
    },
    {
      icon: <BellRing />,
      title: "Notificaciones en Tiempo Real",
      description: "Mantente informado sobre participaciones, resultados y nuevos sorteos.",
      delay: 0.4,
    },
    {
      icon: <BarChart3 />,
      title: "Estadísticas de Participación",
      description: "Visualiza datos y rendimiento de tus sorteos en tiempo real.",
      delay: 0.5,
    },
    {
      icon: <Gift />,
      title: "Premios Increíbles",
      description: "Participa para ganar premios fantásticos en una amplia variedad de categorías.",
      delay: 0.6,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="hero-bg-gradient pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
              La Plataforma Definitiva para tus{" "}
              <span className="gradient-text">Sorteos Online</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Gestiona y participa en sorteos de manera fácil, segura y transparente. Únete a la comunidad Raffles y empieza a ganar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="cta-gradient hover:opacity-90 shadow-lg" asChild>
                <Link to="/sorteos">Explorar Sorteos</Link>
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg border-primary/50 text-primary hover:bg-primary/10" asChild>
                <Link to="/crear-sorteo">Crear un Sorteo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Funcionalidades Clave</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Descubre todo lo que Raffles te ofrece para una experiencia de sorteos inigualable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 md:p-12 rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  ¿Listo para Empezar?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Regístrate hoy mismo y descubre un mundo de oportunidades. Organiza sorteos impactantes o participa para ganar premios emocionantes. ¡La suerte te espera!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <Button size="lg" className="cta-gradient hover:opacity-90" asChild>
                     <Link to="/registro">Crear Cuenta Gratis</Link>
                   </Button>
                   <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" asChild>
                     <Link to="/sorteos">Ver Sorteos Activos</Link>
                   </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 mt-8 lg:mt-0"
              >
                <img  class="rounded-lg shadow-2xl w-full h-auto object-cover" alt="Man holding a prize ticket with excitement" src="https://images.unsplash.com/photo-1576481564650-61d2ed81f6d5" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

       <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">¿Cómo Funciona?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Participar u organizar sorteos en Raffles es muy sencillo. Sigue estos simples pasos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-3">1</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Regístrate o Inicia Sesión</h3>
              <p className="text-sm text-muted-foreground">Crea tu cuenta en segundos o accede si ya eres miembro.</p>
            </motion.div>
             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-3">2</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Explora o Crea</h3>
              <p className="text-sm text-muted-foreground">Busca sorteos interesantes para participar o crea el tuyo propio con tus reglas.</p>
            </motion.div>
             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-3">3</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Participa y Gana</h3>
              <p className="text-sm text-muted-foreground">¡Únete a los sorteos que te gusten y cruza los dedos para ser el próximo ganador!</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
