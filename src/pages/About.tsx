import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Award } from "lucide-react";
import aboutTeam from "@/assets/profile2jpg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const About = () => {
  const { lang } = useLanguage();
  const tr = translations.about;

  const values = [
    { icon: Shield, title: t(tr.safetyFirst, lang), desc: t(tr.safetyFirstDesc, lang) },
    { icon: Users, title: t(tr.communityDriven, lang), desc: t(tr.communityDrivenDesc, lang) },
    { icon: Zap, title: t(tr.fastReliable, lang), desc: t(tr.fastReliableDesc, lang) },
    { icon: Award, title: t(tr.qualityService, lang), desc: t(tr.qualityServiceDesc, lang) },
  ];

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t(tr.title, lang)} <span className="text-gradient">DrivePro</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t(tr.desc, lang)}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
              <img src={aboutTeam} alt="DrivePro team" className="rounded-xl shadow-card w-full object-cover aspect-square" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">{t(tr.ourStory, lang)}</h2>
            <p className="text-muted-foreground mb-4">{t(tr.storyP1, lang)}</p>
            <p className="text-muted-foreground">{t(tr.storyP2, lang)}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            {t(tr.ourValues, lang)} <span className="text-gradient">{t(tr.values, lang)}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gradient-card rounded-xl p-6 border border-border"
              >
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
