import React from 'react'

import { FaBalanceScale, FaHeart, FaGlobeAmericas } from 'react-icons/fa'
const WhyCheckSeguro = () => {
  return (
    <div className="flex flex-col gap-6 max-w-md w-full ">
          <h2 className="text-3xl font-bold text-black">Por que confiar na <span className="text-[#FFD700]">4S Seguro</span>?</h2>
          
          <div className="flex items-start gap-3">
            <FaBalanceScale className="text-[#FFD700] text-2xl mt-1" />
            <p className="text-lg">Experiência e credibilidade em benefícios e seguros pessoais.</p>
          </div>

          <div className="flex items-start gap-3">
            <FaHeart className="text-[#FFD700] text-2xl mt-1" />
            <p className="text-lg">Atendimento personalizado com análise gratuita.</p>
          </div>

          <div className="flex items-start gap-3">
            <FaGlobeAmericas className="text-[#FFD700] text-2xl mt-1" />
            <p className="text-lg">Variedade de opções para te ajudar a garantir seu direito.</p>
          </div>
        </div>
  )
}

export default WhyCheckSeguro