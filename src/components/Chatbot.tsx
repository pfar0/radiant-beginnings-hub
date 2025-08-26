import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Olá! Sou a assistente virtual do Bandel. Como posso ajudar você hoje?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickReplies = [
    "Como funciona o Bandel?",
    "Quanto custa a assinatura?",
    "Quais serviços estão inclusos?",
    "Como faço para cancelar?"
  ];

  const botResponses: { [key: string]: string } = {
    "como funciona": "O Bandel é uma assinatura mensal que dá acesso a 8 serviços essenciais: saúde, transporte, alimentação, comunicação, entretenimento, academias, educação e dental. Você paga uma única taxa e usa conforme sua necessidade!",
    "quanto custa": "Temos planos a partir de R$ 50/mês para pessoas físicas, R$ 70/funcionário/mês para empresas e planos personalizados para governo/ONGs. Oferecemos 15 dias grátis para você testar!",
    "serviços": "Incluímos: 🏥 Saúde (consultas e telemedicina), 🚗 Transporte (vouchers e créditos), 🛒 Alimentação (descontos e vouchers), 📱 Comunicação (plano celular), 🎬 Entretenimento (Netflix, Spotify), 💪 Academias, 🎓 Educação e 🦷 Dental.",
    "cancelar": "Você pode cancelar a qualquer momento pelo app ou entrando em contato conosco. Não cobramos multa ou taxa de cancelamento. É simples e rápido!"
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        type: "user",
        text: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Simple bot response logic
      setTimeout(() => {
        const lowerInput = inputMessage.toLowerCase();
        let botResponse = "Obrigada pela sua pergunta! Para respostas mais detalhadas, recomendo falar com nosso suporte humano ou acessar nossa página de FAQ.";
        
        for (const [key, response] of Object.entries(botResponses)) {
          if (lowerInput.includes(key)) {
            botResponse = response;
            break;
          }
        }
        
        const botMessage = {
          type: "bot",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
      
      setInputMessage("");
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-2xl">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Assistente Bandel</CardTitle>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-blue-700 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Online agora
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex flex-col h-80">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-900'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-200' : 'text-slate-500'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t">
              <div className="space-y-2">
                <p className="text-xs text-slate-600 mb-2">Perguntas frequentes:</p>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left text-sm text-blue-600 hover:bg-blue-50 p-2 rounded border border-blue-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;