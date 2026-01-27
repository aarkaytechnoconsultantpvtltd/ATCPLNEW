// src/components/modals/BookDemoModal.tsx

import { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { industries } from "@/data/industries";

// All industry items (ensure these files export *_items)
import { fm_items } from "@/pages/Solutions/Fmcg";
import { gas_items } from "@/pages/Solutions/Gas";
import { agriculture_items } from "@/pages/Solutions/Agriculture";
import { pharma_items } from "@/pages/Solutions/PharmaHealthcare";
import { textiles_items } from "@/pages/Solutions/Textiles";
import { retail_items } from "@/pages/Solutions/RetailsDistribution";
import { towerssteel_items } from "@/pages/Solutions/TowersSteel";
import { aluminium_items } from "@/pages/Solutions/Aluminium";
import { mining_items } from "@/pages/Solutions/Mining";
import { defence_items } from "@/pages/Solutions/Defence";
import { automobiles_items } from "@/pages/Solutions/Automobiles";
import { explosives_items } from "@/pages/Solutions/Explosives";

const mapByLabel = (label: string) => {
  const map: Record<string, string[]> = {
    "FMCG": (fm_items ?? []).map(i => i.title),
    "Gas": (gas_items ?? []).map(i => i.title),
    "Agriculture": (agriculture_items ?? []).map(i => i.title),
    "Pharma & Healthcare": (pharma_items ?? []).map(i => i.title),
    "Textiles": (textiles_items ?? []).map(i => i.title),
    "Retails & Distribution": (retail_items ?? []).map(i => i.title),
    "Towers/Steel": (towerssteel_items ?? []).map(i => i.title),
    "Aluminium": (aluminium_items ?? []).map(i => i.title),
    "Mining": (mining_items ?? []).map(i => i.title),
    "Defence": (defence_items ?? []).map(i => i.title),
    "Automobiles": (automobiles_items ?? []).map(i => i.title),
    "Explosives": (explosives_items ?? []).map(i => i.title),
  };
  return map[label] ?? [];
};

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedSolution?: string;
  source?: "services" | "industries" | "brochure" | "solutions";
}

export function BookDemoModal({
  open,
  onOpenChange,
  preSelectedSolution,
  source,
}: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    solution: preSelectedSolution || "",
    message: "",
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredSolutions = useMemo(() => {
    if (!formData.industry) return [];
    return mapByLabel(formData.industry);
  }, [formData.industry]);

  useEffect(() => {
    setFormData(prev => ({ ...prev, solution: "" }));
  }, [formData.industry]);

  useEffect(() => {
    if (preSelectedSolution) {
      setFormData(prev => ({ ...prev, solution: preSelectedSolution }));
    }
  }, [preSelectedSolution, open]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.industry) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = { ...formData, source: source ?? "industries" };
      const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
      const API_TOKEN = import.meta.env.VITE_APPS_SCRIPT_TOKEN;
      if (API_TOKEN) (payload as any).token = API_TOKEN;

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast({ title: "Demo Request Sent!", description: "Your details were saved successfully!" });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        solution: "",
        message: "",
      });

      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong while saving.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Book a Demo
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we’ll schedule a personalized demo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* NAME + EMAIL */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                placeholder="Firstname Lastname"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Email Address *</Label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          {/* PHONE + COMPANY */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Phone Number *</Label>
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="space-y-2">
            <Label>Select Industry *</Label>
            <Select
              value={formData.industry}
              onValueChange={(value) => handleChange("industry", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose an industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((i) => (
                  <SelectItem key={i.slug} value={i.label}>
                    {i.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* SOLUTION */}
          <div className="space-y-2">
            <Label>Select Solution</Label>
            <Select
              value={formData.solution}
              onValueChange={(value) => handleChange("solution", value)}
              disabled={!formData.industry}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a solution" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="custom-solution" value="Custom Solution">
                  Custom Solution
                </SelectItem>
                {(filteredSolutions.length ? filteredSolutions : ["General Inquiry"]).map(
                  (s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  )
                )}
                
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Additional Message</Label>
            <Textarea
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <Button type="submit" variant="cta" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending Request...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Demo Request
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
