import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      role: "Professora",
      location: "São Paulo, SP",
      rating: 5,
      text: "O Bandel mudou minha vida! Agora tenho acesso a plano de saúde, academia e ainda economizo no transporte. Antes gastava mais de R$ 400 por mês só com esses serviços.",
      savings: "R$ 280/mês"
    },
    {
      name: "Carlos Mendoza",
      role: "Motorista de App",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Como autônomo, sempre foi difícil ter plano de saúde. Com o Bandel, tenho tudo que preciso por um preço que cabe no meu orçamento. A telemedicina salvou minha família várias vezes.",
      savings: "R$ 350/mês"
    },
    {
      name: "Mariana Santos",
      role: "Vendedora",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Estava gastando uma fortuna com academia, Netflix, Uber e médico particular. O Bandel juntou tudo isso e ainda sobra dinheiro para outras coisas importantes.",
      savings: "R$ 420/mês"
    },
    {
      name: "João Silva",
      role: "Técnico em Informática",
      location: "São Paulo, SP",
      rating: 5,
      text: "O app é muito fácil de usar e o suporte é excelente. Já usei a telemedicina, academia e os descontos no supermercado. Recomendo para todos!",
      savings: "R$ 190/mês"
    },
    {
      name: "Fernanda Lima",
      role: "Cabeleireira",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Sempre sonhei em ter um plano de saúde completo. Com o Bandel, realizei esse sonho e ainda ganhei vários outros benefícios que nem imaginava que precisava.",
      savings: "R$ 310/mês"
    },
    {
      name: "Roberto Oliveira",
      role: "Porteiro",
      location: "São Paulo, SP",
      rating: 5,
      text: "Minha família toda usa o Bandel. São 4 pessoas economizando mais de R$ 800 por mês. Os cursos online me ajudaram a conseguir uma promoção no trabalho.",
      savings: "R$ 800/mês (família)"
    }
  ];

  const stats = [
    { number: "4.9", label: "Avaliação média", icon: "⭐" },
    { number: "95%", label: "Recomendam", icon: "👍" },
    { number: "R$ 290", label: "Economia média mensal", icon: "💰" },
    { number: "15k+", label: "Famílias atendidas", icon: "👨‍👩‍👧‍👦" }
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
                O Que Nossos Usuários Dizem
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Histórias reais de pessoas que transformaram suas vidas com o Bandel
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-6 h-6 text-blue-600 mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                          <p className="text-sm text-slate-600">{testimonial.role}</p>
                          <p className="text-sm text-slate-500">{testimonial.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-600 font-bold text-lg">
                            {testimonial.savings}
                          </div>
                          <div className="text-xs text-slate-500">economia</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Depoimentos em Vídeo
              </h2>
              <p className="text-xl text-slate-600">
                Veja como o Bandel impactou a vida de nossos usuários
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((video, index) => (
                <div key={index} className="relative">
                  <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-slate-600 font-medium">Depoimento {video}</p>
                      <p className="text-sm text-slate-500">2:15</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Faça Parte Dessa História de Sucesso
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Junte-se a milhares de brasileiros que já transformaram suas vidas
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg">
              Começar Agora - 15 Dias Grátis
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;