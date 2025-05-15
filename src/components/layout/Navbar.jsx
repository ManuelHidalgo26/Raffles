
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Ticket, PlusCircle, UserCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/69860945-5e2a-4fd2-aa3c-97a6a2634b72/f91d90bda6b8ad1341e978ce03ad496f.png";

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Inicio", icon: <Gift size={18} /> },
    { to: "/sorteos", label: "Sorteos", icon: <Ticket size={18} /> },
    { to: "/crear-sorteo", label: "Crear Sorteo", icon: <PlusCircle size={18} /> },
    { to: "/dashboard", label: "Mi Panel", icon: <UserCircle size={18} /> },
  ];

  const activeLinkClass = "text-primary font-semibold";
  const inactiveLinkClass = "hover:text-primary transition-colors text-foreground/80";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img  src={logoUrl} alt="Raffles Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold gradient-text">Raffles</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} flex items-center gap-1.5 text-sm`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button className="cta-gradient hover:opacity-90" asChild>
              <Link to="/registro">Registrarse</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/40 bg-background/95"
        >
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `${
                    isActive ? activeLinkClass : inactiveLinkClass
                  } flex items-center gap-2 rounded-md px-3 py-2 text-base`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
               <Button variant="outline" asChild>
                <Link to="/login" onClick={toggleMenu}>Iniciar Sesión</Link>
              </Button>
              <Button className="cta-gradient hover:opacity-90" asChild>
                <Link to="/registro" onClick={toggleMenu}>Registrarse</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
