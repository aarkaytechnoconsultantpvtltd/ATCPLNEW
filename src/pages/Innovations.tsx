import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Network,
  Zap,
  Layers,
  Globe,
  ArrowRight,
  Award,
  Lightbulb,
  Rocket,
  Eye,
  ScanLine,
  HardHat,
  ActivitySquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { InnovationDetailModal } from "@/components/modals/InnovationDetailModal";

const innovations = [
  {
    icon: ActivitySquare,
    title: "Aarkay Fabric Inspection Data Logger System",
    category: "Industrial Automation",
    description:
      "An advanced IoT-enabled Fabric Inspection Data Logger (FIDL) system designed for the textile industry to provide complete roll traceability, live defect mapping, and seamless ERP integration. With 40+ successful installations, it’s revolutionizing quality control and production efficiency across textile plants.",
    highlights: [
      "40+ installations across major textile plants",
      "Complete roll traceability from loom to packing",
      "Real-time defect visualization and performance tracking",
    ],
    status: "Innovation",

    features: [
      "Complete roll traceability with barcode ID mapping",
      "Live defect mapping with graphical roll display",
      "Operator-wise performance monitoring and MIS reporting",
      "Seamless ERP integration for centralized data management",
      "Smart loom management with proactive maintenance alerts",
      "Automated FG sticker printing post-inspection",
      "Touchscreen and barcode-based data entry automation",
      "Customizable MIS and quality reports with one-click access",
      "Precise fault identification using TMS data integration",
    ],
    useCases: [
      "Textile manufacturing quality inspection",
      "Real-time defect and performance analytics",
      "Production optimization and efficiency monitoring",
      "Seamless ERP and central server data connectivity",
    ],
    benefits: [
      "30–40% increase in fabric productivity through accurate fault mapping",
      "Reduced manual work and errors via automated data logging",
      "Faster decision-making with live graphical defect mapping",
      "Improved transparency and efficiency across departments",
    ],
    solutionOverview:
      "Aarkay Techno Consultants Pvt. Ltd. offers a next-generation Fabric Inspection Data Logger (FIDL) that tracks every aspect of fabric inspection—from loom doffing to final packing. The system supports defect positioning, roll merging, re-inspection, and maintains parent-child roll relationships. DP Map-based fault visualization and meter-wise inspection deliver unparalleled accuracy and traceability, empowering textile industries with actionable insights and operational efficiency.",
  },


  {
    icon: HardHat,
    title: "Aarkay Overhead Crane Management System",
    category: "Industrial IoT",
    description:
      "An integrated and intelligent Overhead Crane Management System (OCMS) designed to optimize crane operations with real-time tracking, wireless control, and automation — ensuring enhanced safety, accuracy, and efficiency in industrial material handling.",
    highlights: [
      "Centralized crane control and monitoring",
      "Wireless Android-based operator terminals",
      "Real-time position sensing and movement tracking",
    ],
    status: "Innovation",

    features: [
      "Centralized server for crane command and monitoring",
      "Wi-Fi enabled LAN for seamless connectivity between cranes and handhelds",
      "WCS-based position sensing for accurate X-Y axis detection",
      "PLC/IO control for precise crane motion management",
      "Android-based terminals for remote crane operation",
      "Real-time data logging for complete movement traceability",
      "Scalable system supporting multiple cranes and stations",
      "User authentication and role-based control for secure operations",
    ],
    useCases: [
      "Heavy engineering and manufacturing plants",
      "Automated material handling in warehouses",
      "Industrial safety and productivity monitoring",
      "Smart factory automation and control",
    ],
    benefits: [
      "Improved operational efficiency and reduced downtime",
      "Accurate crane positioning using WCS-based sensors",
      "Enhanced operator safety through automated control logic",
      "Wireless control and feedback for flexible operation",
      "Complete data traceability and performance audit trail",
      "Easily scalable architecture for multi-crane setups",
    ],
    solutionOverview:
      "Aarkay Techno Consultants Pvt. Ltd. provides a next-generation Overhead Crane Management System (OCMS) that unifies control, safety, and analytics. The system integrates a centralized server, Wi-Fi-enabled LAN, WCS-type position sensors, PLC-based control, and Android handheld terminals — enabling precise, real-time crane movement management. This smart solution reduces human dependency, enhances safety, and improves efficiency across industrial operations, making it ideal for large-scale manufacturing and warehouse environments.",
  },
  {
    icon: ScanLine,
    title:
      "Aarkay Explo Print SD - Emulsion : L3 Online Post Printing Scanning, Packaging & Rejection SPM System",
    category: "Smart Manufacturing",
    description:
      "A high-speed, fully automated post-printing, scanning, and packaging system designed for explosive cartridge production. It ensures 100% barcode accuracy, compliance with PESO norms, and seamless data traceability from L1 to L3 levels.",
    highlights: [
      "Speed up to 300–400 cartridges per minute (multi-channel)",
      "PESO-compliant structured data mapping (L1–L3)",
      "Low printing cost and minimal wastage",
    ],
    status: "Innovation",

    features: [
      "Complete SS body construction for corrosion resistance",
      "Explosion-proof FLP motors for safety compliance",
      "Outdoor IP65-rated power cabinet with UPS backup",
      "VFD-based control system for smooth operation",
      "Automatic L1 sticker printing and mapping with L3 barcodes",
      "Dual operation modes – with rejection / without rejection",
      "CSV output generation for PESO and ERP integration",
      "Real-time barcode scanning and rejection control",
      "User-friendly design for easy operation and maintenance",
    ],
    useCases: [
      "Explosive cartridge post-printing and scanning",
      "Barcode validation and data traceability",
      "Automated rejection and packaging lines",
      "PESO-compliant data management and reporting",
    ],
    benefits: [
      "High-speed performance (70–90 cartridges per minute per channel)",
      "Up to 4 channels supporting 300–400 cartridges per minute total",
      "Low printing cost (< 4.5 paise per cartridge)",
      "Negligible wastage (less than 3–4%)",
      "Automatic rejection and labeling for flawless accuracy",
      "Seamless CSV output for PESO portal and ERP system integration",
      "Compliant with PESO-SETT norms for L1–L3 mapping",
      "Simple to maintain, implement, and operate",
    ],
    solutionOverview:
      "Aarkay Techno Consultants Pvt. Ltd. delivers a robust and compliant post-printing automation system for explosive cartridge manufacturers. Cartridges move through a conveyor where L3 barcodes are printed and verified in real-time. Valid cartridges are packed automatically, while unreadable ones are rejected. The system maintains L1–L3 mapping, generating CSV files for seamless integration with ERP and PESO portals. Designed with an SS body, FLP motors, and IP65-rated controls, it ensures durability, compliance, and operational efficiency while minimizing wastage and downtime.",
  },


];

// const patents = [
//   {
//     title: "Distributed AI Processing System",
//     year: "2023",
//     number: "US11,234,567",
//   },
//   {
//     title: "Real-time Data Synchronization Protocol",
//     year: "2023",
//     number: "US11,345,678",
//   },
//   {
//     title: "Predictive Cloud Resource Allocation",
//     year: "2022",
//     number: "US11,456,789",
//   },
//   {
//     title: "Zero-trust Integration Framework",
//     year: "2022",
//     number: "US11,567,890",
//   },
// ];

const researchAreas = [
  {
    title: "Generative AI",
    description:
      "Exploring new frontiers in content generation and creative AI applications",
  },
  {
    title: "Quantum Computing",
    description:
      "Preparing enterprise solutions for the quantum computing era",
  },
  {
    title: "Sustainable Tech",
    description:
      "Developing green computing solutions for eco-conscious enterprises",
  },
  {
    title: "Autonomous Systems",
    description: "Building self-healing and self-optimizing infrastructure",
  },
];

const Innovations = () => {
  const [selectedInnovation, setSelectedInnovation] = useState<
    (typeof innovations)[0] | null
  >(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleInnovationClick = (innovation: (typeof innovations)[0]) => {
    setSelectedInnovation(innovation);
    setModalOpen(true);
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
              Innovation Lab
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
              Pioneering Tomorrow's Technology Today
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70">
              Discover the breakthrough technologies and research initiatives that
              are shaping the future of enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground">Patents Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">$25M</div>
              <div className="text-muted-foreground">R&D Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">30+</div>
              <div className="text-muted-foreground">Research Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">6</div>
              <div className="text-muted-foreground">Innovation Labs</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Innovations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Breakthrough Solutions
            </h2>
            <p className="text-muted-foreground mt-2">
              Click on any innovation to learn more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleInnovationClick(innovation)}
                className="bg-card rounded-2xl p-8 shadow-md border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <innovation.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${innovation.status === "Production"
                        ? "bg-success/10 text-success"
                        : "bg-cta/10 text-cta"
                        }`}
                    >
                      {innovation.status}
                    </span>
                    <Eye className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-sm text-accent font-medium">
                  {innovation.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                  {innovation.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {innovation.description}
                </p>
                <div className="space-y-2 mb-6">
                  {innovation.highlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <span className="text-sm text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Intellectual Property
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Recent Patents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-md border border-border/50"
              >
                <Award className="w-8 h-8 text-cta mb-4" />
                <h3 className="font-bold text-foreground mb-2">{patent.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {patent.number} • {patent.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Research Areas */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Future Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Active Research Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partner CTA */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Rocket className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner With Our Innovation Lab
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Collaborate with our research team to solve your most challenging
              technical problems and gain early access to emerging technologies.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section> */}
      <CTASection />

      {/* Innovation Detail Modal */}
      <InnovationDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        innovation={selectedInnovation}
      />
    </Layout>
  );
};

export default Innovations;
