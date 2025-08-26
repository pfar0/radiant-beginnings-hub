import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, User, Building, Users } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      icon: User,
      title: "Indivíduos",
      subtitle: "Pessoas físicas",
      description: "Assinatura mensal de baixo custo para acesso a todos os serviços essenciais",
      price: "R$ 50-150",
      period: "/mês",
      features: [
        "Acesso completo a todos os serviços",
        "App móvel otimizado",
        "Suporte ao cliente",
        "Sem taxas ocultas"
      ],
      buttonText: "Começar Assinatura",
      buttonVariant: "default" as const
    },
    {
      icon: Building,
      title: "Empresas",
      subtitle: "Benefício CLT",
      description: "Ofereça Bandel como benefício aos seus funcionários, aproveitando incentivos fiscais",
      price: "R$ 70",
      period: "/funcionário/mês",
      features: [
        "Benefício fiscal para empresa",
        "Atratividade para talentos",
        "Gestão centralizada",
        "Relatórios de impacto"
      ],
      buttonText: "Falar com Vendas",
      buttonVariant: "outline" as const,
      popular: true
    },
    {
      icon: Users,
      title: "Governo/ONGs",
      subtitle: "Programas Sociais",
      description: "Parcerias para subsidiar assinaturas em programas de assistência social",
      price: "Personalizado",
      period: "",
      features: [
        "Programas de assistência",
        "Impacto social mensurável",
        "Integração com políticas públicas",
        "Relatórios de eficácia"
      ],
      buttonText: "Discutir Parceria",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Para Quem É o Bandel
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Diferentes modelos para diferentes necessidades - indivíduos, empresas e organizações
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''} bg-white shadow-lg`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-blue-100 rounded-xl">
                  <plan.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">{plan.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {plan.subtitle}
                </CardDescription>
                <p className="text-slate-600 mt-2">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;