import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import driveProLogo from "@/assets/drivepro-logo.png";

const Footer = () => {
  const { lang } = useLanguage();
  const tr = translations.footer;
  const nav = translations.nav;

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={driveProLogo} alt="DrivePro Logo" className="h-10 mb-3" />
            <p className="text-sm text-muted-foreground">{t(tr.tagline, lang)}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">{t(tr.navigation, lang)}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">{t(nav.home, lang)}</Link>
              <Link to="/about" className="hover:text-primary transition-colors">{t(nav.about, lang)}</Link>
              <Link to="/partners" className="hover:text-primary transition-colors">{t(nav.partners, lang)}</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">{t(nav.contact, lang)}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">{t(tr.services, lang)}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>{t(tr.cityRides, lang)}</span>
              <span>{t(tr.airportTransfers, lang)}</span>
              <span>{t(tr.corporateTravel, lang)}</span>
              <span>{t(tr.longDistance, lang)}</span>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">{t(tr.contact, lang)}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>info@drivepro.com</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DrivePro. {t(tr.allRights, lang)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
