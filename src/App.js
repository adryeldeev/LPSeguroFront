import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Benefits from "./components/Benefits/Benefits";
import Faq from "./components/Faq/Faq";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import LeadForm from "./components/FormAnalysis/LeadForm";
import Header from "./components/header/Header";
import HelpSection from "./components/HelpSection/HelpSection";
import WhyCheckSeguro from "./components/WhyCheck/WhyCheckSeguro"; // Mantenha a importação aqui!
import Footer from "./components/Footer/Footer";
import WhatsappFloatButton from "./components/ButtoWhatsapp/ButtoWhatsapp";
function App() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(Header, {}), _jsxs("div", { className: "container mx-auto px-4 flex flex-col md:flex-row items-start justify-center gap-10", children: [_jsx("div", { className: "w-full mt-[-110px] sm:mt-[-130px] md:mt-[-90px] relative z-20", children: _jsx(LeadForm, {}) }), _jsx("div", { className: "w-full max-w-lg", children: _jsx(WhyCheckSeguro, {}) })] }), _jsx(Depoimentos, {}), _jsx(Benefits, {}), _jsx(HelpSection, {}), _jsx(Faq, {}), _jsx(Footer, {}), _jsx(WhatsappFloatButton, {})] }) }));
}
export default App;
