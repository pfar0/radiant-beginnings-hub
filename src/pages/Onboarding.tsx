import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Car, ShoppingCart, Phone, PlayCircle, Dumbbell, GraduationCap, ArrowRight, CheckCircle, User, Building2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState<"individual" | "company" | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [priorities, setPriorities] = useState<string[]>([]);

  const services = [
    { id: "health", icon: Heart, name: "Saúde", description: "Consultas, telemedicina e exames", price: "R$ 89" },
    { id: "transport", icon: Car, name: "Transporte", description: "Uber, 99 e transporte público", price: "R$ 120" },
    { id: "food", icon: ShoppingCart, name: "Alimentação", description: "Descontos e vouchers", price: "R$ 180" },
    { id: "communication", icon: Phone, name: "Comunicação", description: "Internet e telefone", price: "R$ 95" },
    { id: "entertainment", icon: PlayCircle, name: "Entretenimento", description: "Netflix, Spotify e eventos", price: "R$ 75" },
    { id: "gym", icon: Dumbbell, name: "Academia", description: "Rede de academias parceiras", price: "R$ 85" },
    { id: "education", icon: GraduationCap, name: "Educação", description: "Cursos online e certificações", price: "R$ 120" }
  ];

  const budgetOptions = [
    { value: "50-150", label: "R$ 50 - R$ 150", description: "Plano básico essencial" },
    { value: "150-300", label: "R$ 150 - R$ 300", description: "Plano intermediário" },
    { value: "300-500", label: "R$ 300 - R$ 500", description: "Plano completo" },
    { value: "500-1000", label: "R$ 500 - R$ 1000", description: "Plano premium" }
  ];

  const priorityOptions = [
    "Economia máxima no orçamento familiar",
    "Acesso fácil a serviços de saúde",
    "Mobilidade urbana facilitada",
    "Educação e capacitação profissional",
    "Entretenimento para família",
    "Bem-estar e qualidade de vida"
  ];

  const steps = [
    "Tipo de usuário",
    "Escolha seus serviços",
    "Defina seu orçamento",
    "Suas prioridades",
    "Plano personalizado"
  ];

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-900">
          Passo {currentStep + 1} de {steps.length}
        </h2>
        <Badge className="bg-green-100 text-green-700">
          {Math.round(((currentStep + 1) / steps.length) * 100)}% completo
        </Badge>
      </div>
      <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
    </div>
  );

  const renderUserTypeStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Vamos começar!</h3>
        <p className="text-slate-600">Como você gostaria de usar o Bandel?</p>
      </div>

      <div className="grid gap-4">
        <Card 
          className={`cursor-pointer transition-all ${userType === "individual" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"}`}
          onClick={() => setUserType("individual")}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">Pessoa Física</h4>
                <p className="text-sm text-slate-600">Para você e sua família</p>
              </div>
              {userType === "individual" && <CheckCircle className="w-6 h-6 text-blue-600" />}
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all ${userType === "company" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"}`}
          onClick={() => setUserType("company")}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">Empresa</h4>
                <p className="text-sm text-slate-600">Benefícios para funcionários</p>
              </div>
              {userType === "company" && <CheckCircle className="w-6 h-6 text-blue-600" />}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-yellow-800">Dica importante!</p>
            <p className="text-xs text-yellow-700 mt-1">
              O Bandel foi criado pensando em você. Nossos planos são acessíveis e você só paga pelos serviços que realmente usar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Quais serviços interessam você?</h3>
        <p className="text-slate-600">Escolha os benefícios que fazem mais sentido para seu dia a dia</p>
      </div>

      <div className="grid gap-3">
        {services.map((service) => (
          <Card 
            key={service.id}
            className={`cursor-pointer transition-all ${selectedServices.includes(service.id) ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"}`}
            onClick={() => {
              if (selectedServices.includes(service.id)) {
                setSelectedServices(selectedServices.filter(id => id !== service.id));
              } else {
                setSelectedServices([...selectedServices, service.id]);
              }
            }}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900">{service.name}</h4>
                    <span className="text-sm font-semibold text-green-600">{service.price}/mês</span>
                  </div>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
                {selectedServices.includes(service.id) && <CheckCircle className="w-5 h-5 text-blue-600" />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <span className="font-medium">💰 Economia inteligente:</span> Quanto mais serviços você escolher, maior o desconto no pacote final!
        </p>
      </div>
    </div>
  );

  const renderBudgetStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Qual é seu orçamento?</h3>
        <p className="text-slate-600">Vamos criar um plano que cabe no seu bolso</p>
      </div>

      <div className="grid gap-3">
        {budgetOptions.map((option) => (
          <Card 
            key={option.value}
            className={`cursor-pointer transition-all ${budget === option.value ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"}`}
            onClick={() => setBudget(option.value)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{option.label}</h4>
                  <p className="text-sm text-slate-600">{option.description}</p>
                </div>
                {budget === option.value && <CheckCircle className="w-6 h-6 text-blue-600" />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-medium">🎯 Flexibilidade total:</span> Você pode alterar seu plano a qualquer momento, sem taxa de cancelamento!
        </p>
      </div>
    </div>
  );

  const renderPrioritiesStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">O que é mais importante para você?</h3>
        <p className="text-slate-600">Isso nos ajuda a personalizar ainda mais sua experiência</p>
      </div>

      <div className="space-y-3">
        {priorityOptions.map((priority, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50">
            <Checkbox 
              id={`priority-${index}`}
              checked={priorities.includes(priority)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setPriorities([...priorities, priority]);
                } else {
                  setPriorities(priorities.filter(p => p !== priority));
                }
              }}
            />
            <label htmlFor={`priority-${index}`} className="text-sm text-slate-700 cursor-pointer flex-1">
              {priority}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFinalStep = () => {
    const selectedServicesList = services.filter(s => selectedServices.includes(s.id));
    const totalPrice = selectedServicesList.reduce((sum, service) => sum + parseInt(service.price.replace(/\D/g, '')), 0);
    const discount = selectedServicesList.length > 3 ? 20 : selectedServicesList.length > 1 ? 10 : 0;
    const finalPrice = totalPrice * (1 - discount / 100);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Seu plano personalizado está pronto! 🎉</h3>
          <p className="text-slate-600">Veja quanto você vai economizar</p>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-green-700">R$ {finalPrice.toFixed(0)}</div>
              <div className="text-sm text-green-600">por mês</div>
              {discount > 0 && (
                <Badge className="bg-yellow-100 text-yellow-700 mt-2">
                  {discount}% de desconto aplicado!
                </Badge>
              )}
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">Seus serviços inclusos:</h4>
              {selectedServicesList.map((service) => (
                <div key={service.id} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  {service.name} - {service.description}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 mb-2">
            <span className="font-medium">🔥 Oferta especial:</span> Primeira semana grátis para testar!
          </p>
          <p className="text-xs text-blue-700">
            Sem compromisso. Cancele quando quiser.
          </p>
        </div>

        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            onClick={() => navigate('/payment-flow')}
          >
            Começar agora
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/app-demo')}
          >
            Ver demonstração
          </Button>
        </div>
      </div>
    );
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return userType !== null;
      case 1: return selectedServices.length > 0;
      case 2: return budget !== "";
      case 3: return priorities.length > 0;
      default: return true;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderUserTypeStep();
      case 1: return renderServicesStep();
      case 2: return renderBudgetStep();
      case 3: return renderPrioritiesStep();
      case 4: return renderFinalStep();
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Bem-vindo ao Bandel!</h1>
            <p className="text-slate-600">Vamos criar o plano perfeito para você em poucos minutos</p>
          </div>

          <Card className="p-6">
            {renderStepIndicator()}
            {renderCurrentStep()}
            
            {currentStep < 4 && (
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Voltar
                </Button>
                <Button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceed()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;