import { Phone, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
   const numberWhatsapp = +5585997712348;
  const linkWhatsapp = `https://wa.me/${numberWhatsapp}`;
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYyNDI0MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Família Feliz"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <span className="text-amber-400 uppercase tracking-wide">Comece Agora</span>
              <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
                Você Pode Ter Direito a uma Indenização
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Não deixe seu dinheiro parado. Faça uma avaliação gratuita e descubra se você tem direito a receber alguma indenização.
              </p>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <span className="text-amber-400 text-xs">✓</span>
                </div>
                <span>Análise 100% gratuita do seu caso</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <span className="text-amber-400 text-xs">✓</span>
                </div>
                <span>Sem custos antecipados - você só paga se receber</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                  <span className="text-amber-400 text-xs">✓</span>
                </div>
                <span>Atendimento humanizado e personalizado</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={linkWhatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-14 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-lg shadow-amber-500/25 h-11 px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
              <a 
                href={`tel:${numberWhatsapp}`}
                className="w-full h-14 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 bg-transparent h-11 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </a>
            </div>
            
            <p className="text-sm text-gray-500 pt-2">
              Atendemos todo o Brasil • Mais de 2.000 casos resolvidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
