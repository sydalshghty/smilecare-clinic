import phoneIcon from "../assets/phone-icon (2).svg";
import emailIcon from "../assets/gmail-icon.svg";
import locationIcon from "../assets/location-icon (2).svg";
import scrollIcon from "../assets/scroll-icon.svg";
import { Link } from "react-scroll";
function ContactusConnect() {
    return (
        <section className="contactus-connect w-full h-full mt-33 bg-[#F2F4F6]">
            <div className="container w-full h-full flex flex-row-reverse gap-6">
                <div className="col-phone w-1/3 bg-white p-8 rounded-2xl shadow flex flex-col justify-center items-center gap-4">
                    <img src={phoneIcon} alt="contact-icon" />
                    <h2 className="text-2xl font-semibold text-(--headingcolor)">اتصل بنا</h2>
                    <p className="text-center text-[16px] text-(--linkcolor)">للحجوزات والاستفسارات العامة، أو في حالات
                        الطوارئ
                    </p>
                    <div className="all-phones w-full flex flex-col gap-2 mt-4">
                        <div className="col-phone-1 w-full h-12 rounded-xl flex flex-row-reverse justify-center items-center gap-2 bg-(--bgIcon)">
                            <p className="text-[16px] text-(--linkcolor)">92000 0000</p>
                            <p className="text-[12px] text-(--linkcolor)">(الرقم الموحد)</p>
                        </div>
                        <div className="col-phone-2 w-full h-12 rounded-xl flex flex-row-reverse justify-center items-center gap-2 bg-[#FFDAD6]">
                            <p className="text-[16px] text-[#93000A]">050 000 0000</p>
                            <p className="text-[12px] text-[#93000A]">(طوارئ 24/7)</p>
                        </div>
                    </div>
                </div>
                <div className="col-email w-1/3 bg-white p-8 rounded-2xl shadow flex flex-col justify-between  items-center gap-4">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <img src={emailIcon} alt="contact-icon" />
                        <h2 className="text-2xl font-semibold text-(--headingcolor)">راسلنا</h2>
                        <p className="text-center text-[16px] text-(--linkcolor)">نرد على جميع رسائل البريد الإلكتروني خلال 24 ساعة
                            عمل
                        </p>
                    </div>
                    <a href="mailto:info@smileclinic.sa" className="w-full h-12 rounded-xl flex flex-row-reverse justify-center items-center gap-2 bg-(--bgIcon) text-[16px] text-(--linkcolor)">info@smileclinic.sa</a>
                </div>
                <div className="col-location w-1/3 bg-white p-8 rounded-2xl shadow flex flex-col justify-between  items-center gap-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <img src={locationIcon} alt="contact-icon" />
                        <h2 className="text-2xl font-semibold text-(--headingcolor)">موقعنا</h2>
                        <p className="text-center text-[16px] text-(--linkcolor)">الرياض، حي العليا، شارع التخصصي، تقاطع طريق
                            الملك فهد
                        </p>
                    </div>
                    <Link to="#location" duration={300} smooth={true} className="w-full h-12 rounded-xl flex flex-row-reverse justify-center items-center gap-2 bg-(--bgIcon)">
                        <p className="text-[16px] text-(--linkcolor)">عرض على الخريطة</p>
                        <img className="mt-1" src={scrollIcon} alt="icon-scroll" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default ContactusConnect;