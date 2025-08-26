import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Car, ShoppingCart, Phone, PlayCircle, Dumbbell, GraduationCap, User, Bell, CreditCard, MapPin, Calendar, Star } from "lucide-react";
import { useState } from "react";

const AppDemo = () => {
  const [activeTab, setActiveTab] = useState("home");

  const services = [
    { icon: Heart, name: "Saúde", color: "bg-red-100 text-red-600", available: true },
    { icon: Car, name: "Transporte", color: "bg-blue-100 text-blue-600", available: true },
    { icon: ShoppingCart, name: "Alimentação", color: "bg-green-100 text-green-600", available: true },
    { icon: Phone, name: "Comunicação", color: "bg-purple-100 text-purple-600", available: true },
    { icon: PlayCircle, name: "Entretenimento", color: "bg-pink-100 text-pink-600", available: true },
    { icon: Dumbbell, name: "Academia", color: "bg-orange-100 text-orange-600", available: true },
    { icon: GraduationCap, name: "Educação", color: "bg-indigo-100 text-indigo-600", available: true },
  ];

  const recentActivity = [
    { type: "Consulta médica agendada", time: "Hoje, 14:30", icon: Heart },
    { type: "Crédito Uber utilizado", time: "Ontem", icon: Car },
    { type: "Desconto no supermercado", time: "2 dias atrás", icon: ShoppingCart },
  ];

  const renderHomeTab = () => (
    <div className="space-y-6">
      {/* User Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Olá, Maria!</h2>
          <p className="text-slate-600">Plano Individual Ativo</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700">Ativo</Badge>
          <Bell className="w-6 h-6 text-slate-400" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">R$ 340</div>
            <div className="text-sm text-slate-600">Economia este mês</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-slate-600">Serviços utilizados</div>
          </CardContent>
        </Card>
      </div>

      {/* Services Grid */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Seus Serviços</h3>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 mx-auto mb-2 p-3 rounded-lg ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-slate-900">{service.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <activity.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">{activity.type}</div>
                <div className="text-xs text-slate-600">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHealthTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Saúde</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-20 flex-col bg-red-50 hover:bg-red-100 text-red-700 border border-red-200">
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-sm">Agendar Consulta</span>
        </Button>
        <Button className="h-20 flex-col bg-red-50 hover:bg-red-100 text-red-700 border border-red-200">
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-sm">Telemedicina</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Próximas Consultas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <div className="font-medium">Dr. João Silva</div>
                <div className="text-sm text-slate-600">Clínico Geral</div>
              </div>
              <div className="text-sm text-slate-600">Amanhã, 15:00</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Histórico de Saúde</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-slate-600">
            • Consulta Cardiologia - 15/03/2024
            <br />
            • Exame de Sangue - 10/03/2024
            <br />
            • Check-up Anual - 28/02/2024
          </div>
        </CardContent>
      </Card>
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
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Plano Atual</label>
              <div className="flex items-center justify-between">
                <span>Individual - R$ 89/mês</span>
                <Badge className="bg-green-100 text-green-700">Ativo</Badge>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-slate-700">Próximo Pagamento</label>
              <p>15 de Abril, 2024</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-slate-700">Economia Total</label>
              <p className="text-green-600 font-semibold">R$ 1.240 em 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <CreditCard className="w-4 h-4 mr-2" />
          Formas de Pagamento
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <MapPin className="w-4 h-4 mr-2" />
          Endereços
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Star className="w-4 h-4 mr-2" />
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
                Demo do App Bandel
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Experimente como seria usar o Bandel no seu dia a dia
              </p>
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                Demonstração Interativa
              </Badge>
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
                  
                  {/* App Content */}
                  <div className="h-[600px] overflow-y-auto p-4">
                    {activeTab === "home" && renderHomeTab()}
                    {activeTab === "health" && renderHealthTab()}
                    {activeTab === "profile" && renderProfileTab()}
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="border-t border-slate-200 p-4">
                    <div className="flex justify-around">
                      <button 
                        onClick={() => setActiveTab("home")}
                        className={`p-2 rounded-lg ${activeTab === "home" ? "bg-blue-100 text-blue-600" : "text-slate-400"}`}
                      >
                        <div className="w-6 h-6 mb-1 mx-auto">
                          <div className="w-full h-full bg-current rounded"></div>
                        </div>
                        <div className="text-xs">Home</div>
                      </button>
                      <button 
                        onClick={() => setActiveTab("health")}
                        className={`p-2 rounded-lg ${activeTab === "health" ? "bg-blue-100 text-blue-600" : "text-slate-400"}`}
                      >
                        <Heart className="w-6 h-6 mb-1 mx-auto" />
                        <div className="text-xs">Saúde</div>
                      </button>
                      <button 
                        onClick={() => setActiveTab("profile")}
                        className={`p-2 rounded-lg ${activeTab === "profile" ? "bg-blue-100 text-blue-600" : "text-slate-400"}`}
                      >
                        <User className="w-6 h-6 mb-1 mx-auto" />
                        <div className="text-xs">Perfil</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Gostou? Baixe o App Agora!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Disponível para iOS e Android
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Download iOS
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Download Android
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppDemo;