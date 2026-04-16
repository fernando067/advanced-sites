import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2.5" : "py-4"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-4">
        <img src={logo} alt="Advanced MKT" className="h-7 md:h-9" width={240} height={49} loading="eager" />
        <a
          href="#cta-final"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary hover:gap-2.5 hover:shadow-[var(--shadow-glow)]"
        >
          Agendar Reunião
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
