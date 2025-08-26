const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Bandel</h3>
          <p className="text-slate-300 mb-6">
            Democratizando o acesso a serviços essenciais no Brasil
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-400">
            <span>contato@bandel.com.br</span>
            <span className="hidden sm:block">•</span>
            <span>São Paulo, Brasil</span>
            <span className="hidden sm:block">•</span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;