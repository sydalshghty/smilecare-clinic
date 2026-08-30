import logo from "../assets/logo-clinic.svg";
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer(){
    const socialMedia = [
        {id: 1, icon: FaFacebookF, href: "##"},
        {id: 2, icon: FaTwitter, href: "##"},
        {id: 3, icon: FaInstagram, href: "##"}
    ]
    return(
        <section className="footer-section w-full h-full bg-(--bgsection) pt-10 pb-10 md:pt-20 md:pb-20">
            <div className="container w-full h-full">
                <div className="footer-content w-full h-full pb-8 md:pb-12 flex flex-row-reverse flex-wrap lg:flex-nowrap justify-between">
                    <div className="col-profile flex flex-col gap-4 items-end w-full md:w-1/2 lg:w-1/3 mb-5">
                        <div className="col-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className="text-end text-[16px] text-(--linkcolor)">نقدم رعاية اسنان متميزة باحدث التقنيات العالمية لضمان ابتسامة صحية ومشرقة لجميع افراد العائلة</p>
                    </div>
                    <div className="col-contact  flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 mb-5">
                        <h1 className="text-xl md:text-2xl text-(--headingcolor) font-bold text-end">تواصل معنا</h1>
                        <div className="contact-content flex flex-col gap-4 items-end">
                            <div className="col-phone flex gap-2 items-center">
                                <p className="text-[16px] text-(--linkcolor)">920000000</p>
                                <Phone className="text-(--textcolor1) w-5 h-5"/>
                                
                            </div>
                            <div className="col-location flex gap-2 items-center">
                                <p className="text-[16px] text-(--linkcolor)">الرياض، حي العليا، شارع التخصصي</p>
                                <MapPin className="text-(--textcolor1) w-5 h-5"/> 
                            </div>
                            <a className="email flex gap-2 items-center" href="mailto:info@smileclinic.sa">
                                <p className="text-[16px] text-(--linkcolor)">info@smileclinic.sa</p>
                                <Mail className="text-(--textcolor1) w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-social flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 mb-5">
                        <h1 className="text-xl md:text-2xl text-(--headingcolor) font-bold text-end">تابعنا</h1>
                        <div className="all-social flex flex-row-reverse items-end gap-4">
                            {socialMedia.map((link,index) => {
                                const Icon = link.icon;
                                return(
                                    <a key={link.id} className="col-social w-10 h-10 bg-(--bgIcon) rounded-full flex justify-center items-center" href={link.href}>
                                        <Icon className="text-(--textcolor1)"/>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="copyright-p w-full text-center pt-4 md:pt-8 border-t border-(--bordercolor) text-[14px] text-(--linkcolor)">
                    جميع الحقوق محفوظة © 2026 عيادة الابتسامة لطب الأسنان
                </div>
            </div>
        </section>
    )
}
export default Footer;