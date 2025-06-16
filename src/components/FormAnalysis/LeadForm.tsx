import { useState } from "react";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    telefone: "",
    cidade: "",
    dataAcidente: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando:", formData);
    // Aqui você envia para API ou backend
  };

  return (
   
    <section className=" py-16"> 
    
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-start gap-10 xl:pl-40"> 

        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Faça uma análise gratuita do seu caso</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone com WhatsApp"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dataAcidente"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#D4AF37] text-white w-full py-3 rounded-md font-bold hover:bg-[#b3942a] transition"
            >
              ANALISAR GRATUITAMENTE
            </button>
          </form>
        </div>

       
      </div>
    </section>
  );
}
export default LeadForm;