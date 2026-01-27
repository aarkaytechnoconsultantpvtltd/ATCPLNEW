import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, ArrowRight, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { IntegrationDetailModal } from "@/components/modals/IntegrationDetailModal";

const integrationCategories = [
  {
    name: "Hardware & Automation",
    integrations: [
      {
        name: "ANPR Camera Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/ANPR_Camera_Integration.png",
        description: "Real-time number plate detection using industrial-grade vision cameras.",
        features: [
          "Live license plate recognition",
          "ERP & gate automation sync",
          "High accuracy detection",
          "Works with any IP camera",
        ],
      },
      {
        name: "System Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/System_Integration.png",
        description: "Connect machines and automation systems for real-time process control.",
        features: [
          "Live machine data exchange",
          "Modbus & OPC support",
          "Alarm/event syncing",
          "Production monitoring",
        ],
      },
      {
        name: "Weighing Scale Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/Weighing_Scale_Integration.png",
        description: "Automated weight capture from industrial scales.",
        features: [
          "Serial & TCP inputs",
          "Accurate auto weight capture",
          "Zero manual entry",
          "Multiple protocol support",
        ],
      },
    ],
  },

  {
    name: "Surveillance & Monitoring",
    integrations: [
      {
        name: "Weighbridge Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/Weighbridge_Integration.png",
        description: "Integrated weighbridge system with camera proof and auto recording.",
        features: [
          "Dual snapshot receipts",
          "Vehicle plate capture",
          "Fraud prevention",
          "Auto/RFID/manual support",
        ],
      },
      {
        name: "Vision System Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/Vision_System_Integration.png",
        description: "High-performance machine vision for quality inspection.",
        features: [
          "Precision inspection",
          "Image automation",
          "Cognex & Honeywell support",
          "Reliable in harsh environments",
        ],
      },
    ],
  },

  {
    name: "Communication",

    integrations: [
      {
        name: "SMS / WhatsApp / Email Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/SMS_WhatsApp_Email_Integration.png",
        description: "Instant alerts, OTPs, and notifications across multiple channels.",
        features: [
          "Real-time alerts",
          "Transactional messaging",
          "Multi-channel support",
          "Secure API integration",
        ],
      },
    ],
  },

  {
    name: "Financial & ERP Systems",
    integrations: [
      {
        name: "Payroll Software Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/Payroll_Software_Integration.png",
        description: "Sync staff attendance, shifts, and workforce data effortlessly.",
        features: [
          "Payroll-ready sync",
          "Shift & attendance mapping",
          "Fast processing",
          "Secure exchange",
        ],
      },
      {
        name: "Tally Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/Tally_Integration.png",
        description: "Automate accounting, stock, and voucher entries.",
        features: [
          "Auto voucher posting",
          "Live stock sync",
          "Secure API exchange",
          "Real-time automation",
        ],
      },
      {
        name: "SAP Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/SAP_Integration.png",
        description: "Seamless connection to SAP ECC or S/4HANA.",
        features: [
          "BAPI/RFC support",
          "Material sync",
          "Goods movement posting",
          "Live updates",
        ],
      },
      {
        name: "GoFrugal API Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/GoFrugal_API_Integration.png",
        description: "Retail & POS automation powered by GoFrugal APIs.",
        features: [
          "Order sync",
          "Inventory updates",
          "Customer management",
          "POS-level automation",
        ],
      },
      {
        name: "TCS iON API Integration",
        image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/integration/TCS_iON_API_Integration.png",
        description: "Automate enterprise workflows with TCS iON.",
        features: [
          "Secure APIs",
          "Real-time data flow",
          "Assessment sync",
          "Scalable modules",
        ],
      },
    ],
  },
];

const allIntegrations = integrationCategories.flatMap((category) =>
  category.integrations.map((i) => ({
    ...i,
    category: category.name,
    readTime: `${i.features.length} features`,
  }))
);

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIntegration, setSelectedIntegration] = useState<typeof allIntegrations[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleIntegrationClick = (integration: typeof allIntegrations[0]) => {
    setSelectedIntegration(integration);
    setModalOpen(true);
  };

  // 🔍 Filtering Logic
  const filteredIntegrations = allIntegrations.filter((item) => {
    const q = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.features.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-semibold text-sm uppercase block mb-3">
              Integrations
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
              10+ Pre-Built Integrations
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">
              Connect your operations effortlessly with plug-and-play
              integrations.
            </p>

            {/* ⭐ Search Bar Functional */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.length > 0 ? (
              filteredIntegrations.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleIntegrationClick(item)}
                  className="bg-card rounded-2xl overflow-hidden shadow-md border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all cursor-pointer group flex flex-col"
                >
                  {/* Image/Icon Section */}
                  <div className="h-48 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/20 overflow-hidden relative flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        // Fallback when image fails to load
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-icon absolute inset-0 flex items-center justify-center';
                          fallback.innerHTML = `
                            <div class="text-center">
                              <div class="w-20 h-20 mx-auto mb-3 rounded-2xl bg-accent/20 flex items-center justify-center">
                                <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                              </div>
                              <p class="text-xs text-muted-foreground font-medium">${item.category}</p>
                            </div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3 inline-block">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {item.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features Preview */}
                    <div className="mb-4 space-y-1">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <svg className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {item.features.length > 2 && (
                        <p className="text-xs text-accent font-medium pl-5">
                          +{item.features.length - 2} more features
                        </p>
                      )}
                    </div>

                    {/* Footer - Pinned to bottom */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {item.features.length} Features
                      </span>

                      <span className="flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <p className="text-center col-span-full text-muted-foreground">
                No integrations found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Integration?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team can build advanced custom integrations tailored for you.
            </p>

            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />

      {/* Integration Detail Modal */}
      <IntegrationDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        integration={selectedIntegration}
      />

    </Layout>
  );
};

export default Integrations;
