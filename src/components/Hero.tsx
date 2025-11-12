import { Button } from "./ui/button";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const numberWhatsapp = +5585997712348;
  const linkWhatsapp = `https://wa.me/${numberWhatsapp}`;
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full border border-amber-500/30">
              <Shield className="w-4 h-4" />
              <span>Especialistas em Indenizações</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              Receba a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Indenização</span> que Você Tem Direito
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Ajudamos você a receber indenizações de seguros como RCF, BPC LOAS, Incapacidade Temporária e Seguro de Vida. Processo simples, rápido e sem burocracia.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Avaliação gratuita do seu caso</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Acompanhamento completo até o recebimento</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Sem custos antecipados</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-lg shadow-amber-500/25" as="a" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                Solicitar Avaliação Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500" as="a" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjIzOTk5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="QU4TROS Seguros"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl text-black">+95%</div>
                <div className="text-sm text-black/80">Taxa de sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
