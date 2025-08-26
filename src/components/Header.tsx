import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <CheckCircle className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Bandel</h1>
            <p className="text-xs text-muted-foreground">Story Your CV</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </a>
          <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Examples
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;