import { TrendingUp, DollarSign, Heart, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "100K+",
      label: "Usuários no Ano 1",
      description: "Meta inicial de assinantes"
    },
    {
      icon: DollarSign,
      number: "R$ 70M",
      label: "Receita Projetada",
      description: "Primeiro ano de operação"
    },
    {
      icon: Heart,
      number: "10M+",
      label: "Vidas Impactadas",
      description: "Meta de longo prazo no Brasil"
    },
    {
      icon: Globe,
      number: "5 Países",
      label: "Expansão Futura",
      description: "América Latina e além"
    }
  ];

  const benefits = [
    "Melhora qualidade de vida das populações mais vulneráveis",
    "Alternativa eficiente aos serviços públicos",
    "Economia de escala reduz custos para todos",
    "Tecnologia acessível para dispositivos básicos"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Impacto Social e Escalabilidade
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bandel foi projetado para crescer rapidamente e criar impacto social significativo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 p-4 bg-blue-100 rounded-xl">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
              <div className="text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Por Que Bandel Importa
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;