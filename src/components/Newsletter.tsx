import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  if (subscribed) {
    return (
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Obrigado por se inscrever!
            </h3>
            <p className="text-blue-100">
              Você receberá em breve novidades sobre o Bandel e promoções exclusivas.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Seja o Primeiro a Saber
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Receba novidades sobre novos serviços, promoções exclusivas e dicas para economizar ainda mais
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8"
            >
              Inscrever-se
            </Button>
          </form>
          
          <p className="text-sm text-blue-200 mt-4">
            Seus dados estão seguros. Não fazemos spam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;