import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Made with <Heart className="text-primary" size={14} fill="currentColor" /> by{" "}
          <span className="text-foreground font-medium">Lunghimpou Kamei</span>
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;