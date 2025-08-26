import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Smartphone, Car, Phone, ShoppingCart, PlayCircle, Dumbbell, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Saúde",
      description: "Seguro básico de saúde, telemedicina e check-ups anuais",
      features: ["Consultas médicas", "Telemedicina 24/7", "Exames preventivos"]
    },
    {
      icon: Smartphone,
      title: "Dentista",
      description: "Cuidados odontológicos completos e especializados",
      features: ["Consultas odontológicas", "Limpeza e profilaxia", "Tratamentos básicos"]
    },
    {
      icon: Car,
      title: "Transporte",
      description: "Vouchers mensais de transporte e créditos para viagens",
      features: ["Transporte público", "Aplicativos de carona", "Mobilidade urbana"]
    },
    {
      icon: Phone,
      title: "Comunicação",
      description: "Plano pré-pago com chamadas, SMS e dados",
      features: ["Ligações ilimitadas", "Internet móvel", "SMS gratuito"]
    },
    {
      icon: ShoppingCart,
      title: "Alimentação",
      description: "Descontos em supermercados e vouchers para refeições",
      features: ["Supermercados parceiros", "Restaurantes locais", "Cestas básicas"]
    },
    {
      icon: PlayCircle,
      title: "Entretenimento",
      description: "Acesso a Netflix, Spotify e outras plataformas de streaming",
      features: ["Netflix e Prime Video", "Spotify e Apple Music", "Eventos culturais"]
    },
    {
      icon: Dumbbell,
      title: "Academias",
      description: "Acesso a redes de academias e atividades físicas",
      features: ["Academias parceiras", "Aulas em grupo", "Personal trainer"]
    },
    {
      icon: GraduationCap,
      title: "Educação",
      description: "Cursos online e presenciais para desenvolvimento pessoal",
      features: ["Cursos profissionalizantes", "Ensino técnico", "Certificações"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Serviços Integrados
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma única assinatura que oferece acesso a todos os serviços essenciais que você precisa no dia a dia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600">
            Mais serviços serão adicionados: microcrédito, seguros, consultoria
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;