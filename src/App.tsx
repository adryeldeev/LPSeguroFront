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
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-center gap-10"> 
          <div className="w-full mt-[-110px] sm:mt-[-130px] md:mt-[-90px] relative z-20">
            <LeadForm />
          </div>
          <div className="w-full max-w-lg"> 
            <WhyCheckSeguro/>
          </div>
        </div>
         <Depoimentos /> 
        <Benefits />
        <HelpSection />
        <Faq />
        <Footer />
        <WhatsappFloatButton />
      </div>
    </>
  );
}

export default App;