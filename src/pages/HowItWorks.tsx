import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CreditCard, Smartphone, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "1. Baixe o App",
      description: "Faça o download do app Bandel na App Store ou Google Play"
    },
    {
      icon: CreditCard,
      title: "2. Escolha seu Plano",
      description: "Selecione o plano que melhor atende suas necessidades e orçamento"
    },
    {
      icon: Smartphone,
      title: "3. Ative os Serviços",
      description: "Acesse todos os serviços integrados diretamente pelo app"
    },
    {
      icon: CheckCircle,
      title: "4. Aproveite os Benefícios",
      description: "Use os serviços quando precisar, sem complicação"
    }
  ];

  const features = [
    {
      title: "Interface Simples",
      description: "App intuitivo desenvolvido para funcionar em qualquer smartphone"
    },
    {
      title: "Suporte 24/7",
      description: "Atendimento via chat, WhatsApp ou telefone quando precisar"
    },
    {
      title: "Rede de Parceiros",
      description: "Centenas de estabelecimentos credenciados em todo o Brasil"
    },
    {
      title: "Economia Garantida",
      description: "Economize até 70% comparado aos preços individuais dos serviços"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Como Funciona o Bandel
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Simplicidade e praticidade para acessar todos os serviços essenciais 
                que você precisa, em um só lugar.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4 Passos Simples</h2>
              <p className="text-xl text-slate-600">Da assinatura ao uso dos serviços</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 p-5 bg-blue-100 rounded-full">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Veja o App em Ação</h2>
              <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-slate-600">Demo do App Bandel (2:30)</p>
                </div>
              </div>
              <p className="text-slate-600">
                Veja como é fácil usar o Bandel no dia a dia e descobrir todos os benefícios
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Por Que Escolher o Bandel</h2>
              <p className="text-xl text-slate-600">Benefícios que fazem a diferença</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;