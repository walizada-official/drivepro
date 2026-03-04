import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import driveProLogo from "@/assets/drivepro-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLanguage();
  const tr = translations.nav;

  const navItems = [
    { label: t(tr.home, lang), path: "/" },
    { label: t(tr.about, lang), path: "/about" },
    { label: t(tr.partners, lang), path: "/partners" },
    { label: t(tr.contact, lang), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src={driveProLogo} alt="DrivePro Logo" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "de" ? "en" : "de")}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === "de" ? "EN" : "DE"}
          </button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">{t(tr.getARide, lang)}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setLang(lang === "de" ? "en" : "de")}
                className="flex items-center gap-1.5 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                {lang === "de" ? "English" : "Deutsch"}
              </button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>{t(tr.getARide, lang)}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
