import logo from "../assets/logo-clinic.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import MapIcon from "../assets/map-icon.svg";
import PhoneIcon from "../assets/phone-icon-11.svg";
import MailIcon from "../assets/email-icon-11.svg";
import { Link } from "react-router-dom";
function Footer() {
    const allLinks = [
        { id: 1, name: "عن العيادة", href: "/about" },
        { id: 2, name: "تواصل معنا", href: "/contact" },
        { id: 3, name: "خدماتنا", href: "/services" },
        { id: 4, name: "حجز المواعيد والاستشارات", href: "/ordernow" }
    ]
    const socialMedia = [
        { id: 1, icon: FaFacebookF, href: "##" },
        { id: 2, icon: FaTwitter, href: "##" },
        { id: 3, icon: FaInstagram, href: "##" }
    ]
    return (
        <section className="footer-section w-full h-full bg-[#F2F4F6] pt-10  md:pt-20 pb-8">
            <div className="container w-full h-full">
                <div className="footer-content w-full h-full pb-8 md:pb-12 flex flex-row-reverse flex-wrap lg:flex-nowrap justify-between">
                    <div className="col-profile flex flex-col gap-4 items-end w-1/4">
                        <div className="col-logo">
                            <img src={logo} alt="logo" className="w-[140px]" />
                        </div>
                        <p className="text-end text-[14px] lg:text-[16px] text-(--linkcolor)">عيادة متخصصة في طب وجراحة وتجميل الأسنان بأحدث التقنيات لتقديم رعاية صحية نموذجية مبنية على الدقة والاهتمام الإنساني</p>
                        <div className="col-social flex flex-col gap-4 w-full mb-5">
                            <div className="all-social flex flex-row-reverse items-end gap-3">
                                {socialMedia.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <a key={link.id} className="col-social w-9 h-9 bg-[#ECEEF0] rounded-[10px] flex justify-center items-center" href={link.href}>
                                            <Icon className="text-[#42474F] text-[14px]" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="all-links flex flex-col gap-3 justify-start items-end w-1/4">
                        <label className="text-[16px] font-bold text-(--textcolor1)">روابط هامة</label>
                        <ul className="flex flex-col gap-1 justify-start items-end">
                            {allLinks.map((link, index) => {
                                return (
                                    <li key={link.id}>
                                        <Link
                                            onClick={() => {
                                                window.scrollTo({ top: 0 })
                                            }}
                                            to={link.href} className="text-[14px] text-(--linkcolor)">{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-contact flex flex-col gap-3 w-1/4">
                        <label className="text-[16px] font-bold text-(--textcolor1) text-end">تواصل معنا</label>
                        <ul className="flex flex-col gap-2 justify-end items-end">
                            <li className="flex flex-row-reverse gap-2 items-center">
                                <img src={MapIcon} alt="icon-location" />
                                <p className="text-[14px] text-(--linkcolor) text-end">الرياض، حي العليا، شارع التخصصي تقاطع
                                    طريق العروبة</p>
                            </li>
                            <li className="flex flex-row-reverse gap-2 items-center">
                                <img src={PhoneIcon} alt="phone-icon" />
                                <p className="text-[14px] text-(--linkcolor)">920000000 / 0114000000</p>
                            </li>
                            <a href="mailto:care@luminaclinic.sa" className="flex flex-row-reverse gap-2 items-center">
                                <img src={MailIcon} alt="icon-mail" />
                                <p className="text-[14px] text-(--linkcolor)">care@luminaclinic.sa</p>
                            </a>
                        </ul>
                    </div>
                    <div className="times-work-col flex flex-col gap-3 w-1/4">
                        <label className="text-[16px] font-bold text-(--textcolor1) text-end">أوقات العمل</label>
                        <ul className="flex flex-col gap-2">
                            <li className="list-none flex flex-row-reverse justify-between">
                                <p className="text-[14px] text-(--linkcolor)">:السبت - الخميس</p>
                                <span className="text-[14px] text-(--headingcolor) font-medium">9:00 AM - 10:00 PM</span>
                            </li>
                            <li className="list-none flex flex-row-reverse justify-between">
                                <p className="text-[14px] text-(--linkcolor)">:الجمعة</p>
                                <span className="text-[14px] text-(--headingcolor) font-medium">2:00 PM - 10:00 PM</span>
                            </li>
                            <span className="text-[14px] text-(--textcolor2) text-end font-medium">طوارئ الأسنان متاحة على مدار 24 ساعة</span>
                        </ul>
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