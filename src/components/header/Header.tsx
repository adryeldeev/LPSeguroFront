import photo from '../../assets/family.jpg'
import logo from '../../assets/Logo.png'

function Header() {
  return (
    <div className="bg-black text-white py-10 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-10 relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          <img
            src={logo}
            alt="Logo 4S Seguro"
            className="w-48 mx-auto md:mx-0 mb-6"
          />
          <h1 className="text-3xl sm:text-xl md:text-4xl m-1 font-bold leading-snug">
            Muitos brasileiros têm direito a benefícios e seguros e não sabem. <br />
          </h1>
         <p className="text-base sm:text-xl md:text-2xl font-bold m-1 mb-6 leading-snug">
            Faça sua análise gratuita com a{' '}
            <span className="text-[#FFD700] font-bold">4S Seguro</span>.
          </p>
        </div>

        {/* Imagem visível apenas em telas md para cima */}
        <div className="hidden md:block">
          <img
            src={photo}
            alt="Família andando de mãos dadas"
            className="w-full max-w-md border-3 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
