import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Building, Calendar, UserPlus } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Contato Geral",
      description: "Dúvidas sobre o Bandel e parcerias",
      buttonText: "Enviar Email",
      variant: "default" as const
    },
    {
      icon: Building,
      title: "Para Empresas",
      description: "Quero oferecer Bandel aos meus funcionários",
      buttonText: "Falar com Vendas",
      variant: "outline" as const
    },
    {
      icon: Calendar,
      title: "Agendar Reunião",
      description: "Governo, ONGs e grandes organizações",
      buttonText: "Agendar Chamada",
      variant: "outline" as const
    },
    {
      icon: UserPlus,
      title: "Procuramos um CTO",
      description: "Papel baseado em equity com expertise em apps móveis, arquitetura backend e integração de IA",
      buttonText: "Candidatar-se para CTO",
      variant: "secondary" as const
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Vamos Conversar
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pronto para fazer parte da revolução dos serviços essenciais? Entre em contato conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-blue-100 rounded-xl">
                  <contact.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">{contact.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {contact.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={contact.variant} 
                  className="w-full"
                  size="lg"
                >
                  {contact.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;