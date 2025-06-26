import { useState } from "react";
import usePublicApi from "../../Api/Api";
import { AxiosResponse } from "axios";
function LeadForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tipoAcidente: "",
    cidade: "",
    dataAcidente: "",
  });
  const api = usePublicApi();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, telefone, tipoAcidente, cidade, dataAcidente } = formData;
    if (!nome || !telefone || !tipoAcidente || !cidade || !dataAcidente) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
const response = api.post("/lead", {
  nome,
  telefone,
  tipoAcidente,
  cidade,
  dataAcidente,
});

response
  .then((res: AxiosResponse) => {
    setIsSubmitting(false);
    if (res.status === 201) {
      setMessage("Formulário enviado com sucesso!");
      setFormData({
        nome: "",
        telefone: "",
        tipoAcidente: "",
        cidade: "",
        dataAcidente: "",
      });
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else {
      setError("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  })
  .catch((err: unknown) => {
    console.error("Erro na resposta da API:", err);
    setError("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
    setIsSubmitting(false);
  });
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
      setError("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
      setIsSubmitting(false);
    }
  };        

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-start gap-10 xl:pl-40">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Faça uma análise gratuita do seu caso</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.nome} // Adicione esta linha
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone whatsapp com DDD"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.telefone} // Adicione esta linha
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.cidade} // Adicione esta linha
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="tipoAcidente"
              placeholder="Descreva o tipo de acidente"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.tipoAcidente} // Adicione esta linha
              onChange={handleChange}
              required
            />
            <label className="block text-gray-700 font-medium">
              Data do acidente
            </label>
            <input
              type="date"
              name="dataAcidente"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              value={formData.dataAcidente} // Adicione esta linha
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#D4AF37] text-white w-full py-3 rounded-md font-bold hover:bg-[#b3942a] transition"
              disabled={isSubmitting} // Desabilita o botão enquanto envia
            >
              {isSubmitting ? "Enviando..." : "ANALISAR GRATUITAMENTE"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-500">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
export default LeadForm;