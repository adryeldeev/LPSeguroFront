import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappFloatButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá, gostaria de saber mais."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        p-4
        shadow-lg
        flex
        items-center
        justify-center
        z-50
        transition-colors
        duration-300
        cursor-pointer
        hover:animate-shake
      "
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsappFloatButton
