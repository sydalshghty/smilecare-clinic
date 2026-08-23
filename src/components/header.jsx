import { href, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import logoClinic from "../assets/logo-clinic.svg";
import { useState } from "react";
function Header(){
    const menuLinks = [
        {id: 1, link: "الرئيسية", href: "/"},
        {id: 2, link: "خدماتنا", href: "#"},
        {id: 3, link: "عن العيادة", href: "#"},
        {id: 4, link: "اتصل بنا", href: "#"}
    ]
    return(
        <header className="w-full h-20 bg-(--bg1) sticky top-0 left-0">
            <div className="container w-full h-full flex justify-between items-center flex-row-reverse">
                <Link to={"/"} className="col-logo">
                    <img src={logoClinic} alt="logo" className="w-full h-full object-contain"/>
                </Link>
                <ul className="flex gap-8 flex-row-reverse">
                    {menuLinks.map((link,index) => {
                        return(
                            <li key={link.id}>
                                <Link to={link.href} className={`text-[16px] text-[#42474F]`}>{link.link}</Link>
                            </li>
                        )
                    })}
                    
                </ul>
                <div className="order-now flex gap-6 flex-row-reverse items-center">
                    <Link to={"##"} className="w-35 h-11 bg-(--textcolor1) rounded-xl text-white text-[14px] flex justify-center items-center ">احجز موعدك الآن</Link>
                    <div className="col-user w-8 h-8 rounded-full bg-(--textcolor1) flex justify-center items-center">
                        <FaRegUser className="text-white"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;