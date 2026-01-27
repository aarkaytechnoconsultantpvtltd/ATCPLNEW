import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Database,
  Shield,
  Smartphone,
  Brain,
  Settings,
  Headphones,
  LineChart,
  Globe,
  Server,
  Layers,
  ArrowRight,
  CheckCircle,
  Calendar,
  ScanBarcode,
  ScanEye,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import { BookDemoModal } from "@/components/modals/BookDemoModal";

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
    icon: ScanEye,
    title: "Vision Systems with AI/ML",
    description:
      "We offer high-speed, high-accuracy vision systems and industrial ID readers powered by AI/ML for precise quality control and defect detection.",
    features: [
      "Industrial vision inspection systems",
      "High-speed barcode & OCR reading",
      "Defect detection & quality control",
      "AI/ML-based identification systems",
      "Production line monitoring",
    ],
  },
  {
    icon: Settings,
    title: "SPM, System Integration, IoT & Industry 4.0",
    description:
      "We design Special Purpose Machines (SPM), IoT platforms, and integration solutions to connect machines, automate processes, and deliver real-time insights.",
    features: [
      "Custom Special Purpose Machines",
      "System integration solutions",
      "IoT-enabled automation",
      "Industry 4.0 implementation",
      "Real-time data & analytics",
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
  {
    icon: ClipboardList,
    title: "Project Consultation",
    description:
      "We provide expert consultation across IT, automation, tracking, and system integration, delivering scalable, cost-effective, and future-ready strategies.",
    features: [
      "IT & infrastructure consultation",
      "Automation & Industry 4.0 planning",
      "Tracking & tracing solution design",
      "System integration strategy",
      "End-to-end project guidance",
    ],
  },
];

const Services = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookDemo = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setDemoModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
              Comprehensive IT Services for Your Business
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">
              From software development to cybersecurity, we offer a full spectrum of IT
              services to help your business thrive in the digital age.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const [showFeatures, setShowFeatures] = useState(false);

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-8 shadow-md border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group flex flex-col h-full"
                >

                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground pt-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  {/* Features Preview or Full List */}
                  {showFeatures ? (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mb-4"
                    >
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  ) : (
                    <div className="mb-4 space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <svg className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 2 && (
                        <p className="text-xs text-accent font-medium pl-5">
                          +{service.features.length - 2} more features
                        </p>
                      )}
                    </div>
                  )}

                  {/* Footer - Features Toggle & Book Demo */}
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-border mt-auto">
                    <button
                      onClick={() => setShowFeatures(!showFeatures)}
                      className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ClipboardList className="w-3 h-3" />
                      {showFeatures ? 'Hide' : `${service.features.length}`} Features
                    </button>

                    <Button
                      variant="cta"
                      size="sm"
                      className="h-7 px-3 text-xs"
                      onClick={() => handleBookDemo(service.title)}
                    >
                      <Calendar className="w-3 h-3" />
                      Book Demo
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The ATC Group Advantage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "31+ Years Experience",
                description: "Over a decade of delivering successful IT solutions",
              },
              {
                title: "50+ Partnerships",
                description: "Trusted collaborations with leading tech providers",
              },
              {
                title: "500+ Projects",
                description: "Successfully completed projects across industries",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support for all your IT needs",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border/50"
              >
                <h3 className="text-2xl font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <BookDemoModal
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
        preSelectedSolution={selectedService}
        source="services"
      />
    </Layout>
  );
};

export default Services;
