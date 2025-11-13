import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "../assets/3fa5664101234200a05c93ec9bc86e1363454e41.png";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoImage} alt="QU4TROS" className="h-12 mb-4" />
            <p className="text-sm mb-4 text-gray-400">
              Especialistas em ajudar você a receber indenizações de seguros. Processo simples, transparente e sem burocracia.
            </p>
            <div className="flex gap-4">
              
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-amber-400 transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Seguro de Vida</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">RCF</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">BPC LOAS</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Incapacidade Temporária</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:4sseguroacidentes@gmail.com" className="hover:text-amber-400 transition-colors">
                  4sseguroacidentes@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+5585997712348" className="hover:text-amber-400 transition-colors">
                  (85)99771-2348
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Atendemos todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 4S SEGUROS ACIDENTES. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-amber-400 transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
