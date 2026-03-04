import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Clock, Shield, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import taxi1 from "@/assets/taxi-1.jpeg";
import taxi2 from "@/assets/taxi-2.jpg";
import taxi3 from "@/assets/taxi-3.jpg";
import taxi4 from "@/assets/taxi-4.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Index = () => {
  const { lang } = useLanguage();
  const tr = translations.index;

  const stats = [
    { value: "10K+", label: t(tr.stats.happyRiders, lang) },
    { value: "500+", label: t(tr.stats.proDrivers, lang) },
    { value: "15+", label: t(tr.stats.cities, lang) },
    { value: "4.9", label: t(tr.stats.avgRating, lang) },
  ];

  const features = [
    { icon: Car, title: t(tr.features.premiumRides, lang), desc: t(tr.features.premiumRidesDesc, lang) },
    { icon: Clock, title: t(tr.features.onTimePickup, lang), desc: t(tr.features.onTimePickupDesc, lang) },
    { icon: Shield, title: t(tr.features.safeInsured, lang), desc: t(tr.features.safeInsuredDesc, lang) },
    { icon: Star, title: t(tr.features.topRated, lang), desc: t(tr.features.topRatedDesc, lang) },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="City at night with ride-sharing cars" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              {t(tr.heroTitle1, lang)}{" "}
              <span className="text-gradient">{t(tr.heroTitle2, lang)}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              {t(tr.heroDesc, lang)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  {t(tr.bookARide, lang)} <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/partners">{t(tr.ourPartners, lang)}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t(tr.whyChoose, lang)} <span className="text-gradient">DrivePro</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t(tr.whyChooseDesc, lang)}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-glow transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t(tr.fleet.title, lang)}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t(tr.fleet.desc, lang)}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[taxi1, taxi2, taxi3, taxi4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={img}
                  alt={`DrivePro Taxi ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t(tr.readyToRide, lang)} <span className="text-gradient">{t(tr.ride, lang)}</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(tr.readyDesc, lang)}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">{t(tr.getStarted, lang)} <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">{t(tr.learnMore, lang)}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
