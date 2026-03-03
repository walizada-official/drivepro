import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { lang } = useLanguage();
  const tr = translations.contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: t(tr.toastTitle, lang), description: t(tr.toastDesc, lang) });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t(tr.getIn, lang)} <span className="text-gradient">{t(tr.touch, lang)}</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t(tr.desc, lang)}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">{t(tr.contactInfo, lang)}</h2>
                <p className="text-muted-foreground mb-8">{t(tr.contactInfoDesc, lang)}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(tr.email, lang)}</h3>
                  <p className="text-sm text-muted-foreground">info@drivepro.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(tr.phone, lang)}</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(tr.office, lang)}</h3>
                  <p className="text-sm text-muted-foreground">123 Mobility Street, Tech City</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card border border-border rounded-xl p-8 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t(tr.firstName, lang)}</label>
                  <Input placeholder="Max" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t(tr.lastName, lang)}</label>
                  <Input placeholder="Mustermann" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t(tr.email, lang)}</label>
                <Input type="email" placeholder="max@beispiel.de" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t(tr.subject, lang)}</label>
                <Input placeholder={t(tr.subjectPlaceholder, lang)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t(tr.message, lang)}</label>
                <Textarea placeholder={t(tr.messagePlaceholder, lang)} rows={4} required />
              </div>
              <Button variant="hero" className="w-full" disabled={loading}>
                {loading ? t(tr.sending, lang) : t(tr.sendMessage, lang)}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
