import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Integration {
    name: string;
    image: string;
    description: string;
    features: string[];
    category: string;
    readTime: string;
}

interface IntegrationDetailModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    integration: Integration | null;
}

export function IntegrationDetailModal({
    open,
    onOpenChange,
    integration,
}: IntegrationDetailModalProps) {
    if (!integration) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-start gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                    {integration.category}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    {integration.readTime}
                                </Badge>
                            </div>
                            <DialogTitle className="text-2xl md:text-3xl">
                                {integration.name}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                        {/* Featured Image */}
                    <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                        <img
                            src={integration.image}
                            alt={integration.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">
                            Overview
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                            {integration.description}
                        </p>
                    </div>
                    </div>
                    

                    {/* Key Features */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">
                            Key Features
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {integration.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-start gap-2 text-sm bg-secondary/30 p-3 rounded-lg"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                        <h4 className="font-semibold text-foreground mb-3 text-lg">
                            Why Choose This Integration?
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>Seamless connectivity with your existing systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>Reduces manual data entry and human errors</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>Real-time data synchronization</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>Scalable and secure implementation</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                        <Button variant="cta" className="flex-1" asChild>
                            <Link to="/contact">
                                Request Integration
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
