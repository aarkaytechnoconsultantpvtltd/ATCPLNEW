import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ujwal Raj",
    role: "Director, Sri Vishnu Explosives Pvt. Ltd.",
    content:
      "Sri Vishnu Explosives Pvt. Ltd. would like to thank the entire team of Aarkay Techno for the continuous technical support from your end since the inception of the barcoding system at our plant. We are extremely satisfied with your service and hope to receive the same kind of support in the future as well. Wishing the best for the entire team of Aarkay Techno.",
    rating: 5,
    metric: "40% efficiency gain",
  },
  {
    name: "Ganesh Pohekar",
    role: "IT Head, Gimatex",
    content:
      "We at Gimatex truly appreciate the dedication and professionalism shown by the Aarkay Techno team throughout the implementation of our system. From requirement understanding to post-deployment support, the experience has been smooth and reliable. Their prompt response and technical expertise have helped us streamline operations effectively, and we look forward to a long-term association.",
    rating: 5,
    metric: "92% prediction accuracy",
  },
  {
    name: "Atul Silhare",
    role: "Senior Account Manager, Honeywell",
    content:
      "Aarkay Techno has been a dependable technology partner for us. Their team demonstrated strong domain knowledge and a clear understanding of our business needs, delivering solutions within committed timelines. The support provided has added real value to our processes, and we highly appreciate their collaborative approach and continued assistance.",
    rating: 5,
    metric: "60% cost reduction",
  },
];


const customerLogos = [
  {
    name: "AMD",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/AMD.png",
  },
  {
    name: "CDET",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Cdet.png",
  },
  {
    name: "Coal India",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/CoalIndia.png",
  },
  {
    name: "Dinshaws",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Dinshaws.png",
  },
  {
    name: "Gammon",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Gammon.png",
  },
  {
    name: "Gimatex",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Gimatex.png",
  },
  {
    name: "Haldiram",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Haldiram.png",
  },
  {
    name: "Hindalco",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Hindalco.png",
  },
  {
    name: "Indorama",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Indorama.png",
  },
  {
    name: "JSW",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/JSW.png",
  },
  {
    name: "Keltech Energies",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/KeltechEnergies.png",
  },
  {
    name: "MECL",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/MECL.png",
  },
  {
    name: "Mahindra",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Mahindra.jpg",
  },
  {
    name: "Meghe",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Meghe.png",
  },
  {
    name: "Neco",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Neco.png",
  },
  {
    name: "Neeri",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Neeri.png",
  },
  {
    name: "Ordinance",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Ordinance.png",
  },
  {
    name: "Peevee Textiles",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/PeeveeTextiles.jpg",
  },
  {
    name: "RKNEC",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/RKNEC.png",
  },
  {
    name: "Solar",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Solar.png",
  },
  {
    name: "Suruchi",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Suruchi.png",
  },
  {
    name: "Transrail",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Transrail.png",
  },
  {
    name: "VNIT",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/VNIT.png",
  },
  {
    name: "BSK",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/bsk.gif",
  },
  {
    name: "Eross",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/eross.png",
  },
  {
    name: "Raymond",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/raymond.png",
  },
  {
    name: "Smart",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/smart.png",
  },
  {
    name: "ideal",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Ideal.jpeg",
  },
  {
    name: "Salvo",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Salvo.jpeg",
  },
  {
    name: "SriVishnu",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/SriVishnu.jpeg",
  },
  {
    name: "Navbharat_Fuse",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Navbharat_Fuse.jpeg",
  },
  {
    name: "Deccan_Explotech",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Customers/Deccan_Explotech.jpeg",
  },
];

const partnerLogos = [
  {
    name: "Acronis",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Acronis.png",
  },
  {
    name: "Essae",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Essae.png",
  },
  {
    name: "Fortinet",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Fortinet.png",
  },
  {
    name: "Gofrugal",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Gofrugal.png",
  },
  {
    name: "GS1",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Gs1.png",
  },
  {
    name: "Honeywell",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Honeywell.png",
  },
  {
    name: "Kaspersky",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Kasperskey.png",
  },
  {
    name: "Nearity",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Nearity.png",
  },
  {
    name: "Panache",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Panache.png",
  },
  {
    name: "Pepperl+Fuchs",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Pepperlfuch.png",
  },
  {
    name: "Posiflex",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Posiflex.png",
  },
  {
    name: "Ruijie",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Ruijie.png",
  },
  {
    name: "Samsung",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Samsung.png",
  },
  {
    name: "Sato",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Sato.png",
  },
  {
    name: "Shree Lipi",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Shree-lipi.png",
  },
  {
    name: "Tally",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Tally.png",
  },
  {
    name: "Zebra",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Zebra.png",
  },
  {
    name: "Zyxel",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/Zyxel.png",
  },
  {
    name: "Bitdefender",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/bitdefender.png",
  },
  {
    name: "Nureva",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/nureva.png",
  },
  {
    name: "TOR AI",
    path: "https://atcpl-files.s3.ap-south-1.amazonaws.com/Partners/tor_ai.jpeg",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses achieve remarkable results through
            innovative technology solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-md border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Metric Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-6">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center overflow-hidden"
        >
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Our Customers
          </p>

          {/* Customers Carousel */}
          <div className="relative mb-12">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-0 items-center"
                animate={{
                  x: [0, -128 * customerLogos.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60, // ✅ MATCHED SPEED
                    ease: "linear",
                  },
                }}
              >
                {[...customerLogos, ...customerLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={logo.path}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Our Partners
          </p>

          {/* Partners Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-0 items-center"
                animate={{
                  x: [-128 * partnerLogos.length, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60, // ✅ SAME SPEED
                    ease: "linear",
                  },
                }}
              >
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={logo.path}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
