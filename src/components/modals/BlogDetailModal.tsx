import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
    title: string;
    excerpt?: string;
    content?: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    image?: string;
}

interface BlogDetailModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    post: BlogPost | null;
}

export function BlogDetailModal({
    open,
    onOpenChange,
    post,
}: BlogDetailModalProps) {
    if (!post) return null;

    // Generate placeholder image based on category
    const categoryInitials = post.category.slice(0, 2).toUpperCase();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-start gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                    {post.category}
                                </Badge>
                            </div>
                            <DialogTitle className="text-2xl md:text-3xl">
                                {post.title}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Featured Image */}
                    <div className="aspect-video h-[200px] rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
                        {post.image ? (
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-6xl font-bold text-muted-foreground/30">
                                {categoryInitials}
                            </span>
                        )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-4 border-b border-border">
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <div>
                            <h4 className="font-semibold text-foreground mb-2 text-lg">
                                Summary
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>
                    )}

                    {/* Full Content */}
                    {post.content && (
                        <div>
                            <h4 className="font-semibold text-foreground mb-3 text-lg">
                                Full Article
                            </h4>
                            <div className="prose prose-sm max-w-none">
                                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                                    {post.content}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* If no full content, show a message */}
                    {!post.content && (
                        <div className="bg-secondary/30 rounded-lg p-6 text-center">
                            <p className="text-muted-foreground">
                                Full article content will be available soon. Stay tuned!
                            </p>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                        <Button variant="cta" className="flex-1" asChild>
                            <Link to="/contact">
                                Get in Touch
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
