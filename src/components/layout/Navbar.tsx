import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Factory,
  Store,
  Car,
  Shield,
  Leaf,
  Stethoscope,
  Drill,
  Flame,
  Package,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import aarkayLogo from "@/assets/aarkay-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industry", href: "/industries" },
  { name: "Integrations", href: "/integrations" },
  { name: "Innovations", href: "/innovations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const industries = [
  { label: "FMCG", href: "/solutions/fmcg", icon: <Package className="w-4 h-4" />, description: "Fast-moving consumer goods" },
  { label: "Textiles", href: "/solutions/textiles", icon: <Factory className="w-4 h-4" />, description: "Fabric & apparel manufacturing" },
  { label: "Explosives", href: "/solutions/explosives", icon: <Flame className="w-4 h-4" />, description: "Mining & construction explosives" },
  { label: "Retail & Distribution", href: "/solutions/retails-distribution", icon: <Store className="w-4 h-4" />, description: "Retail chains & distribution" },
  { label: "Defence", href: "/solutions/defence", icon: <Shield className="w-4 h-4" />, description: "Defense & military applications" },
  { label: "Agriculture", href: "/solutions/agriculture", icon: <Leaf className="w-4 h-4" />, description: "Farming & agricultural products" },
  { label: "Automobiles", href: "/solutions/automobiles", icon: <Car className="w-4 h-4" />, description: "Automotive manufacturing" },
  { label: "Aluminium", href: "/solutions/aluminium", icon: <Factory className="w-4 h-4" />, description: "Aluminium production" },
  { label: "Pharma & Healthcare", href: "/solutions/pharma-healthcare", icon: <Stethoscope className="w-4 h-4" />, description: "Pharmaceuticals & healthcare" },
  { label: "Mining", href: "/solutions/mining", icon: <Drill className="w-4 h-4" />, description: "Mineral extraction" },
  { label: "Gas", href: "/solutions/gas", icon: <Flame className="w-4 h-4" />, description: "Gas production & distribution" },
  { label: "Towers/Steel", href: "/solutions/towers-steel", icon: <Building2 className="w-4 h-4" />, description: "Steel & infrastructure" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setIsIndustryOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <img
                src={aarkayLogo}
                alt="Aarkay Techno Consultants"
                className="h-12 w-auto transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.name === "Industry") {
                  return (
                    <DropdownMenu key={link.name}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group relative",
                            location.pathname.startsWith("/solutions")
                              ? "text-accent bg-accent/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          )}
                        >
                          <span className="flex items-center gap-1">
                            {link.name}
                            <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                          </span>
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        className="w-[800px] p-6 border-border/50 shadow-2xl rounded-xl bg-gradient-to-b from-card to-card/95"
                        align="center"
                        sideOffset={10}
                      >
                        {/* Header */}
                        <DropdownMenuLabel className="text-lg font-bold px-0 pb-3 border-b border-border/50">
                          <span className="text-accent">Industry</span> Solutions
                        </DropdownMenuLabel>

                        <div className="text-sm text-muted-foreground mb-6 mt-2">
                          Tailored ERP solutions for every sector
                        </div>

                        {/* FIXED: Proper 3x4 grid with row-wise alignment */}
                        <div className="grid grid-cols-3 gap-4">
                          {industries.map((industry) => (
                            <DropdownMenuItem key={industry.href} asChild className="p-0">
                              <Link
                                to={industry.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group/item border border-transparent hover:border-blue-200"
                              >
                                {/* Icon */}
                                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-100 group-hover/item:text-blue-700 transition-colors">
                                  {industry.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                  <div className="font-semibold text-foreground group-hover/item:text-blue-700 transition-colors">
                                    {industry.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    {industry.description}
                                  </div>
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>

                        <DropdownMenuSeparator className="my-6" />

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold">Need Custom Solution?</div>
                            <div className="text-sm text-muted-foreground">
                              We tailor solutions for unique requirements
                            </div>
                          </div>
                          <Button variant="cta" size="sm" asChild>
                            <Link to="/contact">Contact Sales</Link>
                          </Button>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                      location.pathname === link.href
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 transition-transform duration-300",
                        location.pathname === link.href ? "scale-x-100" : "group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
               {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
          
            <Button variant="cta" size="default" asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Smooth Scroll Fixed */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-card shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-24">
                <button
                  onClick={closeMenu}
                  className="absolute top-6 right-6 p-2 rounded-lg hover:bg-secondary"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-1">
                  {navLinks.map((link) => {
                    if (link.name === "Industry") {
                      return (
                        <div key="mobile-industry" className="border-b border-border/20 pb-2">
                          <button
                            onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                            className="w-full flex items-center justify-between py-4 px-2 text-lg font-semibold text-foreground"
                          >
                            Industry Solutions
                            <ChevronDown className={cn("w-5 h-5 transition-transform", isIndustryOpen && "rotate-180")} />
                          </button>

                          <AnimatePresence>
                            {isIndustryOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="py-4 space-y-3">
                                  {industries.map((item) => (
                                    <Link
                                      key={item.href}
                                      to={item.href}
                                      onClick={closeMenu}
                                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/10 transition-all group"
                                    >
                                      <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white">
                                        {item.icon}
                                      </div>
                                      <div>
                                        <div className="font-medium">{item.label}</div>
                                        <div className="text-xs text-muted-foreground">{item.description}</div>
                                      </div>
                                    </Link>
                                  ))}
                                  <Button variant="cta" className="w-full mt-4" asChild>
                                    <Link to="/contact" onClick={closeMenu}>Get Custom Solution</Link>
                                  </Button>
                         
                                </div>
                               
                              </motion.div>
                            )}
                                           </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "block py-4 px-2 text-lg font-medium rounded-lg transition-all",
                          location.pathname === link.href
                            ? "text-accent"
                            : "text-foreground hover:text-accent"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
                  <div className="pt-4 flex flex-col gap-2">
             
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Book a Demo</Link>
                </Button>
              </div>
                     
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}