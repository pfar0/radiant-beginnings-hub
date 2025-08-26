import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Smartphone, Building2, Shield, CheckCircle, Lock, Gift, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentFlow = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [installments, setInstallments] = useState("1");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const planDetails = {
    name: "Plano Personalizado",
    originalPrice: 320,
    discount: 64, // 20% discount
    finalPrice: 256,
    services: [
      "Saúde completa",
      "Transporte urbano",
      "Alimentação",
      "Comunicação",
      "Entretenimento"
    ]
  };

  const paymentMethods = [
    {
      id: "credit",
      name: "Cartão de Crédito",
      icon: CreditCard,
      description: "Visa, Mastercard, Elo",
      installments: true
    },
    {
      id: "pix",
      name: "PIX",
      icon: Smartphone,
      description: "Pagamento instantâneo",
      installments: false,
      extraDiscount: 5
    },
    {
      id: "bank_slip",
      name: "Boleto Bancário",
      icon: Building2,
      description: "Vencimento em 3 dias úteis",
      installments: false
    }
  ];

  const installmentOptions = [
    { value: "1", label: "À vista", total: planDetails.finalPrice },
    { value: "2", label: "2x sem juros", total: planDetails.finalPrice },
    { value: "3", label: "3x sem juros", total: planDetails.finalPrice },
    { value: "6", label: "6x com juros", total: planDetails.finalPrice * 1.05 },
    { value: "12", label: "12x com juros", total: planDetails.finalPrice * 1.12 }
  ];

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "bemvindo" || couponCode.toLowerCase() === "primeirosdias") {
      setAppliedCoupon(true);
    }
  };

  const calculateFinalPrice = () => {
    let price = planDetails.finalPrice;
    if (paymentMethod === "pix") price *= 0.95; // 5% extra discount for PIX
    if (appliedCoupon) price *= 0.9; // 10% extra discount for coupon
    return price;
  };

  const getInstallmentValue = () => {
    const selectedOption = installmentOptions.find(opt => opt.value === installments);
    return selectedOption ? selectedOption.total / parseInt(installments) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Finalizar Assinatura</h1>
              <p className="text-slate-600">Última etapa para começar a economizar!</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    Forma de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-slate-50">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <method.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <Label htmlFor={method.id} className="font-medium cursor-pointer">
                                  {method.name}
                                </Label>
                                {method.extraDiscount && (
                                  <Badge className="bg-green-100 text-green-700 text-xs">
                                    -{method.extraDiscount}% extra
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-slate-600">{method.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Credit Card Form */}
                        {paymentMethod === "credit" && method.id === "credit" && (
                          <div className="ml-8 space-y-4 p-4 bg-slate-50 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="cardNumber">Número do Cartão</Label>
                                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                              </div>
                              <div>
                                <Label htmlFor="cardName">Nome no Cartão</Label>
                                <Input id="cardName" placeholder="Seu nome completo" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="expiry">Validade</Label>
                                <Input id="expiry" placeholder="MM/AA" />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                              </div>
                            </div>

                            {/* Installments */}
                            <div>
                              <Label>Parcelamento</Label>
                              <RadioGroup value={installments} onValueChange={setInstallments} className="mt-2">
                                {installmentOptions.map((option) => (
                                  <div key={option.value} className="flex items-center space-x-3">
                                    <RadioGroupItem value={option.value} id={option.value} />
                                    <Label htmlFor={option.value} className="flex-1 cursor-pointer text-sm">
                                      {option.label} de R$ {(option.total / parseInt(option.value)).toFixed(2)}
                                      {option.value === "1" && " (recomendado)"}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Coupon */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-purple-600" />
                    Cupom de Desconto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Digite seu cupom"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button 
                      variant="outline" 
                      onClick={applyCoupon}
                      disabled={appliedCoupon}
                    >
                      Aplicar
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Cupom aplicado! 10% de desconto extra
                    </div>
                  )}
                  <div className="mt-3 text-xs text-slate-500">
                    Experimente: <span className="font-mono bg-slate-100 px-1 rounded">BEMVINDO</span> ou{" "}
                    <span className="font-mono bg-slate-100 px-1 rounded">PRIMEIROSDIAS</span>
                  </div>
                </CardContent>
              </Card>

              {/* Terms */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="terms" 
                        checked={agreedToTerms}
                        onCheckedChange={setAgreedToTerms}
                      />
                      <div className="text-sm text-slate-700">
                        <Label htmlFor="terms" className="cursor-pointer">
                          Concordo com os{" "}
                          <a href="/terms" className="text-blue-600 hover:underline">
                            Termos de Uso
                          </a>{" "}
                          e{" "}
                          <a href="/privacy" className="text-blue-600 hover:underline">
                            Política de Privacidade
                          </a>
                        </Label>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800">
                        <span className="font-medium">🛡️ Garantia de 7 dias:</span> Teste sem risco! 
                        Se não gostar, devolvemos 100% do valor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">{planDetails.name}</h4>
                    <div className="text-sm text-slate-600 space-y-1">
                      {planDetails.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Valor original:</span>
                      <span className="line-through text-slate-500">R$ {planDetails.originalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto do pacote:</span>
                      <span>-R$ {planDetails.discount}</span>
                    </div>
                    {paymentMethod === "pix" && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Desconto PIX (5%):</span>
                        <span>-R$ {(planDetails.finalPrice * 0.05).toFixed(2)}</span>
                      </div>
                    )}
                    {appliedCoupon && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Cupom de desconto:</span>
                        <span>-R$ {(calculateFinalPrice() / 0.9 * 0.1).toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total:</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          R$ {calculateFinalPrice().toFixed(2)}
                        </div>
                        {paymentMethod === "credit" && installments !== "1" && (
                          <div className="text-sm text-slate-600">
                            {installments}x de R$ {getInstallmentValue().toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={!agreedToTerms}
                    onClick={() => {
                      // Here would integrate with Stripe
                      alert("Pagamento processado com sucesso! Bem-vindo ao Bandel!");
                      navigate("/app-demo");
                    }}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Finalizar Pagamento
                  </Button>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                      <Shield className="w-3 h-3" />
                      Pagamento 100% seguro
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits Reminder */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Você vai economizar:</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <div>• Até R$ 400/mês em serviços</div>
                    <div>• Acesso prioritário</div>
                    <div>• Suporte 24/7</div>
                    <div>• Primeira semana grátis</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlow;