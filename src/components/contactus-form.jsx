import SendIcon from "../assets/send-icon.svg";
import HoursIcon from "../assets/hours-icon.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { useState } from "react";
import emailJS from '@emailjs/browser';
function ContactusForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendFormData = async (e) => {
        e.preventDefault();
        console.log({
            "name": name,
            "phone": phone,
            "subject": subject,
            "message": message
        })
    }


    return (
        <section className="form-contact w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-[#F2F4F6]">
            <div className="container w-full h-full flex flex-row-reverse">
                <div className="send-message-form w-[60%] bg-white  p-16 rounded-tr-3xl rounded-br-3xl flex flex-col justify-end items-end gap-8">
                    <div className="col-heading flex flex-col gap-2">
                        <h1 className="text-end text-[32px] text-(--headingcolor) font-bold">أرسل لنا رسالة</h1>
                        <p className="text-[16px] text-(--linkcolor)">يرجى تعبئة النموذج أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن</p>
                    </div>
                    <form className="w-full flex flex-col gap-6" onSubmit={sendFormData}>
                        <div className="col-name-phone min-w-full flex flex-row-reverse gap-6">
                            <div className="col-name flex flex-col items-end gap-2 w-1/2">
                                <label className="text-[16px] text-(--linkcolor)">الاسم الكامل</label>
                                <input
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    type="text" placeholder="أدخل اسمك" required
                                    className="min-w-full text-end h-12 pl-4 pr-4 bg-(--bgsection) rounded-xl outline-none text-[16px] text-(--placeholdercolor)"
                                />
                            </div>
                            <div className="col-phone flex flex-col items-end gap-2 w-1/2">
                                <label className="text-[16px] text-(--linkcolor)">رقم الجوال</label>
                                <input
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                    type="phone" placeholder="05x xxx xxxx" required
                                    className="min-w-full text-end h-12 pl-4 pr-4 bg-(--bgsection) rounded-xl outline-none text-[16px] text-(--placeholdercolor)" />
                            </div>
                        </div>
                        <div className="col-subject-message flex flex-col items-end gap-2">
                            <label className="text-[16px] text-(--linkcolor)">موضوع الرسالة</label>
                            <input
                                onChange={(e) => {
                                    setSubject(e.target.value)
                                }}
                                type="text" placeholder="اختر موضوع الاستفسار" required
                                className="min-w-full text-end h-12 pl-4 pr-4 bg-(--bgsection) rounded-xl outline-none text-[16px] text-(--placeholdercolor)" />
                        </div>
                        <div className="col-message flex flex-col items-end gap-2">
                            <label className="text-[16px] text-(--linkcolor)">الرسالة</label>
                            <input
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                                type="text" placeholder="...اكتب تفاصيل رسالتك هنا" required
                                className="min-w-full text-end h-[120px] pl-4 pr-4 bg-(--bgsection) rounded-xl outline-none text-[16px] text-(--placeholdercolor)" />
                        </div>
                        <button
                            type="submit" className="w-42.5 h-14 bg-(--textcolor1) rounded-xl flex flex-row-reverse justify-center items-center gap-2">
                            <p className="text-white text-[16px]">إرسال الرسالة</p>
                            <img src={SendIcon} alt="send-icon" className="mt-1" />
                        </button>
                    </form>
                </div>
                <div className="work-hours-col w-[40%] bg-[#ECEEF0] rounded-tl-3xl rounded-bl-3xl p-12 flex flex-col justify-between items-end">
                    <div className="col-information-time w-full">
                        <div className="col-title flex flex-row-reverse gap-2 mb-6">
                            <img src={HoursIcon} alt="hours-icon" />
                            <h2 className="text-2xl text-(--headingcolor) font-semibold">ساعات العمل</h2>
                        </div>
                        <div className="col-time-1 w-full flex flex-row-reverse justify-between items-center pb-4 border-b border-[#C2C7D1] mb-4">
                            <p className="text-[16px] text-(--headingcolor) font-semibold">السبت - الأربعاء</p>
                            <span className="w-fit h-fit bg-white pt-1 pb-1 pl-3 pr-3 text-center rounded-lg text-[16px] text-(--linkcolor)"> 9:00 ص - 9:00 م</span>
                        </div>
                        <div className="col-time-2 w-full flex flex-row-reverse justify-between items-center pb-4 border-b border-[#C2C7D1] mb-4">
                            <p className="text-[16px] text-(--headingcolor) font-semibold">الخميس</p>
                            <span className="w-fit h-fit bg-white pt-1 pb-1 pl-3 pr-3 text-center rounded-lg text-[16px] text-(--linkcolor)">9:00 ص - 6:00 م</span>
                        </div>
                        <div className="col-time-3 w-full flex flex-row-reverse justify-between items-center">
                            <p className="text-[16px] text-[#BA1A1A] font-semibold">الجمعة</p>
                            <span className="w-fit h-fit bg-[#FFDAD6] pt-1 pb-1 pl-3 pr-3 text-center rounded-lg text-[16px] text-[#BA1A1A]">طوارئ فقط (24 ساعة)</span>
                        </div>
                    </div>
                    <div className="col-social flex flex-col gap-4">
                        <h2 className="text-[16px] text-(--headingcolor)">:تواصل معنا عبر شبكات التواصل</h2>
                        <div className="all-social flex gap-4 flex-row-reverse flex-wrap">
                            <a href="#facebook" className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
                                <FaFacebookF className="text-[#00355F] text-[17px]" />
                            </a>
                            <a href="#instagram" className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
                                <FaInstagram className="text-[#00355F] text-[17px]" />
                            </a>
                            <a href="#twiteer" className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
                                <FaTwitter className="text-[#00355F] text-[17px]" />
                            </a>
                            <a href="#Tiktok" className="w-12 h-12 bg-white flex justify-center items-center rounded-full">
                                <FaTiktok className="text-[#00355F] text-[17px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactusForm;