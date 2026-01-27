// src/components/SolutionTemplate.tsx
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle,
  TrendingUp,
  Download,
  Calendar,
} from "lucide-react";
import { BrochureDownloadModal } from "@/components/modals/BrochureDownloadModal";
import { BookDemoModal } from "@/components/modals/BookDemoModal";

type RichItem = {
  title: string;
  coverImage?: string;
  benefits?: string[];
  keyFeatures?: string[];
  overview?: string; // HTML or plaintext
  slug?: string;
};

type SolutionLike = {
  icon?: any;
  title: string;
  tagline?: string;
  description?: string; // plain text or HTML
  benefits?: string[];
  caseStudy?: { client?: string; result?: string; description?: string };
  coverImage?: string;
};

type Props = {
  industry: string;
  extraItems?: Array<string | RichItem | SolutionLike>;
};

const SolutionTemplate = ({ industry, extraItems = [] }: Props) => {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState("");

  const handleDownloadBrochure = (title: string) => {
    setSelectedSolution(title);
    setBrochureModalOpen(true);
  };

  const handleBookDemo = (title: string) => {
    setSelectedSolution(title);
    setDemoModalOpen(true);
  };

  return (
    <Layout>
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Industry Focus</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">Solutions for {industry}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">Tailored technology solutions and services designed for the {industry} sector.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {extraItems.length > 0 && (
            <div className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our {industry} Solutions</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                    Explore our specialized solutions crafted to meet the unique challenges of the {industry} industry.
                  </p>
                </motion.div>
                <div className="max-w-5xl mx-auto space-y-8">
                  {extraItems.map((raw, index) => {
                    // Normalize to SolutionLike
                    let item: SolutionLike;
                    if (typeof raw === "string") item = { title: raw };
                    else if ("overview" in (raw as RichItem) && !(raw as SolutionLike).description) {
                      const r = raw as RichItem;
                      item = {
                        title: r.title,
                        description: r.overview,
                        benefits: r.benefits,
                        caseStudy: undefined,
                        coverImage: r.coverImage,
                      };
                    } else {
                      item = raw as SolutionLike;
                    }

                    return (
                      <motion.div
                        key={`${item.title}-${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`py-12 ${index !== extraItems.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                            <div className="flex items-start gap-4 mb-6">
                              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                {item.icon ? <item.icon className="w-8 h-8 text-accent" /> : <Code2 className="w-8 h-8 text-accent" />}
                              </div>
                              <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
                                {item.tagline && <p className="text-accent font-medium">{item.tagline}</p>}
                              </div>
                            </div>

                            {item.description && <p className="text-lg text-muted-foreground mb-8" dangerouslySetInnerHTML={{ __html: item.description }} />}

                            {item.benefits && (
                              <div className="space-y-3 mb-8">
                                {item.benefits.map((benefit) => (
                                  <div key={benefit} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                    <span className="text-foreground">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="flex flex-wrap gap-3">
                              <Button variant="cta" onClick={() => handleBookDemo(item.title)}>
                                <Calendar className="w-4 h-4" /> Book a Demo
                              </Button>
                              <Button variant="outline" onClick={() => handleDownloadBrochure(item.title)}>
                                <Download className="w-4 h-4" /> Download Brochure
                              </Button>
                            </div>
                          </div>

                          <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                            {item.coverImage ? (
                              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                                <img src={item.coverImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                  <p className="text-white font-medium">{item.title}</p>
                                </div>
                              </div>
                            ) : (
                              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 h-full flex flex-col justify-center">
                                {item.caseStudy ? (
                                  <>
                                    <span className="text-sm text-accent font-semibold uppercase tracking-wider">Case Study</span>
                                    <h4 className="text-xl font-bold text-foreground mt-2 mb-4">{item.caseStudy.client}</h4>
                                    <p className="text-muted-foreground mb-6">{item.caseStudy.description}</p>
                                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-xl">
                                      <TrendingUp className="w-6 h-6 text-success" />
                                      <span className="text-lg font-bold text-success">{item.caseStudy.result}</span>
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex flex-col items-center justify-center text-center py-8 px-4">
                                    <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 ring-1 ring-border shadow-sm">
                                      <TrendingUp className="w-8 h-8 text-muted-foreground/50" />
                                    </div>
                                    <h4 className="text-muted-foreground font-medium mb-1">Case Study Coming Soon</h4>
                                    <p className="text-xs text-muted-foreground/60 max-w-[200px]">
                                      We are currently compiling the impact metrics and success story for this solution.
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section >

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How We Deliver Results</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A streamlined approach to innovation and excellence</p>
          </motion.div>

          {/* Chevron Process Flow - Unified Design */}
          <div className="max-w-6xl mx-auto overflow-x-auto pb-4">
            <div className="flex items-stretch justify-center min-w-max px-4 md:px-0">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We analyze your needs and define clear objectives",
                  color: "from-blue-500/10 to-blue-500/5 border-blue-500/30"
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "We design a tailored solution architecture",
                  color: "from-purple-500/10 to-purple-500/5 border-purple-500/30"
                },
                {
                  step: "03",
                  title: "Build",
                  description: "Agile development with continuous feedback",
                  color: "from-green-500/10 to-green-500/5 border-green-500/30"
                },
                {
                  step: "04",
                  title: "Scale",
                  description: "Deploy, monitor, and optimize for growth",
                  color: "from-orange-500/10 to-orange-500/5 border-orange-500/30"
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
                  className="relative group"
                  style={{
                    width: '280px',
                    marginLeft: index === 0 ? '0' : '-24px',
                  }}
                >
                  {/* Chevron Shape */}
                  <div
                    className={`relative bg-gradient-to-br ${item.color} border-2 p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}
                    style={{
                      clipPath: index === 0
                        ? 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' // First one (no left indent)
                        : index === 3
                          ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 15% 50%)' // Last one (no right arrow)
                          : 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)', // Middle chevrons
                      minHeight: '200px',
                    }}
                  >
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center" style={{ paddingLeft: index === 0 ? '1rem' : '2rem' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl font-black text-accent/40">{item.step}</span>
                        <div className="h-10 w-1 bg-accent/30 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed pr-4">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <BrochureDownloadModal
        open={brochureModalOpen}
        onOpenChange={setBrochureModalOpen}
        solutionTitle={selectedSolution}
        downloadFileName="InnovationBrochure"
      />

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} preSelectedSolution={selectedSolution} source="solutions" />
    </Layout >
  );
};

export default SolutionTemplate;
