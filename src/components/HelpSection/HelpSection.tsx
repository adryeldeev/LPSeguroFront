import React from 'react'
import atendimento from '../../assets/atendimento.avif'

const HelpSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Imagem à esquerda */}
        <div className="w-full max-w-md">
          <img
            src={atendimento}
            alt="Atendimento ao cliente"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Texto à direita */}
        <div className="max-w-2xl">
         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
  Já ajudamos milhares de brasileiros a receberem o que é seu por direito.
</h2>

<p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
  Nossa equipe está pronta para te ajudar a entender seus direitos e garantir que você receba todos os benefícios a que tem direito. 
  Entre em contato conosco e descubra como podemos ajudar você e sua família.
</p>

<p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
  Se você tem dúvidas sobre benefícios, seguros ou qualquer outro assunto relacionado, nossa equipe de especialistas está aqui para ajudar. 
  Entre em contato conosco pelo WhatsApp e receba atendimento personalizado e rápido.
</p>
            
            <a
                href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá, gostaria de saber mais sobre os benefícios e seguros disponíveis."
                className="inline-block bg-[#D4AF37] text-white px-6 py-3 rounded-lg shadow hover:bg-[#b38f2c] transition-colors"
            >
                Fale conosco pelo WhatsApp
            </a>
        </div>
      </div>
    </section>
  )
}

export default HelpSection
