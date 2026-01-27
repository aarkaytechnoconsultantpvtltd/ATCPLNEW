import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { industries } from "@/data/industries";
import {
  Building2,
  Factory,
  Store,
  Car,
  Shield,
  Leaf,
  Stethoscope,
  Drill,
  Flame,
  Package,
  ArrowRight,
} from "lucide-react";

// Icon mapping
const iconMap: { [key: string]: any } = {
  fmcg: Package,
  textiles: Factory,
  explosives: Flame,
  "retails-distribution": Store,
  defence: Shield,
  agriculture: Leaf,
  automobiles: Car,
  aluminium: Factory,
  "pharma-healthcare": Stethoscope,
  mining: Drill,
  gas: Flame,
  "towers-steel": Building2,
};

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
              Tailored ERP Solutions for Every Sector
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70">
              Discover industry-specific solutions designed to meet your unique business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select an industry to explore our specialized solutions and see how we can transform your business
            </p>
          </motion.div>

          {/* Grid of Industry Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.slug] || Package;

              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/solutions/${industry.slug}`}
                    className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors mb-2">
                          {industry.label}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {industry.description || `Specialized solutions for ${industry.label.toLowerCase()} industry`}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-2xl p-8 border border-border/50"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We tailor solutions for unique requirements. Let's discuss how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
