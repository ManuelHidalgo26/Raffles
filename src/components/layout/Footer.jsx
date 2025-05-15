
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/69860945-5e2a-4fd2-aa3c-97a6a2634b72/f91d90bda6b8ad1341e978ce03ad496f.png";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { to: "/", label: "Inicio" },
    { to: "/sorteos", label: "Sorteos" },
    { to: "/crear-sorteo", label: "Crear Sorteo" },
    { to: "/terminos", label: "Términos y Condiciones" },
    { to: "/privacidad", label: "Política de Privacidad" },
  ];

  return (
    <footer className="bg-muted/80 text-muted-foreground border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img  src={logoUrl} alt="Raffles Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">Raffles</span>
            </Link>
            <p className="text-sm">
              Tu plataforma confiable para participar y organizar sorteos online de forma fácil, segura y transparente.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-3">Enlaces Rápidos</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-3">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/terminos" className="text-sm hover:text-primary transition-colors">Términos de Servicio</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-sm hover:text-primary transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm hover:text-primary transition-colors">Política de Cookies</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-foreground mb-3">Síguenos</h5>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-md hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/60 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Raffles. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="group p-2 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
