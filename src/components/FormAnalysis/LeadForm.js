import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import usePublicApi from "../../Api/Api";
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
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
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
                .then((res) => {
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
                }
                else {
                    setError("Ocorreu um erro ao enviar o formulário. Tente novamente.");
                }
            })
                .catch((err) => {
                console.error("Erro na resposta da API:", err);
                setError("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
                setIsSubmitting(false);
            });
        }
        catch (err) {
            console.error("Erro ao enviar o formulário:", err);
            setError("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
            setIsSubmitting(false);
        }
    };
    return (_jsx("section", { className: " py-16", children: _jsx("div", { className: "container mx-auto px-4 flex flex-col md:flex-row items-start justify-start gap-10 xl:pl-40", children: _jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 w-full max-w-md", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-black", children: "Fa\u00E7a uma an\u00E1lise gratuita do seu caso" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", name: "nome", placeholder: "Nome completo", className: "w-full p-3 border border-gray-300 rounded-md", value: formData.nome, onChange: handleChange, required: true }), _jsx("input", { type: "tel", name: "telefone", placeholder: "Telefone whatsapp com DDD", className: "w-full p-3 border border-gray-300 rounded-md", value: formData.telefone, onChange: handleChange, required: true }), _jsx("input", { type: "text", name: "cidade", placeholder: "Cidade", className: "w-full p-3 border border-gray-300 rounded-md", value: formData.cidade, onChange: handleChange, required: true }), _jsx("input", { type: "text", name: "tipoAcidente", placeholder: "Descreva o tipo de acidente", className: "w-full p-3 border border-gray-300 rounded-md", value: formData.tipoAcidente, onChange: handleChange, required: true }), _jsx("label", { className: "block text-gray-700 font-medium", children: "Data do acidente" }), _jsx("input", { type: "date", name: "dataAcidente", className: "w-full p-3 border border-gray-300 rounded-md text-black", value: formData.dataAcidente, onChange: handleChange, required: true }), _jsx("button", { type: "submit", className: "bg-[#D4AF37] text-white w-full py-3 rounded-md font-bold hover:bg-[#b3942a] transition", disabled: isSubmitting, children: isSubmitting ? "Enviando..." : "ANALISAR GRATUITAMENTE" }), error && _jsx("p", { className: "text-red-500", children: error }), message && _jsx("p", { className: "text-green-500", children: message })] })] }) }) }));
}
export default LeadForm;
