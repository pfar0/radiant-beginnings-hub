import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-slate-900">
            Bandel
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
            Serviços
          </a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
            Planos
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
            Entrar
          </Button>
          <Button 
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Comece Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;