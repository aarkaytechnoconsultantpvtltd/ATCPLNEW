import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, TrendingUp, ArrowRight } from "lucide-react";

const achievements = [
  { icon: Award, value: "100+", label: "Industry Awards" },
  { icon: Users, value: "500+", label: "Projects Delivered" },
  { icon: Globe, value: "100+", label: "Partners" },
  { icon: TrendingUp, value: "85%", label: "Percentage Growth" },
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{item.value}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Quick Links Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how we drive innovation and deliver results across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">Integrations</h3>
              <p className="text-muted-foreground mb-6">
                Seamlessly connect your systems with 100+ pre-built integrations.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/integrations">
                  Explore Integrations <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">Innovations</h3>
              <p className="text-muted-foreground mb-6">
                See our breakthrough technologies and research initiatives.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/innovations">
                  View Innovations <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Explore our comprehensive solutions.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/solutions">
                  Read Solutions <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
