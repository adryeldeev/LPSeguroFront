import { MapPin, Truck, Clock } from "lucide-react";

export function Coverage() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-orange-500 uppercase tracking-wide">Atendimento</span>
              <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
                Atendemos Sua Região
              </h2>
              <p className="text-xl text-gray-400">
                Nossos tecidos alcançam confecções em todo o Brasil, com logística ágil e entrega garantida.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Cobertura Nacional</h3>
                  <p className="text-gray-400">Entregamos para todas as regiões do Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                  <Truck className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Logística Confiável</h3>
                  <p className="text-gray-400">Parceria com as melhores transportadoras</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Entrega Rápida</h3>
                  <p className="text-gray-400">Prazos competitivos e rastreamento em tempo real</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Mapa do Brasil simplificado */}
            <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700 flex items-center justify-center min-h-[400px]">
              <svg viewBox="0 0 400 500" className="w-full h-auto max-w-md text-orange-500/20 fill-current">
                <path d="M200,50 L250,70 L280,90 L300,120 L320,160 L330,200 L325,240 L310,280 L290,320 L270,360 L250,390 L220,420 L190,440 L160,450 L130,445 L100,430 L80,410 L70,380 L65,350 L60,310 L55,270 L50,230 L55,190 L65,150 L80,110 L100,80 L130,60 L160,50 Z" 
                      className="drop-shadow-lg" />
                <circle cx="200" cy="250" r="8" className="fill-orange-500 animate-pulse" />
                <text x="200" y="270" textAnchor="middle" className="fill-orange-400 text-xs">Atuação Nacional</text>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 px-6 py-3 rounded-lg shadow-lg">
              <div className="text-white text-center">
                <div className="text-2xl">100%</div>
                <div className="text-sm">Cobertura Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
