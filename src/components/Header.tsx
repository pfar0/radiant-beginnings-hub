import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
            Bandel
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
            Sobre
          </a>
          <a href="/how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
            Como Funciona
          </a>
          <a href="/app-demo-advanced" className="text-slate-600 hover:text-slate-900 transition-colors">
            Demo App
          </a>
          <a href="/testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">
            Depoimentos
          </a>
          <a href="/faq" className="text-slate-600 hover:text-slate-900 transition-colors">
            FAQ
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
            Entrar
          </Button>
          <a href="/onboarding">
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Comece Agora
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;