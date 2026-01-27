import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  industries: [
    { name: "Agriculture", href: "/solutions/agriculture" },
    { name: "Aluminium", href: "/solutions/aluminium" },
    { name: "Automobiles", href: "/solutions/automobiles" },
    { name: "Defence", href: "/solutions/defence" },
    { name: "Explosives", href: "/solutions/explosives" },
    { name: "FMCG", href: "/solutions/fmcg" },
    { name: "Gas", href: "/solutions/gas" },
    { name: "Mining", href: "/solutions/mining" },
    { name: "Pharma & Healthcare", href: "/solutions/pharma-healthcare" },
    { name: "Retail & Distribution", href: "/solutions/retails-distribution" },
    { name: "Textiles", href: "/solutions/textiles" },
    { name: "Towers & Steel", href: "/solutions/towers-steel" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    // { name: "Careers", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Integrations", href: "/integrations" },
    { name: "Innovations", href: "/innovations" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://in.linkedin.com/company/aarkay-techno-consultants-pvt-ltd---india?original_referer=https%3A%2F%2Fmail.google.com%2F", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/aarkaytechno?lang=el", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/atcgroup.co.in/?igsh=MWh5bjFqNzFuZDIxNQ%3D%3D&utm_source=qr#", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/atcgroup2018", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-2">
              <img
                src="https://atcpl-files.s3.ap-south-1.amazonaws.com/logo/footer_logo.png"
                alt="Aarkay Techno Consultants"
                className="h-36 w-auto px-0 "
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Transforming businesses through innovative technology solutions.
              We deliver excellence in digital transformation and enterprise software.
            </p>

            <div className="space-y-3">
              <a href="mailto: info@atcgroup.co.in" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                info@atcgroup.co.in
              </a>
              <div>
                <a href="tel: +91-9764440738" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  +91-9764440738
                </a>
                <a href="tel: +91-9822200607" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  +91-9822200607
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                India
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Aarkay Techno Consultants Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>

            ))}

          </div>
        </div>
      </div>
    </footer>
  );
}
