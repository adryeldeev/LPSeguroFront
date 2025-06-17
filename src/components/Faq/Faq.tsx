import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quem pode contratar esses seguros?",
    answer:
      "Qualquer pessoa maior de 18 anos pode contratar. Temos planos para autônomos, profissionais CLT, MEIs e até aposentados.",
  },
  {
    question: "Sou jovem, vale a pena contratar seguro de vida?",
    answer:
      "Sim! Quanto mais cedo você contrata, menores são os custos. Além disso, você garante proteção desde já para você e sua família.",
  },
  {
    question: "Preciso comprovar renda ou fazer exames?",
    answer:
      "Depende do plano, mas a maioria das opções não exige exames médicos. Tudo é explicado no atendimento inicial.",
  },
  {
    question: "O que é o seguro previdenciário?",
    answer:
      "É um complemento da aposentadoria oficial. Ele garante renda extra na sua aposentadoria, com contribuições flexíveis.",
  },
  {
    question: "O que cobre o seguro RCF?",
    answer:
      "Cobre danos que você pode causar a terceiros no trânsito — como colisões, danos materiais ou corporais.",
  },
  {
    question: "É possível contratar tudo online?",
    answer:
      "Sim, todo o processo é feito online com suporte via WhatsApp. Rápido, fácil e sem burocracia.",
  },
  {
    question: "Tenho nome sujo, posso contratar?",
    answer:
      "Pode sim! O seguro não exige análise de crédito e está disponível para todos que desejam proteção.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        Tá com dúvidas? 
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
              onClick={() => toggleIndex(index)}
            >
              {item.question}
              {openIndex === index ? (
                <FaMinus className="text-[#D4AF37]" />
              ) : (
                <FaPlus className="text-[#D4AF37]" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
