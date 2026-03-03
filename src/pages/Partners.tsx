import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Car, Globe, Handshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "Uber",
    desc: "The world's largest ride-hailing platform. DrivePro drivers deliver premium Uber experiences across the city.",
    color: "from-primary to-accent",
  },
  {
    name: "Bolt",
    desc: "Europe's fastest-growing mobility platform. We bring reliable Bolt rides powered by our professional fleet.",
    color: "from-accent to-primary",
  },
  {
    name: "More Coming Soon",
    desc: "We're constantly expanding our partnerships to bring you more options and better coverage.",
    color: "from-primary/60 to-accent/60",
  },
];

const benefits = [
  { icon: Car, title: "Professional Fleet", desc: "Well-maintained vehicles meeting the highest standards." },
  { icon: Globe, title: "Wide Coverage", desc: "Operating across multiple cities and expanding." },
  { icon: Handshake, title: "Trusted Partners", desc: "Working with platforms you already know and trust." },
  { icon: TrendingUp, title: "Growing Network", desc: "Constantly adding new platforms and routes." },
];

const Partners = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Partners</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We collaborate with leading ride-hailing platforms to ensure you always get the best ride, wherever you are.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Partner Cards */}
    <section className="pb-20">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border border-border bg-gradient-card p-8 group hover:shadow-glow transition-shadow duration-500"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color}`} />
            <h3 className="font-display text-2xl font-bold mb-3">{p.name}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Why <span className="text-gradient">Partner</span> With Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Partners;
