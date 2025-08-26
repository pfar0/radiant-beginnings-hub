import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a assinatura do Bandel?",
      answer: "A assinatura do Bandel é mensal e dá acesso a todos os serviços integrados. Você paga uma única taxa e pode usar saúde, transporte, alimentação, comunicação, entretenimento, academias e educação conforme sua necessidade."
    },
    {
      question: "Posso cancelar a assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais. O cancelamento pode ser feito pelo app ou entrando em contato com nosso suporte."
    },
    {
      question: "Como funciona o atendimento médico?",
      answer: "Temos uma rede de clínicas e hospitais parceiros, além de telemedicina 24/7. Você pode agendar consultas pelo app ou usar o atendimento online para casos menos complexos."
    },
    {
      question: "O transporte inclui qual tipo de veículo?",
      answer: "Inclui vouchers para transporte público, créditos em apps de carona (Uber, 99) e parcerias com empresas de mobilidade urbana como bikes e patinetes."
    },
    {
      question: "Quantas pessoas da minha família podem usar?",
      answer: "O plano individual cobre apenas o titular. Para famílias, oferecemos planos familiares com desconto progressivo conforme o número de membros."
    },
    {
      question: "Onde posso usar os serviços?",
      answer: "Inicialmente estamos disponíveis em São Paulo, Rio de Janeiro e Belo Horizonte. A expansão para outras capitais está prevista para 2024."
    },
    {
      question: "Como funciona o desconto em alimentação?",
      answer: "Temos parcerias com redes de supermercados, restaurantes e delivery. Você recebe descontos especiais e vouchers mensais para refeições."
    },
    {
      question: "O que acontece se eu não usar algum serviço no mês?",
      answer: "Não tem problema! Você paga o mesmo valor e pode usar os serviços conforme sua necessidade. Alguns benefícios podem ser acumulados para o mês seguinte."
    },
    {
      question: "Como posso acompanhar meus gastos e uso?",
      answer: "O app possui um dashboard completo onde você pode ver todos os serviços utilizados, economia gerada e histórico de uso."
    },
    {
      question: "Vocês oferecem período de teste gratuito?",
      answer: "Sim! Oferecemos 15 dias gratuitos para novos usuários testarem todos os serviços antes de decidir pela assinatura."
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
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Encontre respostas para as dúvidas mais comuns sobre o Bandel
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Nossa equipe está pronta para ajudar você
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  Falar com Suporte
                </button>
                <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium">
                  Enviar Email
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;