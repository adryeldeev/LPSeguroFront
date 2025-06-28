import { jsx as _jsx } from "react/jsx-runtime";
import { FaWhatsapp } from 'react-icons/fa';
const WhatsappFloatButton = () => {
    return (_jsx("a", { href: "https://api.whatsapp.com/send?phone=558597712348&text=Ol\u00E1, gostaria de saber mais.", target: "_blank", rel: "noopener noreferrer", className: "\r\n        fixed\r\n        bottom-6\r\n        right-6\r\n        bg-green-500\r\n        hover:bg-green-600\r\n        text-white\r\n        rounded-full\r\n        p-4\r\n        shadow-lg\r\n        flex\r\n        items-center\r\n        justify-center\r\n        z-50\r\n        transition-colors\r\n        duration-300\r\n        cursor-pointer\r\n        hover:animate-shake\r\n      ", "aria-label": "Fale conosco no WhatsApp", children: _jsx(FaWhatsapp, { size: 28 }) }));
};
export default WhatsappFloatButton;
