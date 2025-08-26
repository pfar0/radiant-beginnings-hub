import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Globe } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      description: "Ex-diretora de impacto social na Stone. Formada em Administração pela FGV."
    },
    {
      name: "Carlos Mendes",
      role: "CTO",
      description: "Ex-tech lead no Nubank. Especialista em arquitetura de sistemas escaláveis."
    },
    {
      name: "Mariana Santos",
      role: "Head de Produto",
      description: "Ex-gerente de produto no iFood. Focada em soluções para classes C, D e E."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Impacto Social",
      description: "Nosso propósito é democratizar o acesso a serviços essenciais no Brasil"
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Acreditamos que todos merecem acesso a serviços de qualidade"
    },
    {
      icon: Target,
      title: "Eficiência",
      description: "Otimizamos custos através de economia de escala e tecnologia"
    },
    {
      icon: Globe,
      title: "Sustentabilidade",
      description: "Construímos um modelo de negócio sustentável e escalável"
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
                Nossa Missão: Democratizar Serviços Essenciais
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                A Bandel nasceu da crença de que todos os brasileiros merecem acesso a serviços essenciais 
                de qualidade, independentemente de sua classe social. Combinamos tecnologia, parcerias 
                estratégicas e economia de escala para tornar isso realidade.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nossa História</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">2024 - O Início</h3>
                  <p className="text-slate-600">
                    Fundação da Bandel após identificar que 60% da população brasileira tem dificuldade 
                    de acesso a serviços básicos de qualidade devido aos altos custos.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Q1 2024 - Validação</h3>
                  <p className="text-slate-600">
                    Primeiras parcerias firmadas com provedores de saúde, transporte e alimentação. 
                    Programa piloto com 1.000 famílias em São Paulo.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Q2 2024 - Expansão</h3>
                  <p className="text-slate-600">
                    Lançamento oficial da plataforma. Meta de atingir 10.000 assinantes 
                    e expandir para Rio de Janeiro e Belo Horizonte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Valores</h2>
              <p className="text-xl text-slate-600">Os princípios que guiam nossa missão</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 p-4 bg-blue-100 rounded-xl">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Equipe</h2>
              <p className="text-xl text-slate-600">Profissionais experientes dedicados ao impacto social</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center bg-slate-50 p-6 rounded-xl">
                  <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.description}</p>
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

export default About;