import numInformation from "../assets/number-information.svg";
import numDate from "../assets/number-date.svg";
import numNotes from "../assets/number-notes.svg";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import sendIcon from "../assets/send-order-icon.svg";
import { useState } from "react";
function FormOrderNow() {
    const services = [
        { id: 1, name: "استشارة عامة" },
        { id: 2, name: "تقويم الأسنان" },
        { id: 3, name: "تبييض الأسنان" },
        { id: 4, name: "طب أسنان الأطفال" },
    ]

    const times = [
        { id: 1, time: "صباحاً", icon: MdOutlineLightMode },
        { id: 2, time: "مساءً", icon: FiMoon },
    ]
    const [activeService, setActiveService] = useState(false);
    const [activeTime, setActiveTime] = useState(false);
    const [typeService, setTypeService] = useState("");
    const [time, setTime] = useState("");

    console.log({
        typeService, time
    })

    return (
        <form className="form-ordernow w-full flex flex-col gap-10  lg:w-[65%] pt-4 pl-4 pr-4 pb-5 lg:pt-8 lg:pl-8 lg:pr-8 lg:pb-12 rounded-xl bg-white">
            <div className="personal-information w-full flex flex-col gap-6 items-end">
                <div className="col-heading flex gap-3 flex-row-reverse items-center">
                    <img src={numInformation} alt="icon-number" />
                    <h2 className="text-xl lg:text-2xl text-(--textcolor1) font-semibold">المعلومات الشخصية</h2>
                </div>
                <div className="all-inputs flex flex-col gap-6 min-w-full">
                    <div className="name-phone-col flex flex-row-reverse gap-6 items-end w-full">
                        <div className="col-name flex flex-col gap-2 items-end w-1/2">
                            <label className="text-[14px] text-(--linkcolor)">الاسم الكامل</label>
                            <input type="text" placeholder="أدخل اسمك الكامل" required
                                className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--placeholdercolor)" />
                        </div>
                        <div className="col-phone flex flex-col gap-2 items-end w-1/2">
                            <label className="text-[14px] text-(--linkcolor)">رقم الهاتف</label>
                            <input type="text" placeholder="05X XXX XXXX" required
                                className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--placeholdercolor)"
                            />
                        </div>
                    </div>
                    <div className="email-col w-full flex flex-col gap-2 items-end">
                        <label className="text-[14px] text-(--linkcolor)">البريد الإلكتروني (اختياري)</label>
                        <input type="email" placeholder="example@email.com"
                            className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--placeholdercolor)"
                        />
                    </div>
                </div>
            </div>
            <div className="order-date w-full flex flex-col gap-6 items-end">
                <div className="col-heading flex gap-3 flex-row-reverse items-center">
                    <img src={numDate} alt="icon-number" />
                    <h2 className="text-xl lg:text-2xl text-(--textcolor1) font-semibold">تفاصيل الموعد</h2>
                </div>
                <div className="col-services flex flex-col gap-6 min-w-full items-end">
                    <label className="text-[14px] text-(--linkcolor) font-medium text-end">نوع الخدمة</label>
                    <div className="all-services flex flex-row-reverse gap-3 min-w-full">
                        {services.map((service, index) => {
                            return (
                                <option key={service.id} value={service.name}
                                    onClick={(e) => {
                                        setActiveService(e.target.value);
                                        setTypeService(e.target.value);
                                    }}
                                    className={`${activeService == service.name ? "active" : ""} cursor-pointer w-1/4 h-16 bg-(--bg1) rounded-lg flex justify-center items-center text-[16px] text-(--linkcolor)`}>{service.name}</option>
                            )
                        })}
                    </div>
                </div>
                <div className="col-doctor w-full flex flex-col gap-2 items-end">
                    <label className="text-[14px] text-(--linkcolor)">الطبيب المفضل</label>
                    <input type="text" placeholder="أي طبيب متاح"
                        className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--headingcolor)"
                    />
                </div>
                <div className="data-time-order w-full flex flex-row-reverse gap-6">
                    <div className="col-date w-1/2  flex flex-col gap-2 items-end">
                        <label className="text-[14px] text-(--linkcolor)">تاريخ الموعد</label>
                        <input type="date" className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--headingcolor)" />
                    </div>
                    <div className="col-time w-1/2 flex flex-col gap-2 items-end">
                        <label className="text-[14px] text-(--linkcolor)">الوقت المفضل</label>
                        <div className="options-time flex flex-row-reverse gap-6 items-end w-full">
                            {times.map((time, index) => {
                                return (
                                    <span key={time.id}
                                        onClick={(e) => {
                                            setActiveTime(time.time);
                                            setTime(time.time);
                                        }}
                                        className={`${activeTime == time.time ? "active" : ""} cursor-pointer w-1/2 h-12 bg-(--bg1) rounded-lg flex justify-center items-center gap-2 text-[16px] text-(--linkcolor)`}>
                                        <p>{time.time}</p>
                                        <time.icon className="text-[22px] text-(--linkcolor)" />
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="notes-col">
                <div className="col-heading flex gap-3 flex-row-reverse items-center">
                    <img src={numNotes} alt="icon-number" />
                    <h2 className="text-xl lg:text-2xl text-(--textcolor1) font-semibold">ملاحظات إضافية</h2>
                </div>
                <textarea placeholder="هل تعاني من أي أمراض مزمنة أو لديك استفسار محدد؟"
                    className="w-full mt-6 text-end border-none outline-none h-30 p-4 rounded-lg bg-(--bg1)"
                >

                </textarea>
            </div>
            <button type="submit" className="w-full h-14 rounded-xl bg-(--textcolor1) flex justify-center items-center gap-2">
                <img src={sendIcon} alt="icon-send" />
                <p className="text-[14px] text-white">تأكيد الحجز</p>
            </button>
        </form>
    )
}
export default FormOrderNow;