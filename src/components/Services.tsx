import { Heart, Home, Clock, Shield } from "lucide-react";

const services = [

  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Auxílio para receber indenizações de seguros de vida por invalidez, doenças graves ou falecimento.",
    value: "Até R$ 300 mil",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Home,
    title: "RCF",
    description: "Reembolso das despesas com funeral de segurado falecido. Processo rápido e desburocratizado.",
    value: "Até R$ 15 mil",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Heart,
    title: "BPC LOAS",
    description: "Benefício de Prestação Continuada para idosos e pessoas com deficiência de baixa renda.",
    value: "1 salário mínimo",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "Incapacidade Temporária",
    description: "Auxílio por incapacidade temporária para trabalhar devido a acidentes ou doenças.",
    value: "Até R$ 100 mil",
    color: "from-amber-500 to-amber-600"
  }
];

export function Services() {
  const numberWhatsapp = +5585997712348;
  const linkWhatsapp = `https://wa.me/${numberWhatsapp}`;
  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-amber-400 uppercase tracking-wide text-xs sm:text-sm md:text-base">Nossas Especializações</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-2 sm:mb-3 md:mb-4 px-2">
            Indenizações que Ajudamos a Receber
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Atuamos em diferentes tipos de indenizações, sempre priorizando seus direitos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group "
              >
                <div className="flex items-start gap-4 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0 h-full">
                    <div className="flex items-start justify-between gap-0 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-tight">{service.title}</h3>
                      <span className="min-w-[110px] sm:min-w-[120px] md:min-w-[130px] text-center text-amber-400 text-xs sm:text-sm px-3 py-1 md:px-4 md:py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20 whitespace-nowrap flex-shrink-0">
                        {service.value}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                    
                    <a 
                      href={linkWhatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium transition-colors border border-gray-700 text-gray-300 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 h-8 sm:h-9 px-3 sm:px-4 "
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
