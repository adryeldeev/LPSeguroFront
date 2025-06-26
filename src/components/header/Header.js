import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import photo from '../../assets/family.jpg';
import logo from '../../assets/Logo.png';
function Header() {
    return (_jsx("div", { className: "bg-black text-white py-10 relative", children: _jsxs("div", { className: "container mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-10 relative z-10", children: [_jsxs("div", { className: "max-w-2xl text-center md:text-left", children: [_jsx("img", { src: logo, alt: "Logo 4S Seguro", className: "w-48 mx-auto md:mx-0 mb-6" }), _jsxs("h1", { className: "text-3xl sm:text-xl md:text-4xl m-1 font-bold leading-snug", children: ["Muitos brasileiros t\u00EAm direito a benef\u00EDcios e seguros e n\u00E3o sabem. ", _jsx("br", {})] }), _jsxs("p", { className: "text-base sm:text-xl md:text-2xl font-bold m-1 mb-6 leading-snug", children: ["Fa\u00E7a sua an\u00E1lise gratuita com a", ' ', _jsx("span", { className: "text-[#FFD700] font-bold", children: "4S Seguro" }), "."] })] }), _jsx("div", { className: "hidden md:block", children: _jsx("img", { src: photo, alt: "Fam\u00EDlia andando de m\u00E3os dadas", className: "w-full max-w-md border-3 rounded-lg shadow-lg object-cover" }) })] }) }));
}
export default Header;
