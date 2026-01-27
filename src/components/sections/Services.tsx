import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  ScanBarcode, 
  ScanEye, 
  Settings, 
  Smartphone, 
  ClipboardList, 
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Server,
    title: "IT Infrastructure & Software Solutions",
    description:
      "We deliver end-to-end IT infrastructure and software solutions, ensuring your systems are secure, scalable, and optimized for performance.",
    features: [
      "Network design & implementation",
      "Server setup & management",
      "Enterprise software solutions",
      "Cloud deployment & data security",
      "Managed IT services",
    ],
  },
  {
    icon: ScanBarcode,
    title: "Tracking & Tracing (Barcode/RFID)",
    description:
      "Our Barcode and RFID solutions streamline operations, covering data capture, custom tagging, label printing, and hardware deployment for high accuracy.",
    features: [
      "Barcode & RFID data capture systems",
      "Custom label design & printing",
      "RFID tagging solutions",
      "Scanners, printers & mobile devices",
      "Inventory & asset tracking automation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Computing & Custom Software",
    description:
      "We deliver robust mobile computing and custom software solutions, empowering your workforce with real-time visibility and workflow automation using rugged devices.",
    features: [
      "Handheld terminals & rugged tablets",
      "Cloud-connected mobile apps",
      "Workflow automation software",
      "Custom enterprise mobile solutions",
      "Seamless system integration",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Technology Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From IT infrastructure to AI-driven automation, we deliver
            end-to-end technology services that empower businesses for the
            future.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="cta" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
