import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Tecidos de alta gramatura e resistência",
  "Variedade de cores e acabamentos",
  "Controle rigoroso de qualidade",
  "Fornecimento para grandes e pequenas confecções",
  "Assessoria técnica especializada",
  "Entrega rápida e confiável"
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659707751291-3f8666211d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjI0NTQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Produção JP Tecidos"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="text-orange-600 uppercase tracking-wide">Sobre Nós</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mt-2 mb-4">
                A JP Tecidos é especializada na fabricação de tecidos jeans
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de duas décadas de experiência no mercado têxtil, oferecemos produtos de primeira qualidade para confecções que exigem o melhor. Nossos tecidos são desenvolvidos com foco em resistência, durabilidade e acabamento impecável, atendendo às necessidades de nossos clientes.
              </p>
            </div>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
