import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every ride is monitored and insured for your peace of mind." },
  { icon: Users, title: "Community Driven", desc: "We build lasting relationships with drivers and riders alike." },
  { icon: Zap, title: "Fast & Reliable", desc: "Get matched with a driver in seconds, arrive on time every time." },
  { icon: Award, title: "Quality Service", desc: "Top-rated drivers and well-maintained vehicles guaranteed." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">DrivePro</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Founded with a mission to make urban transportation seamless, DrivePro partners with the world's leading ride-hailing platforms to deliver an exceptional experience for every passenger.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Image + Story */}
    <section className="pb-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutTeam}
            alt="DrivePro team in modern office"
            className="rounded-xl shadow-card w-full object-cover aspect-square"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            DrivePro started with a simple idea: what if getting a ride was as easy as pressing a button—and every ride felt premium? By partnering with platforms like Uber and Bolt, we've created a network of professional drivers who deliver comfort, safety, and reliability on every trip.
          </p>
          <p className="text-muted-foreground">
            Today, we serve thousands of riders across multiple cities, and we're just getting started. Our commitment to quality and innovation drives everything we do.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Our <span className="text-gradient">Values</span>
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

export default About;
