import React from 'react'
import photo0 from '../../assets/depoimento0.avif'
import photo1 from '../../assets/depoimento1.jpg'
import photo2 from '../../assets/depoimento2.jpg'

const Depoimentos = () => {
  return (
   <section className=" py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        O que nossos clientes dizem
      </h2>
        <div className="max-w-9xl mx-auto flex flex-col md:flex-row gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-600 text-sm mb-4">"Graças à 4S Seguro, consegui resolver meu caso de forma rápida e eficiente. O atendimento foi excelente!"</p>
            <img src={photo0} alt="Depoimento de João da Silva" className="w-16 h-16 rounded-full mt-4 border-3 object-cover" />
            <p className="text-gray-800 font-semibold mt-5">João da Silva</p>
            </div>
    
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-600 text-sm mb-4">"A equipe foi super atenciosa e me ajudou em todos os detalhes do processo. Recomendo!"</p>
            <img src={photo1} alt="Depoimento de Maria Oliveira" className="w-16 h-16 rounded-full mt-4 border-3 object-cover" />
            <p className="text-gray-800 font-semibold  mt-5">Maria Oliveira</p>
            </div>
    
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-600 text-sm mb-4">"Excelente serviço! Me senti seguro e bem informado durante todo o processo."</p>
            <img src={photo2} alt="Depoimento de Carlos Pereira" className="w-16 h-16 rounded-full mt-4 border-3 object-cover" />
            <p className="text-gray-800 font-semibold mt-5">Carlos Pereira</p>
            </div>
        </div>
    </section>
  )
}

export default Depoimentos