import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cta/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your 
            business goals. Get a free consultation with our experts today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroSolid" size="xl" asChild>
              <Link to="/contact">
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5" />
                Talk to Expert
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/50">
            No commitment required • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
