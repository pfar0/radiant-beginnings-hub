import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, DollarSign, Heart, Car, ShoppingCart, Phone, Download, Filter, Search, Calendar, BarChart3 } from "lucide-react";

const CompanyDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30days");

  const companyData = {
    totalEmployees: 1250,
    activeUsers: 1087,
    monthlySpent: 156750,
    monthlySavings: 98500,
    utilizationRate: 87,
    satisfactionScore: 4.6
  };

  const serviceUsage = [
    { name: "Saúde", users: 945, percentage: 76, cost: 45200, icon: Heart },
    { name: "Transporte", users: 832, percentage: 67, cost: 41600, icon: Car },
    { name: "Alimentação", users: 756, percentage: 61, cost: 38900, icon: ShoppingCart },
    { name: "Comunicação", users: 1087, percentage: 87, cost: 31050, icon: Phone }
  ];

  const monthlyTrend = [
    { month: "Jan", users: 850, cost: 125000, savings: 78000 },
    { month: "Fev", users: 920, cost: 135000, savings: 85000 },
    { month: "Mar", users: 980, cost: 145000, savings: 91000 },
    { month: "Abr", users: 1087, cost: 156750, savings: 98500 }
  ];

  const topUsers = [
    { name: "Ana Silva", department: "Marketing", usage: 95, savings: 285 },
    { name: "Carlos Santos", department: "TI", usage: 92, savings: 276 },
    { name: "Maria Oliveira", department: "RH", usage: 88, savings: 264 },
    { name: "João Costa", department: "Vendas", usage: 85, savings: 255 },
    { name: "Lucia Pereira", department: "Financeiro", usage: 82, savings: 246 }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Funcionários Ativos</p>
                <p className="text-2xl font-bold text-slate-900">{companyData.activeUsers}</p>
                <p className="text-xs text-green-600">
                  +12% vs mês anterior
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Taxa de Utilização</p>
                <p className="text-2xl font-bold text-slate-900">{companyData.utilizationRate}%</p>
                <p className="text-xs text-green-600">
                  Meta: 85%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Custo Mensal</p>
                <p className="text-2xl font-bold text-slate-900">
                  R$ {(companyData.monthlySpent / 1000).toFixed(0)}k
                </p>
                <p className="text-xs text-blue-600">
                  R$ {(companyData.monthlySpent / companyData.activeUsers).toFixed(0)} por usuário
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Economia Total</p>
                <p className="text-2xl font-bold text-green-600">
                  R$ {(companyData.monthlySavings / 1000).toFixed(0)}k
                </p>
                <p className="text-xs text-green-600">
                  vs benefícios tradicionais
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage by Service */}
      <Card>
        <CardHeader>
          <CardTitle>Utilização por Serviço</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {serviceUsage.map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-semibold">{service.users} usuários</div>
                    <div className="text-slate-500">R$ {service.cost.toLocaleString()}</div>
                  </div>
                </div>
                <Progress value={service.percentage} className="h-2" />
                <div className="text-xs text-slate-500">{service.percentage}% dos funcionários</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Evolução Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyTrend.map((month, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="font-medium">{month.month}/2024</div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-slate-600">Usuários: </span>
                    <span className="font-semibold">{month.users}</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Custo: </span>
                    <span className="font-semibold">R$ {(month.cost / 1000).toFixed(0)}k</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Economia: </span>
                    <span className="font-semibold text-green-600">R$ {(month.savings / 1000).toFixed(0)}k</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEmployeesTab = () => (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar funcionário..." 
                className="border rounded px-3 py-2 text-sm"
              />
            </div>
            <select className="border rounded px-3 py-2 text-sm">
              <option>Todos os departamentos</option>
              <option>Marketing</option>
              <option>TI</option>
              <option>RH</option>
              <option>Vendas</option>
              <option>Financeiro</option>
            </select>
            <select className="border rounded px-3 py-2 text-sm">
              <option>Todos os status</option>
              <option>Ativo</option>
              <option>Inativo</option>
              <option>Pendente</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Top Users */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionários com Maior Utilização</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-slate-600">{user.department}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-green-600">R$ {user.savings}/mês</div>
                  <div className="text-sm text-slate-600">{user.usage}% uso</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Department Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Análise por Departamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { dept: "Marketing", employees: 145, active: 132, usage: 91, avgSavings: 245 },
              { dept: "TI", employees: 89, active: 85, usage: 95, avgSavings: 268 },
              { dept: "Vendas", employees: 234, active: 198, usage: 85, avgSavings: 228 },
              { dept: "RH", employees: 67, active: 61, usage: 91, avgSavings: 252 },
              { dept: "Financeiro", employees: 123, active: 108, usage: 88, avgSavings: 239 }
            ].map((dept, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{dept.dept}</h4>
                  <Badge className="bg-blue-100 text-blue-700">
                    {dept.active}/{dept.employees} ativos
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-slate-600">Taxa de Adesão</div>
                    <div className="font-semibold">{Math.round((dept.active / dept.employees) * 100)}%</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Uso Médio</div>
                    <div className="font-semibold">{dept.usage}%</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Economia Média</div>
                    <div className="font-semibold text-green-600">R$ {dept.avgSavings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Relatórios Gerenciais</h3>
        <div className="flex gap-2">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="7days">Últimos 7 dias</option>
            <option value="30days">Últimos 30 dias</option>
            <option value="90days">Últimos 90 dias</option>
            <option value="12months">Últimos 12 meses</option>
          </select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Relatório de Utilização Mensal</h4>
                <p className="text-sm text-slate-600">Uso detalhado por funcionário e serviço</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-700 mb-1">Pronto</Badge>
                <div className="text-xs text-slate-500">Atualizado hoje</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Análise de ROI e Economia</h4>
                <p className="text-sm text-slate-600">Retorno sobre investimento comparativo</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-700 mb-1">Pronto</Badge>
                <div className="text-xs text-slate-500">Atualizado hoje</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Satisfação dos Funcionários</h4>
                <p className="text-sm text-slate-600">Pesquisa de satisfação e NPS</p>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-100 text-yellow-700 mb-1">Processando</Badge>
                <div className="text-xs text-slate-500">Disponível em 2h</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Comparativo de Custos</h4>
                <p className="text-sm text-slate-600">Bandel vs benefícios tradicionais</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-700 mb-1">Pronto</Badge>
                <div className="text-xs text-slate-500">Semanal</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Insights Rápidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-800">Economia crescente</p>
                <p className="text-sm text-green-700">
                  Sua empresa economizou 15% a mais este mês comparado ao anterior
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Users className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800">Alta adesão</p>
                <p className="text-sm text-blue-700">
                  87% dos funcionários estão ativos, acima da média do mercado (65%)
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-purple-800">Serviço mais usado</p>
                <p className="text-sm text-purple-700">
                  Saúde é o benefício mais utilizado (76% dos funcionários)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    Dashboard Empresarial
                  </h1>
                  <p className="text-slate-600">
                    Acompanhe o engajamento e ROI dos benefícios Bandel
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    R$ {(companyData.monthlySavings / 1000).toFixed(0)}k
                  </div>
                  <div className="text-sm text-slate-600">economia este mês</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Badge className="bg-green-100 text-green-700 px-4 py-2">
                  📊 Analytics Avançado
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                  👥 {companyData.activeUsers} Usuários Ativos
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
                  ⭐ {companyData.satisfactionScore}/5 Satisfação
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="employees">Funcionários</TabsTrigger>
                  <TabsTrigger value="reports">Relatórios</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">{renderOverviewTab()}</TabsContent>
                <TabsContent value="employees">{renderEmployeesTab()}</TabsContent>
                <TabsContent value="reports">{renderReportsTab()}</TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDashboard;