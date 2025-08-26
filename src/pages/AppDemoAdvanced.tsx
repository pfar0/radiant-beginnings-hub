import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Car, ShoppingCart, Phone, PlayCircle, Dumbbell, GraduationCap, User, Bell, CreditCard, MapPin, Calendar, Star, Plus, Settings, Search, Download, QrCode } from "lucide-react";
import { useState } from "react";

const AppDemoAdvanced = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { 
      icon: Heart, 
      name: "Saúde", 
      color: "bg-red-100 text-red-600", 
      available: true,
      usage: 65,
      details: {
        consultasDisponiveis: 3,
        proximaConsulta: "Dr. João Silva - Amanhã 15:00",
        telemedicina: "24/7 Disponível"
      }
    },
    { 
      icon: Car, 
      name: "Transporte", 
      color: "bg-blue-100 text-blue-600", 
      available: true,
      usage: 45,
      details: {
        creditoUber: "R$ 80 disponível",
        transportePublico: "Ilimitado",
        proximoVencimento: "15 dias"
      }
    },
    { 
      icon: ShoppingCart, 
      name: "Alimentação", 
      color: "bg-green-100 text-green-600", 
      available: true,
      usage: 30,
      details: {
        descontoSupermercado: "15% em parceiros",
        vouchersRefeicao: "R$ 200 disponível",
        restaurantesProximos: "25 parceiros"
      }
    },
    { 
      icon: Phone, 
      name: "Comunicação", 
      color: "bg-purple-100 text-purple-600", 
      available: true,
      usage: 80,
      details: {
        dadosRestantes: "15GB de 20GB",
        ligacoesIlimitadas: "Ativo",
        smsGratuito: "Ilimitado"
      }
    },
    { 
      icon: PlayCircle, 
      name: "Entretenimento", 
      color: "bg-pink-100 text-pink-600", 
      available: true,
      usage: 90,
      details: {
        netflix: "Conta Premium",
        spotify: "Premium Familiar",
        eventosProximos: "3 disponíveis"
      }
    },
    { 
      icon: Dumbbell, 
      name: "Academia", 
      color: "bg-orange-100 text-orange-600", 
      available: true,
      usage: 25,
      details: {
        academiasParceiras: "50+ disponíveis",
        aulasAgendadas: "Spinning - Quinta 19h",
        personalTrainer: "2 sessões/mês"
      }
    },
    { 
      icon: GraduationCap, 
      name: "Educação", 
      color: "bg-indigo-100 text-indigo-600", 
      available: true,
      usage: 40,
      details: {
        cursosAtivos: "Marketing Digital",
        certificacoes: "3 disponíveis",
        proximaAula: "Hoje 20:00"
      }
    },
  ];

  const recentActivity = [
    { type: "Consulta médica agendada", time: "Hoje, 14:30", icon: Heart, value: "Dr. João Silva" },
    { type: "Crédito Uber utilizado", time: "Ontem", icon: Car, value: "R$ 25,50" },
    { type: "Desconto no supermercado", time: "2 dias atrás", icon: ShoppingCart, value: "15% Extra" },
    { type: "Aula de academia", time: "3 dias atrás", icon: Dumbbell, value: "Spinning" },
    { type: "Curso concluído", time: "1 semana atrás", icon: GraduationCap, value: "Excel Avançado" },
  ];

  const planInfo = {
    nome: "Premium Individual",
    valor: "R$ 149/mês",
    economia: "R$ 420",
    proximoPagamento: "15 de Abril, 2024",
    diasRestantes: 12
  };

  const renderHomeTab = () => (
    <div className="space-y-6">
      {/* User Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Olá, Maria! 👋</h2>
          <p className="text-slate-600">{planInfo.nome}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700">Ativo</Badge>
          <Bell className="w-6 h-6 text-slate-400" />
        </div>
      </div>

      {/* Economia Banner */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-700">{planInfo.economia}</div>
              <div className="text-sm text-green-600">Economia este mês</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-slate-900">{planInfo.valor}</div>
              <div className="text-sm text-slate-600">Próx. cobrança em {planInfo.diasRestantes} dias</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-3 text-center">
            <div className="text-xl font-bold text-blue-600">15</div>
            <div className="text-xs text-slate-600">Serviços usados</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <div className="text-xl font-bold text-green-600">4.9</div>
            <div className="text-xs text-slate-600">Sua avaliação</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <div className="text-xl font-bold text-purple-600">85%</div>
            <div className="text-xs text-slate-600">Utilização</div>
          </CardContent>
        </Card>
      </div>

      {/* Services Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Seus Serviços</h3>
          <Button variant="ghost" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedService(service.name)}
            >
              <CardContent className="p-3 text-center">
                <div className={`w-10 h-10 mx-auto mb-2 p-2 rounded-lg ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-slate-900">{service.name}</div>
                <Progress value={service.usage} className="h-1 mt-2" />
                <div className="text-xs text-slate-500 mt-1">{service.usage}%</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          {recentActivity.slice(0, 3).map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <activity.icon className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">{activity.type}</div>
                <div className="text-xs text-slate-600">{activity.time}</div>
              </div>
              <div className="text-xs font-semibold text-slate-700">{activity.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServicesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Serviços</h2>
        <Search className="w-6 h-6 text-slate-400" />
      </div>

      {services.map((service, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 p-3 rounded-xl ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">{service.name}</h3>
                <Progress value={service.usage} className="h-2 mb-2" />
                <div className="text-sm text-slate-600">
                  {service.usage}% utilizado este mês
                </div>
              </div>
              <Button size="sm" variant="outline">
                Ver Detalhes
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderWalletTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Carteira</h2>
      
      {/* Saldo Card */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Saldo Disponível</h3>
            <CreditCard className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-2">R$ 245,50</div>
          <div className="text-sm opacity-90">Créditos acumulados</div>
        </CardContent>
      </Card>

      {/* Créditos por Serviço */}
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-900">Créditos por Serviço</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Transporte</span>
            </div>
            <span className="font-bold text-blue-600">R$ 80,00</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-green-600" />
              <span className="font-medium">Alimentação</span>
            </div>
            <span className="font-bold text-green-600">R$ 120,00</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span className="font-medium">Comunicação</span>
            </div>
            <span className="font-bold text-purple-600">R$ 45,50</span>
          </div>
        </div>
      </div>

      {/* Histórico */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Últimas Transações</h3>
        <div className="space-y-2">
          {[
            { desc: "Uber - Viagem Centro", valor: "-R$ 25,50", data: "Hoje" },
            { desc: "Desconto Supermercado", valor: "+R$ 18,00", data: "Ontem" },
            { desc: "Recarga mensal", valor: "+R$ 200,00", data: "03/04" },
          ].map((transacao, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium text-sm">{transacao.desc}</div>
                <div className="text-xs text-slate-500">{transacao.data}</div>
              </div>
              <div className={`font-bold ${transacao.valor.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {transacao.valor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Perfil</h2>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Maria Silva</h3>
              <p className="text-slate-600">maria.silva@email.com</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-slate-600">Membro Premium</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <div className="font-medium">Plano Atual</div>
                <div className="text-sm text-slate-600">{planInfo.nome}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{planInfo.valor}</div>
                <Badge className="bg-green-100 text-green-700">Ativo</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{planInfo.economia}</div>
                <div className="text-sm text-slate-600">Economia total</div>
              </div>
              <div className="p-3 border rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">18</div>
                <div className="text-sm text-slate-600">Meses como membro</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-3" />
          Configurações da Conta
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <CreditCard className="w-4 h-4 mr-3" />
          Formas de Pagamento
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <MapPin className="w-4 h-4 mr-3" />
          Endereços Salvos
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <QrCode className="w-4 h-4 mr-3" />
          Meu QR Code
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Download className="w-4 h-4 mr-3" />
          Baixar Comprovantes
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Star className="w-4 h-4 mr-3" />
          Avaliar App
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Demo Avançada do App Bandel
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Explore todas as funcionalidades do app como se fosse um usuário real
              </p>
              <div className="flex items-center justify-center gap-4">
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                  💡 Demo Interativa Completa
                </Badge>
                <Badge className="bg-green-100 text-green-700 px-4 py-2">
                  📱 Interface Real
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* App Demo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-slate-100 h-6 flex items-center justify-center">
                    <div className="w-16 h-1 bg-slate-900 rounded-full"></div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-blue-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-bold">Bandel</h1>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-white/20 text-white text-xs">Premium</Badge>
                        <Bell className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="h-[500px] overflow-y-auto p-4">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsContent value="home">{renderHomeTab()}</TabsContent>
                      <TabsContent value="services">{renderServicesTab()}</TabsContent>
                      <TabsContent value="wallet">{renderWalletTab()}</TabsContent>
                      <TabsContent value="profile">{renderProfileTab()}</TabsContent>
                    </Tabs>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="border-t border-slate-200 bg-white">
                    <TabsList className="w-full h-16 bg-transparent p-2">
                      <TabsTrigger value="home" className="flex-1 flex-col gap-1 h-12">
                        <div className="w-5 h-5 bg-current rounded"></div>
                        <span className="text-xs">Home</span>
                      </TabsTrigger>
                      <TabsTrigger value="services" className="flex-1 flex-col gap-1 h-12">
                        <Heart className="w-5 h-5" />
                        <span className="text-xs">Serviços</span>
                      </TabsTrigger>
                      <TabsTrigger value="wallet" className="flex-1 flex-col gap-1 h-12">
                        <CreditCard className="w-5 h-5" />
                        <span className="text-xs">Carteira</span>
                      </TabsTrigger>
                      <TabsTrigger value="profile" className="flex-1 flex-col gap-1 h-12">
                        <User className="w-5 h-5" />
                        <span className="text-xs">Perfil</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
                Funcionalidades da Demo
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Dashboard Completo</h4>
                  <p className="text-sm text-slate-600">Visão geral de todos os serviços e economia</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Carteira Digital</h4>
                  <p className="text-sm text-slate-600">Gestão de créditos e transações</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Perfil Detalhado</h4>
                  <p className="text-sm text-slate-600">Configurações e preferências</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Interface Premium</h4>
                  <p className="text-sm text-slate-600">Design moderno e intuitivo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Experimente o App Real!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Baixe agora e comece sua jornada de economia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                📱 Download iOS
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                🤖 Download Android
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Ou escaneie o QR Code para download direto
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppDemoAdvanced;