import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Clock, Shield, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "10K+", label: "Happy Riders" },
  { value: "500+", label: "Pro Drivers" },
  { value: "15+", label: "Cities" },
  { value: "4.9", label: "Avg Rating" },
];

const features = [
  { icon: Car, title: "Premium Rides", desc: "Travel in comfort with our fleet of well-maintained vehicles." },
  { icon: Clock, title: "On-Time Pickup", desc: "Our drivers arrive within minutes, every single time." },
  { icon: Shield, title: "Safe & Insured", desc: "Every trip is fully insured with real-time tracking." },
  { icon: Star, title: "Top-Rated Drivers", desc: "Professionally trained and community-vetted drivers." },
];

const Index = () => (
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
            Your Ride,{" "}
            <span className="text-gradient">Elevated</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            DrivePro partners with Uber, Bolt, and more to deliver premium rides with professional drivers. Fast, safe, and always reliable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book a Ride <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/partners">Our Partners</Link>
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
            Why Choose <span className="text-gradient">DrivePro</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We go beyond the ride to deliver an experience that keeps you coming back.
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

    {/* CTA */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Ride</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of satisfied riders. Get in touch today to experience the DrivePro difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
