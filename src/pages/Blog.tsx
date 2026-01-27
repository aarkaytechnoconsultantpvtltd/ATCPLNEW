import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BlogDetailModal } from "@/components/modals/BlogDetailModal";

// ---------- FEATURED POST ----------
const featuredPost = {
  title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
  excerpt:
    "Discover how artificial intelligence is reshaping enterprise operations, from automated workflows to predictive analytics, and what businesses need to prepare for in the coming year.",
  author: "Dr. Elena Rodriguez",
  date: "Dec 1, 2024",
  readTime: "8 min read",
  category: "AI & Machine Learning",
  slug: "/blog/ai-enterprise-2024",
};

// ---------- NORMAL POSTS ----------
const posts = [
  // {
  //   title: "Cloud Migration Best Practices: A Comprehensive Guide",
  //   excerpt:
  //     "Learn the proven strategies and common pitfalls to avoid when migrating your infrastructure to the cloud.",
  //   author: "Marcus Johnson",
  //   date: "Nov 28, 2024",
  //   readTime: "6 min read",
  //   category: "Cloud",
  //   slug: "/blog/cloud-migration-guide",
  // },
  // {
  //   title: "Building Scalable Microservices Architecture",
  //   excerpt:
  //     "A deep dive into designing and implementing microservices that can scale with your business needs.",
  //   author: "Sarah Kim",
  //   date: "Nov 25, 2024",
  //   readTime: "10 min read",
  //   category: "Development",
  //   slug: "/blog/microservices-architecture",
  // },
  // {
  //   title: "Cybersecurity in 2024: Emerging Threats and Solutions",
  //   excerpt:
  //     "Stay ahead of cyber threats with our analysis of the latest security challenges and how to protect your business.",
  //   author: "David Anderson",
  //   date: "Nov 22, 2024",
  //   readTime: "7 min read",
  //   category: "Security",
  //   slug: "/blog/cybersecurity-2024",
  // },
  // {
  //   title: "Data Analytics: Turning Information into Insights",
  //   excerpt:
  //     "How modern analytics tools are helping businesses make data-driven decisions faster than ever.",
  //   author: "Dr. Elena Rodriguez",
  //   date: "Nov 18, 2024",
  //   readTime: "5 min read",
  //   category: "Analytics",
  //   slug: "/blog/data-analytics-insights",
  // },
  // {
  //   title: "Digital Transformation Success Stories",
  //   excerpt:
  //     "Real-world examples of companies that successfully transformed their operations with technology.",
  //   author: "Marcus Johnson",
  //   date: "Nov 15, 2024",
  //   readTime: "9 min read",
  //   category: "Case Studies",
  //   slug: "/blog/digital-transformation-stories",
  // },
  // {
  //   title: "The Rise of Low-Code Development Platforms",
  //   excerpt:
  //     "Exploring how low-code solutions are democratizing software development across organizations.",
  //   author: "Sarah Kim",
  //   date: "Nov 12, 2024",
  //   readTime: "6 min read",
  //   category: "Development",
  //   slug: "/blog/low-code-platforms",
  // },
];

// ---------- MILESTONE BLOG POSTS ----------
export const milestoneBlogs = [
  {
    title: "1992 — The Foundation of Service",
    slug: "1992-foundation-of-service",
    date: "May 1992",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/1992.png",
    content: `
AARKAY Techno Consultants was founded in May 1992 at a time when dependable IT service was difficult to find. Our journey began with third-party maintenance and annual maintenance contracts, supporting organisations that depended heavily on hardware reliability.

Our first AMC client, Baidyanath Ayurved Bhavan, set the tone for long-term relationships built on trust and accountability. We worked closely with government offices, VRCE, and other institutions, offering chip-level repairs and deep hardware expertise. Our work spanned line printers, laser printers, monitors, dot matrix printers, and inkjet printers—systems that formed the backbone of daily operations.

This phase shaped our core belief: technology must work consistently in the real world. Service excellence, technical depth, and responsibility became the pillars on which AARKAY was built.
    `,
  },
  {
    title: "1998 — Software and Indian Languages",
    slug: "1998-software-indian-languages",
    date: "1998",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/1998.png",
    content: `
By 1998, we began expanding beyond hardware into software development, guided by a simple question—how can technology be made more usable for people? One of our earliest initiatives was the development of an infotainment channel for cable television in Nagpur, exploring new ways information could reach communities.

At the same time, we became pioneers in introducing Devanagari language software within government offices and desktop publishing environments. Our work focused on transcription and enabling Indian languages to be used effectively in documentation and communication.

This milestone represented a shift toward inclusivity in technology—ensuring that systems aligned with how people read, write, and work in their everyday environments.
    `,
  },
  {
    title: "1999 — Security and Network Infrastructure",
    slug: "1999-security-network-infrastructure",
    date: "1999",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/1999.png",
    content: `
As organisations increasingly adopted IT systems, new challenges emerged around security and connectivity. In 1999, AARKAY introduced antivirus solutions as a structured, subscription-based service, addressing the growing threat of viruses and system vulnerabilities.

We also began designing robust network infrastructures, introducing structured cabling and the use of switches at a time when hubs were still widely used. These networks were implemented across banks, super-speciality hospitals, and insurance companies, where reliability and uptime were critical.

This phase strengthened our role as system designers—moving beyond support to building secure, scalable foundations for growing organisations.
    `,
  },
  {
    title: "2002 — Process Visibility Through Barcodes",
    slug: "2002-process-visibility-barcodes",
    date: "2002",
    readTime: "3 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2002.png",
    content: `
In 2002, we introduced barcode technology to help organisations gain visibility into their internal processes. By applying barcodes to materials and work-in-process stages, businesses could track movement, status, and progress with greater accuracy.

This approach reduced manual errors and created a clearer understanding of workflows. It marked our growing focus on operational efficiency and data-driven process control—using technology not just to support work, but to improve how work gets done.
    `,
  },
  {
    title: "2005 — Expanding Software Capabilities",
    slug: "2005-expanding-software-capabilities",
    date: "2005",
    readTime: "3 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2005.png",
    content: `
By 2005, software development became a central focus at AARKAY. We began building full-fledged software solutions tailored to specific organisational needs, rather than relying on off-the-shelf systems.

This expansion allowed us to integrate hardware, processes, and software into cohesive solutions. It also enabled closer collaboration with clients, as systems were designed around their real-world workflows and constraints.

This milestone laid the groundwork for more complex, industry-specific solutions in the years to come.
    `,
  },
  {
    title: "2008 — Automation in Textile Manufacturing",
    slug: "2008-automation-textile-manufacturing",
    date: "2008",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2008.png",
    content: `
In 2008, we partnered with Uniwork Textiles to design barcode-based work-in-process systems for export fabric manufacturing. The solution tracked grey fabric through multiple stages of dyeing, processing, and finishing—covering 16 to 18 individual processes.

By introducing structured tracking, the system improved transparency, accountability, and process control across the production floor. This milestone marked a significant step in applying digital systems to traditional manufacturing environments.
    `,
  },
  {
    title: "2010 — Supporting Biotechnology Research",
    slug: "2010-supporting-biotechnology-research",
    date: "2010",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2010.png",
    content: `
In 2010, AARKAY entered the biotechnology sector by developing bacteria tracking and tracing systems for the Department of Biotechnology. The solution combined both software and hardware components to ensure accurate identification and tracking.

Used in drug discovery workflows, the system supported precision and reliability in a highly sensitive domain. This milestone demonstrated our ability to adapt core technologies to specialised research environments.
    `,
  },
  {
    title: "2012 — Packaging Line Traceability",
    slug: "2012-packaging-line-traceability",
    date: "2012",
    readTime: "3 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2012.png",
    content: `
In 2012, we implemented barcode systems for Haldiram's packaging line, addressing the need for traceability and operational control in a high-volume production environment.

The solution improved accuracy and visibility across packaging operations, reinforcing our experience in applying automation to fast-moving consumer goods manufacturing.
    `,
  },
  {
    title: "2015 — Managing Complexity in Manufacturing",
    slug: "2015-managing-complexity-manufacturing",
    date: "2015",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2015.png",
    content: `
In 2015, we developed tractor integration software for Mahindra & Mahindra. The system handled 180 tractor variants, 20 engine types, and multiple hydraulic configurations.

By ensuring that the correct components were assembled for each configuration, the software reduced errors and improved production accuracy. This milestone reflected our growing expertise in managing complex configuration logic within large manufacturing ecosystems.
    `,
  },
  {
    title: "2018 — Data-Driven Fabric Inspection",
    slug: "2018-data-driven-fabric-inspection",
    date: "2018",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2018.png",
    content: `
In 2018, we developed a fabric inspection data logger as an Indian alternative to an imported solution. The system automated inspection logging, defect identification, and report consolidation for management teams.

By replacing manual processes, the solution increased inspection efficiency by 30–40% and was deployed across 40–45 textile units. This milestone reinforced our focus on practical innovation and measurable impact.
    `,
  },
  {
    title: "2019 — Intelligent Industrial Integration",
    slug: "2019-intelligent-industrial-integration",
    date: "2019",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2019.png",
    content: `
In 2019, we designed an overhead crane positioning system for cloth handling, using Bluetooth and Wi-Fi technologies to improve accuracy and control.

We also integrated IP cameras with weighbridge systems—bringing together visual monitoring and weight data into a unified solution. These developments reflected our emphasis on intelligent integration across industrial operations.
    `,
  },
  {
    title: "2020 — Traceability in Sensitive Industries",
    slug: "2020-traceability-sensitive-industries",
    date: "2020",
    readTime: "3 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2020.png",
    content: `
In 2020, AARKAY introduced barcode-based tracking systems for explosive cartridges. The solution focused on accurate identification and traceability across a highly regulated and sensitive supply chain.

This milestone demonstrated our ability to apply structured technology frameworks even in environments with strict safety and compliance requirements.
    `,
  },
  {
    title: "2022 — End-to-End ERP Integration",
    slug: "2022-end-to-end-erp-integration",
    date: "2022",
    readTime: "3 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2022.png",
    content: `
In 2022, we addressed a complex physical challenge by designing technology that enabled barcoding on small-diameter cartridges.

This was combined with full ERP integration, tracking products from manufacturing through dispatch. The solution connected physical constraints with digital systems, strengthening end-to-end visibility.
    `,
  },
  {
    title: "2024 — Enterprise-Scale Inventory Systems",
    slug: "2024-enterprise-scale-inventory-systems",
    date: "2024",
    readTime: "3 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2024.png",
    content: `
In 2024, we developed a smart inventory management and asset verification system for the Hindalco Group.

The system focused on accurate tracking, verification, and visibility across large asset bases, supporting better control and decision-making at scale.
    `,
  },
  {
    title: "2025 — Intelligence Through AI and Analytics",
    slug: "2025-intelligence-ai-analytics",
    date: "2025",
    readTime: "4 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2025.png",
    content: `
In 2025, we expanded into AI-driven systems, implementing automatic number plate recognition integrated with weighbridges.

We also introduced video analytics for fire detection, bag counting, and people movement analysis. By combining AI with barcode, RFID, and system integration technologies, we continued our evolution toward intelligent automation.
    `,
  },
  {
    title: "2026 — The Road Ahead",
    slug: "2026-road-ahead",
    date: "2026",
    readTime: "2 min read",
    author: "AARKAY Techno Team",
    category: "Milestones",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Blogs/2026.png",
    content: `
Our journey continues with the same question that has guided us since the beginning:
How can technology solve real problems more effectively?

The next milestone is open—ready to be defined by the challenges of tomorrow.
    `,
  },
];

// ---------- CATEGORY FILTERS ----------
const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud",
  "Development",
  "Security",
  "Analytics",
  "Case Studies",
  "Milestones",
];


// ---------- MAIN BLOG PAGE ----------
const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const allPosts = [...posts, ...milestoneBlogs];
  const [selectedPost, setSelectedPost] = useState<typeof allPosts[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Check if there's a slug in the URL and open the modal automatically
  useEffect(() => {
    if (slug) {
      const post = allPosts.find((p) => p.slug === slug);
      if (post) {
        setSelectedPost(post);
        setModalOpen(true);
      }
    }
  }, [slug]);

  const handlePostClick = (post: typeof allPosts[0]) => {
    setSelectedPost(post);
    setModalOpen(true);
    // Update URL without page reload
    navigate(`/blog/${post.slug}`, { replace: false });
  };

  const handleModalClose = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      // Navigate back to /blog when modal closes
      navigate('/blog', { replace: false });
    }
  };

  return (
    <Layout>

      {/* ---------- HERO ---------- */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase mb-4 block">
              Our Blog
            </span>
            <h1 className="text-5xl font-extrabold text-primary-foreground mb-6">
              Insights & Expertise
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Stay updated with the latest trends, best practices, and thought leadership.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ---------- CATEGORIES ---------- */}
      {/* <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section> */}


      {/* ---------- FEATURED POST ---------- */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50"
          >
            <div className="grid lg:grid-cols-2">
              <div className="bg-accent/10 p-12 flex items-center justify-center min-h-[300px]">
                <span className="text-8xl font-bold text-accent/30">AI</span>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>

                <h2 className="text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>

                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {featuredPost.readTime}
                  </span>
                </div>

                <Link to={featuredPost.slug}>
                  <Button variant="cta">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}


      {/* ---------- LATEST POSTS GRID ---------- */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12"
          >
            Latest Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handlePostClick(post)}
                className="bg-card rounded-2xl overflow-hidden shadow-md border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden">
                  {'image' in post && post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {post.category.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">

                  {/* <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    {post.category}
                  </span> */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {'excerpt' in post ? post.excerpt : post.content}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <span className="text-sm text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div> */}

        </div>
      </section>



      {/* Blog Detail Modal */}
      <BlogDetailModal
        open={modalOpen}
        onOpenChange={handleModalClose}
        post={selectedPost}
      />

    </Layout>
  );
};

export default Blog;
