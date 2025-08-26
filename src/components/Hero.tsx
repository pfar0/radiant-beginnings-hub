import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Transform Your Career Story
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Turn Your CV Into a
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Compelling Story</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Create narrative-driven resumes that showcase your journey, achievements, and potential. 
                Stand out with CVs that tell your professional story in an engaging way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300 group"
              >
                Start Your Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5"
              >
                View Examples
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Stories Created</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3 mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3 mx-auto">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">2M+</div>
                <div className="text-sm text-muted-foreground">Interviews</div>
              </div>
            </div>
          </div>
          
          {/* Illustration placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-3xl flex items-center justify-center border border-primary/20">
              <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-elegant">
                <div className="text-primary-foreground text-center">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Professional Storytelling</p>
                  <p className="text-sm opacity-90">Visual representation placeholder</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;