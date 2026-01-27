import { useState } from "react";
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
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BrochureDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  solutionTitle: string;
  downloadFileName?: string;
}

export function BrochureDownloadModal({
  open,
  onOpenChange,
  solutionTitle,
  downloadFileName,
}: BrochureDownloadModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Trigger PDF download
  const downloadFile = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/brochures/${fileName}.pdf`;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phone) {
      toast({
        title: "Required Fields",
        description: "Please fill in both email and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Determine the file to download: prefer explicit override, else derive from title
    const fileName = downloadFileName || solutionTitle.replace(/\s+/g, "");

    // Prepare the payload for Google Apps Script
    const payload = {
      email,
      phone,
      solution: solutionTitle,
      fileName: `${fileName}.pdf`,
      timestamp: new Date().toISOString(),
      source: "brochure", // <---- tells Apps Script which sheet to store in
    };

    // Read URL and security token from .env
    const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
    const API_TOKEN = import.meta.env.VITE_APPS_SCRIPT_TOKEN;
    if (API_TOKEN) (payload as any).token = API_TOKEN;

    try {
      // Save details in spreadsheet
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Download Started!",
        description: `${solutionTitle} brochure is being downloaded.`,
      });

      // Trigger actual file download
      downloadFile(fileName);

      // Reset form and close modal
      setEmail("");
      setPhone("");
      onOpenChange(false);

    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong while saving.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Download Brochure</DialogTitle>
          <DialogDescription>
            Enter your details to download the {solutionTitle} brochure.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            variant="cta"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download Brochure
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
