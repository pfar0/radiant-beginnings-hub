import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, Clock, Search, ChevronRight, HelpCircle, CheckCircle, Send } from "lucide-react";

const SupportSystem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [showChat, setShowChat] = useState(false);

  const faqCategories = [
    { id: "account", name: "Conta e Planos", count: 12 },
    { id: "services", name: "Serviços", count: 8 },
    { id: "payment", name: "Pagamento", count: 6 },
    { id: "app", name: "Uso do App", count: 10 },
    { id: "company", name: "Empresas", count: 5 }
  ];

  const faqItems = [
    {
      category: "account",
      question: "Como alterar meu plano?",
      answer: "Você pode alterar seu plano a qualquer momento através do app. Vá em Perfil > Configurações > Alterar Plano.",
      popular: true
    },
    {
      category: "account",
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Não há fidelidade. Você pode cancelar a qualquer momento sem taxa de cancelamento.",
      popular: true
    },
    {
      category: "services",
      question: "Como uso o desconto no Uber?",
      answer: "Abra o app Bandel, vá em Transportes e clique em 'Usar Crédito'. O desconto será aplicado automaticamente.",
      popular: true
    },
    {
      category: "payment",
      question: "Quais formas de pagamento aceitas?",
      answer: "Aceitamos cartão de crédito, PIX e boleto bancário. PIX tem 5% de desconto extra!",
      popular: false
    },
    {
      category: "app",
      question: "O app funciona offline?",
      answer: "Algumas funcionalidades básicas funcionam offline, mas para usar os serviços você precisa estar conectado.",
      popular: false
    },
    {
      category: "company",
      question: "Como implementar para minha empresa?",
      answer: "Entre em contato conosco pelo WhatsApp ou email. Nosso time comercial criará um plano personalizado.",
      popular: true
    }
  ];

  const supportChannels = [
    {
      name: "WhatsApp",
      description: "Resposta em até 5 minutos",
      icon: MessageCircle,
      available: true,
      hours: "24/7",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Chat ao Vivo",
      description: "Suporte instantâneo",
      icon: MessageCircle,
      available: true,
      hours: "7h às 22h",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Telefone",
      description: "(11) 4000-1234",
      icon: Phone,
      available: false,
      hours: "8h às 18h",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Email",
      description: "ajuda@bandel.com.br",
      icon: Mail,
      available: true,
      hours: "Resposta em 2h",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const chatHistory = [
    { type: "bot", message: "Olá! Como posso ajudá-lo hoje? 😊", time: "14:30" },
    { type: "user", message: "Não consigo usar meu crédito do Uber", time: "14:31" },
    { type: "bot", message: "Vou te ajudar com isso! Primeiro, verifique se você tem crédito disponível no app. Pode me confirmar?", time: "14:31" },
    { type: "user", message: "Sim, aparece R$ 80 disponível", time: "14:32" },
    { type: "bot", message: "Perfeito! Agora siga estes passos:\n1. Abra o app Bandel\n2. Vá em 'Transportes'\n3. Clique em 'Usar Crédito Uber'\n4. Será redirecionado para o Uber com o desconto aplicado", time: "14:32" }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesSearch = searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderFAQSection = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar por dúvidas..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("")}
              >
                Todas
              </Button>
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Items */}
      <div className="space-y-3">
        {filteredFAQ.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-slate-900">{item.question}</h4>
                    {item.popular && (
                      <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{item.answer}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFAQ.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-medium text-slate-900 mb-2">Nenhuma dúvida encontrada</h3>
            <p className="text-sm text-slate-600 mb-4">
              Não encontrou o que procurava? Nossa equipe pode ajudar!
            </p>
            <Button onClick={() => setShowChat(true)}>
              Falar com suporte
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderSupportChannels = () => (
    <div className="grid gap-4">
      {supportChannels.map((channel, index) => (
        <Card 
          key={index} 
          className={`cursor-pointer hover:shadow-md transition-all ${
            !channel.available ? "opacity-60" : ""
          }`}
          onClick={() => {
            if (channel.name === "Chat ao Vivo" && channel.available) {
              setShowChat(true);
            }
          }}
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${channel.color}`}>
                <channel.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-900">{channel.name}</h4>
                <p className="text-sm text-slate-600">{channel.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500">{channel.hours}</span>
                  {channel.available && (
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      Disponível
                    </Badge>
                  )}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderChat = () => (
    <Card className="h-96 flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Chat com Suporte</CardTitle>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-slate-600">Online</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        <div className="flex-1 space-y-3 overflow-y-auto mb-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg text-sm ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-900'
                }`}
              >
                <p className="whitespace-pre-line">{msg.message}</p>
                <div className={`text-xs mt-1 ${
                  msg.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Digite sua mensagem..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && setChatMessage('')}
          />
          <Button size="sm" onClick={() => setChatMessage('')}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Central de Ajuda</h2>
        <p className="text-slate-600">Estamos aqui para ajudar você! Resposta em menos de 5 minutos.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">&lt; 5min</div>
          <div className="text-sm text-green-700">Tempo de resposta</div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">98%</div>
          <div className="text-sm text-blue-700">Satisfação</div>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">24/7</div>
          <div className="text-sm text-purple-700">Disponibilidade</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900">Perguntas Frequentes</h3>
          {renderFAQSection()}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900">Canais de Suporte</h3>
          {!showChat ? renderSupportChannels() : renderChat()}
          
          {!showChat && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-medium text-blue-900 mb-2">💡 Dica de ouro!</h4>
                <p className="text-sm text-blue-800">
                  Para problemas técnicos, sempre inclua o modelo do seu celular e versão do app. 
                  Isso nos ajuda a resolver mais rápido!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportSystem;