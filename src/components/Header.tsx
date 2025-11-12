import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "figma:asset/3fa5664101234200a05c93ec9bc86e1363454e41.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const numberWhatsapp = +5585997712348;
  const linkWhatsapp = `https://wa.me/${numberWhatsapp}`;

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src={logoImage} alt="QU4TROS" className="h-12" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-300 hover:text-amber-400 transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-gray-300 hover:text-amber-400 transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="text-gray-300 hover:text-amber-400 transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-amber-400 transition-colors">
              Depoimentos
            </a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black" as="a" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
              Avaliação Gratuita
            </Button>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-gray-300 hover:text-amber-400 transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-gray-300 hover:text-amber-400 transition-colors">
                Serviços
              </a>
              <a href="#como-funciona" className="text-gray-300 hover:text-amber-400 transition-colors">
                Como Funciona
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-amber-400 transition-colors">
                Depoimentos
              </a>
              <div className="pt-4 border-t border- gray-800">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black" as="a" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                  Avaliação Gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
