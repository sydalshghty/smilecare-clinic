import { Link, NavLink } from "react-router-dom";
import { FaRegUser, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logoClinic from "../assets/logo-clinic.svg";
import doctorImg from "../assets/doctor-img.svg";
import iconDentist from "../assets/icon-dentist.svg";
import imgUserDoctor from "../assets/User Profile-doctor.png";
import homeIcon from "../assets/home-icon.svg";
import servicesIcon from "../assets/services-icon.svg";
import aboutIcon from "../assets/about-icon.svg";
import contactIcon from "../assets/contact-icon.svg";
import rightIcon from "../assets/right-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate("");
    const menuLinks = [
        { id: 1, link: "الرئيسية", icon: homeIcon, href: "/" },
        { id: 2, link: "عن العيادة", icon: aboutIcon, href: "/about" },
        { id: 3, link: "اتصل بنا", icon: contactIcon, href: "/contact" }
    ]
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(1);

    return (
        <>
            <header className="w-full h-20 bg-(--bg1) sticky top-0 left-0">
                <div className="container w-full h-full flex justify-between items-center flex-row-reverse">
                    <div className="col-bars cursor-pointer" onClick={() => {
                        setShowMenu(!showMenu);
                    }}>
                        <FaBars className="text-xl text-(--textcolor1)" />
                    </div>
                    <Link to={"/"} className="col-logo">
                        <img src={logoClinic} alt="logo" className="w-full h-full object-contain" />
                    </Link>
                    <ul className="flex gap-8 flex-row-reverse">
                        {menuLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <Link
                                        to={link.href}
                                        className={`${activeLink === link.id ? "active" : ""
                                            } text-[16px] text-[#42474F] font-bold`}
                                        onClick={() => setActiveLink(link.id)}
                                    >
                                        {link.link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="order-now flex gap-6 flex-row-reverse items-center">
                        <Link to={"ordernow"} className="w-35 h-11 bg-(--textcolor1) rounded-xl text-white text-[14px] flex justify-center items-center ">احجز موعدك الآن</Link>
                        <div className="col-user w-8 h-8 rounded-full bg-(--textcolor1) flex justify-center items-center">
                            <FaRegUser className="text-white" />
                        </div>
                    </div>
                    <div className="doctor-img w-8 h-8">
                        <img src={doctorImg} alt="doctor-img" className="w-full h-full object-contain" />
                    </div>
                </div>
            </header>
            <div className={`${showMenu ? "show" : ""} menu-mobile w-full h-full fixed top-0 -left-full bg-white`}>
                <div className="header-menu w-full h-16 bg-(--bg1) flex flex-row-reverse justify-between items-center pl-5 pr-5">
                    <div className="close-menu cursor-pointer" onClick={() => {
                        setShowMenu(!showMenu);
                    }}>
                        <IoClose className="text-3xl text-(--textcolor1)" />
                    </div>
                    <Link className="col-logo" to={"/"}>
                        <img src={logoClinic} alt="logo" className="w-full h-full object-contain" />
                    </Link>
                    <div className="doctor-img w-8 h-8">
                        <img src={doctorImg} alt="doctor-img" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="content-menu-mobile bg-white border-t border-b border-[#cfd2d4] w-full h-full pt-4 pb-4 pl-5 pr-5">
                    <div className="col-profile-doctor w-full h-24 rounded-xl bg-[#F2F4F6] flex flex-row-reverse items-center gap-4 p-4">
                        <div className="col-img-profile">
                            <img src={imgUserDoctor} alt="img-doctor" className="rounded-full" />
                        </div>
                        <div className="col-profile text-end">
                            <h1 className="text-[16px] text-[#191C1E] font-bold">د. أمير حسن</h1>
                            <p className="text-[12px] text-[#42474F]">استشاري طب وجراحة الفم والأسنان</p>
                        </div>
                    </div>
                    <div className="col-title w-full flex flex-row-reverse gap-2 mt-8">
                        <img src={iconDentist} alt="icon-img" />
                        <p className="text-[18px] text-(--textcolor1) font-semibold">عيادة الابتسامة لطب الأسنان</p>
                    </div>
                    <ul className="flex flex-col items-end gap-2 pt-4 pb-4">
                        {menuLinks.map((link,index) => {
                            return(
                                <li className="w-full flex justify-between items-center flex-row-reverse pt-3 pb-3" key={link.id}>
                                    <Link to={link.href} className="flex flex-row-reverse gap-3" onClick={() => {
                                        setShowMenu(!showMenu);
                                    }}>
                                        <img src={link.icon} alt="icon" />
                                        <p className="text-[17px] text-[#191C1E]">{link.link}</p>
                                    </Link>
                                    <img src={rightIcon} alt="icon-right" />
                                </li>
                            )
                        })}
                      
                        
                    </ul>
                    <button className="min-w-full h-13 bg-(--textcolor1) rounded-lg cursor-pointer" onClick={() => {
                        navigate("/ordernow")
                        setShowMenu(!showMenu);
                    }}>
                        <p className="text-[18px] text-white">
                            احجز موعدك الآن
                        </p>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header;