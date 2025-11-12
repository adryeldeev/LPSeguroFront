import depoimento1 from '../assets/depoimento1.png';
import depoimento2 from '../assets/depoimento2.png';
import depoimento3 from '../assets/depoimento3.png';
import depoimento4 from '../assets/depoimento4.png';
import provaSocial1 from '../assets/provaSocial1.jpg';
import provaSocial2 from '../assets/provaSocial2.jpg';
import provaSocial3 from '../assets/provaSocial3.jpg';

const reviewCards = [
  {
    image: depoimento1,
  },
  {
    image: depoimento2,
  },
  {
    image: depoimento3,
  },
  {
    image: depoimento4,
  }
];

const socialProofPhotos = [
  {
    image: provaSocial1,
    alt: "Cliente assinando contrato"
  },
  {
    image: provaSocial2,
    alt: "Cliente feliz com seguro"
  },
  {
    image: provaSocial3,
    alt: "Atendimento personalizado"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-wide">Casos de Sucesso</span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
            Histórias Reais de Quem Recebeu
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nosso trabalho
          </p>
        </div>
        
        {/* Cards de Depoimentos - Topo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviewCards.map((card, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={card.image}
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Fotos de Prova Social - Embaixo */}
        <div>
          <h3 className="text-2xl md:text-3xl text-white text-center mb-8">
            Nossos Clientes em Ação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialProofPhotos.map((photo, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
