import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface Innovation {
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  status: string;
  images?: string[];
  features?: string[];
  useCases?: string[];
}

interface InnovationDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  innovation: Innovation | null;
}

export function InnovationDetailModal({
  open,
  onOpenChange,
  innovation,
}: InnovationDetailModalProps) {
  if (!innovation) return null;

  const Icon = innovation.icon;

  // Placeholder images for demonstration
  const images = innovation.images || [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
  ];

  const features = innovation.features || [
    "Enterprise-grade scalability",
    "Real-time processing capabilities",
    "Advanced security protocols",
    "24/7 monitoring and support",
  ];

  const useCases = innovation.useCases || [
    "Financial Services",
    "Healthcare",
    "E-commerce",
    "Manufacturing",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className="text-xs">
                  {innovation.category}
                </Badge>
                <Badge
                  variant={innovation.status === "Production" ? "default" : "outline"}
                  className={
                    innovation.status === "Production"
                      ? "bg-success/10 text-success border-success/20"
                      : "bg-cta/10 text-cta border-cta/20"
                  }
                >
                  {innovation.status}
                </Badge>
              </div>
              <DialogTitle className="text-2xl">{innovation.title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-video rounded-lg overflow-hidden bg-secondary"
              >
                <img
                  src={img}
                  alt={`${innovation.title} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Overview</h4>
            <p className="text-muted-foreground">{innovation.description}</p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {innovation.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-foreground"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Industry Applications</h4>
            <div className="flex flex-wrap gap-2">
              {useCases.map((useCase) => (
                <Badge key={useCase} variant="outline" className="px-3 py-1">
                  {useCase}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button variant="cta" className="flex-1" asChild>
              <Link to="/contact">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
