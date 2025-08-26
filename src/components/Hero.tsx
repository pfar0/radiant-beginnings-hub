import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
            Serviços essenciais para todos
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Bandel
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Acesso acessível a serviços essenciais de vida:
            <br />
            <span className="text-orange-500 font-medium">
              saúde, transporte, alimentação, comunicação, entretenimento, academias e educação
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Qualidade superior
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Preços acessíveis
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              Impacto social
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Comece Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-500 text-lg">
          Uma alternativa privada aos serviços públicos
        </p>
      </div>
    </section>
  );
};

export default Hero;