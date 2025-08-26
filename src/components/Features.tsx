import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Palette, Target, Zap, Shield, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Narrative Builder",
      description: "Transform your career milestones into compelling stories that resonate with employers."
    },
    {
      icon: Palette,
      title: "Beautiful Templates",
      description: "Choose from professionally designed templates that make your story visually appealing."
    },
    {
      icon: Target,
      title: "AI-Powered Insights",
      description: "Get intelligent suggestions to improve your narrative and highlight key achievements."
    },
    {
      icon: Zap,
      title: "Quick Creation",
      description: "Build your story-driven CV in minutes with our intuitive step-by-step process."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your personal data is encrypted and secure. You own your story, always."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Templates follow international CV standards while maintaining your unique narrative."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Tell Your Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create narrative-driven CVs that capture attention and land interviews.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;