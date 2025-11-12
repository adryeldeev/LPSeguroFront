import { FileText, MessageSquare, CheckCircle2, Shield } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Entre em contato",
    description: "Fale conosco através do formulário, WhatsApp ou telefone para um atendimento inicial gratuito."
  },
  {
    icon: FileText,
    number: "02",
    title: "Análise do caso",
    description: "Nossa equipe analisa sua situação e orienta sobre a indenização que você tem direito a receber."
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Documentação",
    description: "Auxiliamos na reunião e preparação de toda documentação necessária para o processo."
  },
  {
    icon: Shield,
    number: "04",
    title: "Recebimento",
    description: "Acompanhamos todo o processo até você receber sua indenização. Simples e sem burocracia."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-wide">Processo Simples</span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Do primeiro contato até o recebimento da sua indenização
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl h-full hover:border-amber-500/50 transition-all duration-300">
                  <div className="text-6xl text-amber-400/10 mb-4">{step.number}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 -mt-8 shadow-lg shadow-amber-500/20">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-amber-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
