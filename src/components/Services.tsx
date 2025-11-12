import { Heart, Home, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";

const services = [

  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Auxílio para receber indenizações de seguros de vida por invalidez, doenças graves ou falecimento.",
    value: "Até R$ 500 mil",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Home,
    title: "RCF - Restituição do Custeio de Funeral",
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
    <section id="servicos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-wide">Nossas Especializações</span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
            Indenizações que Ajudamos a Receber
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Atuamos em diferentes tipos de indenizações, sempre priorizando seus direitos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl text-white">{service.title}</h3>
                      <span className="text-amber-400 text-sm px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 whitespace-nowrap">
                        {service.value}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 transition-colors duration-300 cursor-pointer" as="a" href={linkWhatsapp} target="_blank" rel="noopener noreferrer"
                    >
                      Saiba mais
                    </Button>
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
