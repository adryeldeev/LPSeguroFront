import { Shield, Heart, Wallet, Clock, CheckCircle, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Atendimento especializado",
    description: "Equipe experiente em direito previdenciário e seguros para garantir seus direitos."
  },
  {
    icon: CheckCircle,
    title: "Alta taxa de sucesso",
    description: "98% de aprovação nos processos de RCF e concessão de benefícios."
  },
  {
    icon: Clock,
    title: "Agilidade no processo",
    description: "Acompanhamento completo do seu caso com atualizações constantes."
  },
  {
    icon: Heart,
    title: "Proteção familiar",
    description: "BPC LOAS e seguros que garantem tranquilidade para toda a família."
  },
  {
    icon: Wallet,
    title: "Sem custos escondidos",
    description: "Transparência total em todos os valores e serviços prestados."
  },
  {
    icon: Users,
    title: "Suporte completo",
    description: "Assessoria em todas as etapas do processo, da documentação à concessão."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Por que nos escolher?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise e dedicação para garantir seus benefícios e proteger sua família
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
