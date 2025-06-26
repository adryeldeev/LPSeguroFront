import React from 'react'
import { FaBalanceScale, FaHeart, FaGlobeAmericas } from 'react-icons/fa'

const WhyCheckSeguro = () => {
  return (
    <div className="flex flex-col gap-6 max-w-md w-full">
      {/* Título: maior no desktop, menor no mobile */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black text-center">
  Por que confiar na <span className="text-[#FFD700]">4S Seguro</span>?
</h2>

      {/* Itens: texto menor no mobile */}
      <div className="flex items-start gap-3">
        <FaBalanceScale className="text-[#FFD700] text-xl" />
        <p className="text-sm sm:text-base md:text-lg">
          Experiência e credibilidade em benefícios  e seguros pessoais.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <FaHeart className="text-[#FFD700] text-xl sm:text-2xl mt-1" />
        <p className="text-sm sm:text-base md:text-lg">
          Atendimento personalizado com análise gratuita.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <FaGlobeAmericas className="text-[#FFD700] text-xl sm:text-2xl mt-1" />
        <p className="text-sm sm:text-base md:text-lg">
          Variedade de opções para te ajudar a garantir seu direito.
        </p>
      </div>
    </div>
  )
}

export default WhyCheckSeguro
