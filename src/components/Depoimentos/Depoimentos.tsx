import React from 'react'


const Depoimentos = () => {
  return (
   <section className="bg-gray-50 py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        O que nossos clientes dizem
      </h2>
        <div className="max-w-9xl mx-auto flex  gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-600 text-sm mb-4">"Graças à 4S Seguro, consegui resolver meu caso de forma rápida e eficiente. O atendimento foi excelente!"</p>
            <p className="text-gray-800 font-semibold">João da Silva</p>
            </div>
    
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="text-gray-600 text-sm mb-4">"A equipe foi super atenciosa e me ajudou em todos os detalhes do processo. Recomendo!"</p>
            <p className="text-gray-800 font-semibold">Maria Oliveira</p>
            </div>
    
            <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm mb-4">"Excelente serviço! Me senti seguro e bem informado durante todo o processo."</p>
            <p className="text-gray-800 font-semibold">Carlos Pereira</p>
            </div>
        </div>
    </section>
  )
}

export default Depoimentos