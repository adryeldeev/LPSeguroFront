import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const faqData = [
    {
        question: "Quem pode contratar esses seguros?",
        answer: "Qualquer pessoa maior de 18 anos pode contratar. Temos planos para autônomos, profissionais CLT, MEIs e até aposentados.",
    },
    {
        question: "Sou jovem, vale a pena contratar seguro de vida?",
        answer: "Sim! Quanto mais cedo você contrata, menores são os custos. Além disso, você garante proteção desde já para você e sua família.",
    },
    {
        question: "Preciso comprovar renda ou fazer exames?",
        answer: "Depende do plano, mas a maioria das opções não exige exames médicos. Tudo é explicado no atendimento inicial.",
    },
    {
        question: "O que é o seguro previdenciário?",
        answer: "É um complemento da aposentadoria oficial. Ele garante renda extra na sua aposentadoria, com contribuições flexíveis.",
    },
    {
        question: "O que cobre o seguro RCF?",
        answer: "Cobre danos que você pode causar a terceiros no trânsito — como colisões, danos materiais ou corporais.",
    },
    {
        question: "É possível contratar tudo online?",
        answer: "Sim, todo o processo é feito online com suporte via WhatsApp. Rápido, fácil e sem burocracia.",
    },
    {
        question: "Tenho nome sujo, posso contratar?",
        answer: "Pode sim! O seguro não exige análise de crédito e está disponível para todos que desejam proteção.",
    },
];
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    return (_jsxs("section", { className: "bg-white py-12 px-4 md:px-16", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10", children: "T\u00E1 com d\u00FAvidas?" }), _jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqData.map((item, index) => (_jsxs("div", { className: "border border-gray-200 rounded-lg shadow-sm", children: [_jsxs("button", { className: "w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition", onClick: () => toggleIndex(index), children: [item.question, openIndex === index ? (_jsx(FaMinus, { className: "text-[#D4AF37]" })) : (_jsx(FaPlus, { className: "text-[#D4AF37]" }))] }), openIndex === index && (_jsx("div", { className: "px-4 pb-4 text-sm text-gray-600", children: item.answer }))] }, index))) })] }));
};
export default Faq;
