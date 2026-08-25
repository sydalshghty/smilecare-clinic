import { href, Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import servicesIcon from "../assets/services-icon.svg";
import ordernowIcon from "../assets/order-now-icon.svg";
import aboutIcon from "../assets/about-icon.svg";
import contactIcon from "../assets/contact-icon.svg";
function MenuMobileBottom(){
    const menuLinks = [
        {id: 1, name: "الرئيسية", icon: homeIcon, href: "/"},
        {id: 2, name: "الخدمات", icon: servicesIcon, href: "/services"},
        {id: 3, name: "حجز موعد", icon: ordernowIcon, href: "/ordernow"},
        {id: 4, name: "عن العيادة", icon: aboutIcon, href: "/about"},
        {id: 5, name: "اتصل بنا", icon: contactIcon, href: "/contact"}
    ]
    return(
        <div className="menu-mobile-bottom w-full h-16 bg-white shadow fixed bottom-0 left-0 z-10">
            <div className="container w-full h-full">
                <ul className="w-full h-full flex flex-row-reverse justify-between items-center">
                    {menuLinks.map((link,index) => {
                        return(
                            <Link to={link.href} key={link.id} className="flex flex-col items-center">
                                <img src={link.icon} alt="icon" />
                                <p className="text-[12px] text-(--linkcolor)">{link.name}</p>
                            </Link>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )
}
export default MenuMobileBottom;