import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Shield, Lightbulb } from "lucide-react";
import { useState } from "react";

// Helper function to get initials from name
const getInitials = (name: string): string => {
  if (!name || name === "abc") return "?";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Reusable MemberImage component with fallback to initials
const MemberImage = ({
  src,
  alt,
  name,
  size = "large",
}: {
  src: string;
  alt: string;
  name: string;
  size?: "large" | "medium" | "small";
}) => {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(name);

  const sizeClasses = {
    large: "w-40 h-40",
    medium: "w-32 h-32",
    small: "w-24 h-24",
  };

  const textSizeClasses = {
    large: "text-4xl",
    medium: "text-3xl",
    small: "text-2xl",
  };

  const containerClass = `${sizeClasses[size]} mx-auto ${size === "small" ? "mb-4" : "mb-6"
    } rounded-full overflow-hidden border-4 border-accent/20 shadow ${size === "large" ? "shadow-lg" : ""
    }`;

  if (imageError || !src || src.includes("abc.jpeg")) {
    return (
      <div className={containerClass}>
        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
          <span className={`${textSizeClasses[size]} font-bold text-accent`}>
            {initials}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients, treating their challenges as our own.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honesty guide every interaction and decision we make.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, never settling for mediocrity.",
  },
];

const founders = [
  {
    name: "Rakesh Andhare",
    role: "Managing Director & Founder",
    bio: "40+ years building IT Infra & Solutions",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/rakesh_andhare.jpeg",
  },
  {
    name: "Manjusha Andhare",
    role: "Director & Founder",
    bio: "30+ years in Leadership & Management",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/manjusha_andhare.jpeg",
  },
  {
    name: "Vrujen Andhare",
    role: "Director",
    bio: "8+ years in HR & Digital Marketing",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/vrujen-andhare.jpeg",
  },
];
const techteam = [
  {
    name: "Kush Bhargava",
    role: "Technical Manager",
    bio: "4+ years in Technical Management",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/kush_bhargava.jpeg",
  },
  {
    name: "Dhiraj Masram",
    role: "SDE-3",
    bio: "4+ years in Software Development",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/dhiraj_masram.jpeg",
  },
  {
    name: "Deepak Verma",
    role: "SDE-3",
    bio: "4+ years in Software Development",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/deepak_verma.jpeg",
  },
  {
    name: "Mahesh Tol",
    role: "SDE-3",
    bio: "4+ years in Software Development",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/mahesh_tol.jpeg",
  },
  {
    name: "Niraj Tete",
    role: "SDE-2",
    bio: "2+ years in Software Development",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/niraj_tete.jpeg",
  },
  {
    name: "Mayur Jambhulkar",
    role: "SDE-1",
    bio: "1+ years in Software Development",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/mayur_jambhulkar.jpeg",
  },
  {
    name: "Kiran Wairagade",
    role: "SDE-1",
    bio: "1+ years in Software Development",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/kiran_wairagade.jpeg",
  },
];
const accountteam = [
  {
    name: "Pankaj Vairagade",
    role: "Account Head",
    bio: "10+ years in IT Account Management",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/pankaj_vairagade.jpeg",
  },
  {
    name: "Pammi Gour",
    role: "Accountant",
    bio: "3+ years in IT Account Management",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/pammi_gour.jpeg",
  },
  {
    name: "Nitin Pande",
    role: "Dispatch Officer",
    bio: "6+ years in Dispatch Management",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/nitin_pandey.jpeg",
  },
];
const supportteam = [
  {
    name: "Priyanka Paul",
    role: "Support Head",
    bio: "6+ years in IT Support",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/priyanka_paul.jpeg",
  },
  {
    name: "Mukesh Sawarkar",
    role: "Support Engineer",
    bio: "6+ years in Support & Maintenance",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/mukesh_sawarkar.jpeg",
  },
];
const hardwareteam = [
  {
    name: "Prafull Rane",
    role: "Hardware Department Head",
    bio: "15+ years in IT Hardware",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/prafull_rane.jpeg",
  },
  {
    name: "Pankaj Shripad",
    role: "Hardware Engineer",
    bio: "3+ years in IT Hardware",
    image: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Team/pankaj_shripad.jpeg",
  },
];
const milestones = [
  {
    year: "1992",
    title: "Founded",
    slug: "1992-foundation-of-service",
    description:
      "Started with third-party maintenance, AMC services, and chip-level repairs for government offices, VRCE, and Baidyanath Ayurved Bhavan.",
  },
  {
    year: "1998",
    title: "Language & Infotainment Innovation",
    slug: "1998-software-indian-languages",
    description:
      "Began software development and pioneered Devanagari language solutions for government and DTP; built Nagpur's cable TV infotainment channel.",
  },
  {
    year: "1999",
    title: "IT Security & Networking",
    slug: "1999-security-network-infrastructure",
    description:
      "Introduced antivirus services, structured cabling, and network design using switches for banks, hospitals, and insurance companies.",
  },
  {
    year: "2002",
    title: "Barcode Technology",
    slug: "2002-process-visibility-barcodes",
    description:
      "Implemented barcode-based work-in-process and material-tracking systems.",
  },
  {
    year: "2005",
    title: "Software Expansion",
    slug: "2005-expanding-software-capabilities",
    description: "Transitioned into full-fledged software development.",
  },
  {
    year: "2008",
    title: "Textile Process Automation",
    slug: "2008-automation-textile-manufacturing",
    description:
      "Developed barcode-enabled WIP systems for Uniwork Textiles across 16–18 processing stages.",
  },
  {
    year: "2010",
    title: "Biotech Tracking Systems",
    slug: "2010-supporting-biotechnology-research",
    description:
      "Created bacteria tracking and tracing systems combining software and hardware for drug discovery at the Department of Biotechnology.",
  },
  {
    year: "2012",
    title: "Packaging Automation",
    slug: "2012-packaging-line-traceability",
    description:
      "Implemented barcode solutions for Haldiram's packaging lines.",
  },
  {
    year: "2015",
    title: "Automotive Integration",
    slug: "2015-managing-complexity-manufacturing",
    description:
      "Developed tractor integration software for Mahindra & Mahindra covering 180 variants and 20 engine configurations.",
  },
  {
    year: "2018",
    title: "Inspection Automation",
    slug: "2018-data-driven-fabric-inspection",
    description:
      "Created an Indian alternative to foreign fabric inspection data loggers, increasing efficiency by 30–40% across textile units.",
  },
  {
    year: "2019",
    title: "Industrial Automation",
    slug: "2019-intelligent-industrial-integration",
    description:
      "Built overhead crane positioning systems using Bluetooth/Wi-Fi and integrated IP cameras with weighbridges.",
  },
  {
    year: "2020",
    title: "Explosives Tracking",
    slug: "2020-traceability-sensitive-industries",
    description:
      "Designed barcode-based tracking systems for explosive cartridges.",
  },
  {
    year: "2022",
    title: "ERP Integration",
    slug: "2022-end-to-end-erp-integration",
    description:
      "Developed technology to barcode small-diameter cartridges with full ERP integration from production to dispatch.",
  },
  {
    year: "2024",
    title: "Smart Inventory Systems",
    slug: "2024-enterprise-scale-inventory-systems",
    description:
      "Delivered smart inventory and asset-verification technology for the Hindalco Group.",
  },
  {
    year: "2025",
    title: "AI & Video Analytics",
    slug: "2025-intelligence-ai-analytics",
    description:
      "Implemented ANPR with weighbridges, fire detection, bag counting, and people-movement analytics using AI, RFID, and barcode integrations.",
  },
  {
    year: "2026",
    title: "Future Innovation",
    slug: "2026-road-ahead",
    description:
      "Continuing our journey. What would you like us to innovate next?",
  },
];

const About = () => {
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
              About Aarkay Techno
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
              Pioneering Excellence Since 1992
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70">
              We're a team of passionate innovators dedicated to transforming
              businesses through technology. Our mission is to make
              enterprise-grade solutions accessible to companies of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 shadow-md border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to deliver <strong>reliable, high-quality IT services </strong>
                powered by <strong>integrity</strong>, <strong>expertise</strong>, and <strong>innovation</strong>.
                We introduce advanced technologies like <strong>AI</strong>, <strong>automation</strong>,
                <strong> IoT</strong>, and <strong>multilingual systems</strong> to enhance
                <strong> accuracy</strong>, <strong>productivity</strong>, and <strong>efficiency</strong>.
                We focus on creating <strong>user-friendly solutions</strong> that are easy to
                operate and maintain, while providing complete <strong>digital infrastructure support </strong>
                across <strong>security</strong>, <strong>networking</strong>, and <strong>process optimisation</strong>.
                We continuously innovate to ensure our clients stay <strong>future-ready</strong> in a rapidly
                evolving digital world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 shadow-md border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-cta/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-cta" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To build a <strong>technologically empowered India</strong> where businesses of
                every size across every sector can seamlessly adopt <strong>advanced digital solutions </strong>
                that improve <strong>efficiency</strong>, enhance <strong>security</strong>, and
                accelerate <strong>growth</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Founder’s Note */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card p-10 rounded-2xl shadow-md border border-border/50"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Founder’s Note
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              "In <strong>1992</strong>, when we began our journey in <strong>Nagpur</strong>, the IT landscape in India was still in its infancy, and one gap was unmistakably clear—there were hardly any service providers delivering <strong>reliable, high-quality IT support</strong> with genuine commitment. Having worked with pioneering organisations like <strong>HCL</strong> and <strong>Wipro</strong> in Bangalore, I had seen firsthand what good service truly meant. I knew that for businesses in our region to grow, they needed partners who understood technology deeply and cared about solving problems with <strong>integrity</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              That realization became the seed for <strong>AARKAY Techno Consultants Pvt. Ltd.</strong> We started as a third-party maintenance service provider—not a manufacturer, not a dealer, but an independent team dedicated purely to <strong>service excellence</strong>. This neutrality, honesty, and technical expertise helped us earn the trust of major organisations in a short span of time.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              As the industry evolved, so did we. We introduced <strong>multilingual technology</strong> to help organisations create and manage information in Indian languages. We brought <strong>subscription-based antivirus solutions</strong> at a time when digital threats were still poorly understood. We designed robust <strong>network and structured cabling architectures</strong> for banks and industries, expanded into <strong>video surveillance and physical security</strong>, and continued innovating with one core question in mind:
              <em> How can technology make work simpler, faster, and more efficient?</em>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, as the world steps into a new era of <strong>AI, automation, machine learning, and intelligent systems</strong>, <strong>AARKAY</strong> stands ready to bring these advancements to everyday businesses with the same commitment that started it all. At our core, we believe technology is meant to empower everyone—not just experts. Our mission has always been to make <strong>advanced technology simple, accessible, and usable for all</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>AARKAY</strong> began with <strong>service</strong>. And even today, our purpose remains the same: to bring <strong>meaningful technology</strong> to people's doorsteps and help organisations thrive with confidence."
            </p>

            <p className="text-foreground font-semibold text-right mt-8">
              — <strong>Rakesh Andhare</strong> <br />
              Founder, AARKAY Techno Consultants Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-card flex items-center justify-center shadow-md">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Milestones
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <Link
                key={milestone.slug}
                to={`/blog/${milestone.slug}`}
                className="block w-full"
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 mb-12 last:mb-0 cursor-pointer hover:bg-accent/5 p-4 rounded-xl transition"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-accent">
                      {milestone.year}
                    </span>
                  </div>

                  <div className="flex-shrink-0 w-px bg-border relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Founders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-md border border-border/50"
              >
                {/* Member Image */}
                <MemberImage
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size="medium"
                />

                {/* Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Tech Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </motion.div>

          {/* Main Layout: Left (Large Card) + Right (2 Rows) */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            {/* Left Side - First Member (Large Card) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50 flex flex-col justify-center"
            >
              {/* Member Image - Larger */}
              <MemberImage
                src={techteam[0].image}
                alt={techteam[0].name}
                name={techteam[0].name}
                size="large"
              />

              {/* Member Info - Larger Text */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {techteam[0].name}
              </h3>
              <p className="text-accent font-medium text-lg mb-3">{techteam[0].role}</p>
              <p className="text-sm text-muted-foreground">{techteam[0].bio}</p>
            </motion.div>

            {/* Right Side - 2 Rows */}
            <div className="space-y-6">
              {/* Top Row - 3 Cards (Members 2-4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techteam.slice(1, 4).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50"
                  >
                    {/* Member Image - Smaller */}
                    <MemberImage
                      src={member.image}
                      alt={member.name}
                      name={member.name}
                      size="small"
                    />

                    {/* Member Info - Smaller Text */}
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row - 4 Cards (Members 5-8) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techteam.slice(4, 8).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 text-center shadow-md border border-border/50"
                  >
                    {/* Member Image - Smaller */}
                    <MemberImage
                      src={member.image}
                      alt={member.name}
                      name={member.name}
                      size="small"
                    />

                    {/* Member Info - Smaller Text */}
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Hardware Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hardwareteam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-md border border-border/50"
              >
                {/* Member Image */}
                <MemberImage
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size="medium"
                />

                {/* Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Support Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {supportteam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-md border border-border/50"
              >
                {/* Member Image */}
                <MemberImage
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size="medium"
                />

                {/* Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Account Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountteam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-md border border-border/50"
              >
                {/* Member Image */}
                <MemberImage
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size="medium"
                />

                {/* Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            <img
              src="/images/gallery/team1.jpg"
              alt="Team 1"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/gallery/team2.jpg"
              alt="Team 2"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/gallery/team3.jpg"
              alt="Team 3"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="container mx-auto px-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Journey
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4">
              <img
                src="/images/gallery/team1.jpg"
                alt="Team 1"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/images/gallery/team2.jpg"
                alt="Team 2"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/images/gallery/team3.jpg"
                alt="Team 3"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div></div>
        </div>
      </section> */}
      <CTASection />
    </Layout>
  );
};

export default About;
