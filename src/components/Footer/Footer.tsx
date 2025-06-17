import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} 4S Seguro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
