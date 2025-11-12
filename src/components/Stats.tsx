import { TrendingUp, Users, DollarSign, Award } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "R$ 50M+",
    label: "em indenizações recuperadas"
  },
  {
    icon: Users,
    value: "+5.000",
    label: "clientes atendidos"
  },
  {
    icon: Award,
    value: "95%",
    label: "taxa de sucesso"
  },
  {
    icon: TrendingUp,
    value: "+15 anos",
    label: "de experiência"
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg mb-4 border border-amber-500/30">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-3xl md:text-4xl text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
