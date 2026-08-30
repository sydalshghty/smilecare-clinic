import { FaWhatsapp } from "react-icons/fa";
function WhatsappBtn(){
    return(
        <a href="##" className="whatsapp-btn fixed bottom-20 lg:bottom-10 right-5 lg:right-10 bg-[#25D366] w-12 h-12 lg:w-15 lg:h-15 z-1 rounded-full flex justify-center items-center animate-bounce">
            <FaWhatsapp className="text-white text-2xl lg:text-4xl"/>
        </a>
    )
}
export default WhatsappBtn;