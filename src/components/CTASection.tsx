import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Free to start - no credit card required",
    "Professional templates included", 
    "AI-powered story suggestions",
    "Export in multiple formats"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Career Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of professionals who have elevated their careers with compelling CV narratives. 
            Start creating your story today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              Start Building Your Story
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              View Demo
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-sm font-medium text-left">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;