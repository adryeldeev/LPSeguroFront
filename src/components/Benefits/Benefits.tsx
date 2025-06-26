import React from "react";
import { FaHandsHelping, FaWhatsapp, FaFileAlt, FaClipboardList, FaUsers, FaShieldAlt } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="bg-black py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
        Benefícios
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 1 - Acompanhamento gratuito */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <FaHandsHelping className="text-[#D4AF37] text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Acompanhamento gratuito</h3>
          <p className="text-gray-600 text-sm">Tenha suporte de especialistas do início ao fim, sem custos adicionais.</p>
        </div>

        {/* 2 - Atendimento online */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <FaWhatsapp className="text-[#D4AF37] text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Atendimento 100% online</h3>
          <p className="text-gray-600 text-sm">Receba atendimento via WhatsApp com praticidade e rapidez.</p>
        </div>

        {/* 3 - Sem burocracia */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <FaFileAlt className="text-[#D4AF37] text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Sem burocracia</h3>
          <p className="text-gray-600 text-sm">Contratação fácil e rápida, sem papelada ou perda de tempo.</p>
        </div>

        {/* 4 - Planos personalizados */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <FaClipboardList className="text-[#D4AF37] text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Planos personalizados</h3>
          <p className="text-gray-600 text-sm">Soluções adaptadas à sua realidade, com o melhor custo-benefício.</p>
        </div>

        {/* 5 - Proteção para a família */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <FaUsers className="text-[#D4AF37] text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Proteção para sua família</h3>
          <p className="text-gray-600 text-sm">Segurança e tranquilidade para você e quem você ama.</p>
        </div>

        {/* 6 - Credibilidade e confiança */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <FaShieldAlt className="text-[#D4AF37] text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Credibilidade e confiança</h3>
          <p className="text-gray-600 text-sm">Milhares de brasileiros já confiaram em nossos serviços.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
