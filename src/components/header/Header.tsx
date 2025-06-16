import photo from '../../assets/family.jpg'


function Header() {
  return (
    <div className="bg-black text-white py-14 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-10 relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-3xl font-bold mb-6 leading-snug">
            Muitos brasileiros têm direito a benefícios e seguros e não sabem. <br />
          </h1>
          <p className="text-4xl md:text-2xl font-bold mb-6 leading-snug">
            Faça sua análise gratuita com a{' '}
            <span className="text-[#FFD700] font-bold">4S Seguro</span>.
          </p>
        </div>
        <div>
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
