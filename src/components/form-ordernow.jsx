import numInformation from "../assets/number-information.svg";
import numDate from "../assets/number-date.svg";
import numNotes from "../assets/number-notes.svg";
import sendIcon from "../assets/send-order-icon.svg";
import { useState } from "react";
import checkIcon from "../assets/check-success-order.png";
import statusOrderIcon from "../assets/status-order-icon.svg";
import notesIcon from "../assets/notes-icon.svg";
import { Link } from "react-router-dom";
import editIcon from "../assets/edit-icon.svg";
import homeIcon from "../assets/home-return-icon.svg";
function FormOrderNow() {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const services = [
        { id: 1, name: "استشارة عامة" },
        { id: 2, name: "تقويم الأسنان" },
        { id: 3, name: "تبييض الأسنان" },
        { id: 4, name: "طب أسنان الأطفال" },
    ]

    const times = [
        { id: 1, time: "" }
    ]
    const [activeService, setActiveService] = useState(false);
    const [activeTime, setActiveTime] = useState(true);


    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [serviceType, setTypeService] = useState("استشارة عامة");
    const [doctor, setDoctor] = useState("أي طبيب متاح");
    const [dateOrder, setDate] = useState(null);
    const [timeOrder, setTime] = useState("");
    const [notes, setNotes] = useState(null);

    const [success, setSuccess] = useState(true);

    return (
        <form className="form-ordernow w-full flex flex-col gap-10  lg:w-[65%] pt-4 pl-4 pr-4 pb-5 lg:pt-8 lg:pl-8 lg:pr-8 lg:pb-12 rounded-xl bg-white"
            onSubmit={async (e) => {
                e.preventDefault();
                console.log(timeOrder);

                try {
                    const newOrder = await fetch(`${baseUrl}/api/v1/orders/add-new-order`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name,
                            phone,
                            email,
                            serviceType,
                            doctor,
                            dateOrder,
                            timeOrder,
                            notes
                        })
                    })
                    const order = await newOrder.json();
                    console.log({
                        "msg": "order is send successfully",
                        "order": order
                    });
                    setSuccess(!success);
                }
                catch (error) {
                    console.log({ "error": error.message })
                }
            }}
        >
            {success ?
                <>
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
                                        onChange={(e) => setName(e.target.value)}
                                        className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--placeholdercolor)" />
                                </div>
                                <div className="col-phone flex flex-col gap-2 items-end w-1/2">
                                    <label className="text-[14px] text-(--linkcolor)">رقم الهاتف</label>
                                    <input type="text" placeholder="05X XXX XXXX" required
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--placeholdercolor)"
                                    />
                                </div>
                            </div>
                            <div className="email-col w-full flex flex-col gap-2 items-end">
                                <label className="text-[14px] text-(--linkcolor)">البريد الإلكتروني (اختياري)</label>
                                <input type="email" placeholder="example@email.com"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setDoctor(e.target.value)}
                                className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--headingcolor)"
                            />
                        </div>
                        <div className="data-time-order w-full flex flex-row-reverse gap-6">
                            <div className="col-date w-[70%]  flex flex-col gap-2 items-end">
                                <label className="text-[14px] text-(--linkcolor)">تاريخ الموعد</label>
                                <input type="date" required
                                    onChange={(e) => setDate(e.target.value)}
                                    className="h-12 bg-(--bg1) min-w-full border-none outline-none text-end pl-4 pr-4 text-[16px] text-(--headingcolor)" />
                            </div>
                            <div className="col-time w-[30%] flex flex-col gap-2 items-end">
                                <label className="text-[14px] text-(--linkcolor)">الوقت المفضل</label>
                                <div className="options-time flex flex-row-reverse gap-6 items-end w-full">
                                    {times.map((time, index) => {
                                        return (
                                            <span key={time.id}
                                                onClick={(e) => {
                                                    setActiveTime(time.time);
                                                    setTime(time.time);
                                                }}
                                                className={`${activeTime == time.time ? "active" : ""} cursor-pointer w-full h-12 pl-3 pr-3 bg-(--bg1) rounded-lg flex justify-center items-center gap-2 text-[16px] text-(--linkcolor)`}>

                                                <input type="time" required onChange={(e) => {
                                                    setTime(e.target.value);
                                                }} />
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
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full mt-6 text-end border-none outline-none h-30 p-4 rounded-lg bg-(--bg1)"
                        >

                        </textarea>
                    </div>
                    <button type="submit" className="w-full h-14 rounded-xl bg-(--textcolor1) flex justify-center items-center gap-2 cursor-pointer">
                        <img src={sendIcon} alt="icon-send" />
                        <p className="text-[14px] text-white">تأكيد الحجز</p>
                    </button>
                </>
                :
                <div className="col-order-success">
                    <div className="col-heading w-full flex flex-col justify-center items-center gap-3 border-b border-[#F1F5F9] pb-8 mb-6">
                        <img src={checkIcon} alt="icon-check" className="w-13 md:w-fit md:h-fit" />
                        <h1 className="text-lg lg:text-2xl text-center text-[#1E293B] font-bold">تم تسجيل موعدك في قائمة الحجوزات</h1>
                        <img src={statusOrderIcon} alt="success-img" />
                    </div>
                    <div className="order-information w-full bg-[#F8FAFC] p-6 border border-[#E2E8F0] rounded-xl flex flex-col gap-5 mb-6">
                        <div className="name-phone flex flex-col md:flex-row-reverse w-full">
                            <div className="col-name flex flex-col items-end gap-1 w-full md:w-1/2">
                                <label className="text-[14px] text-[#94A3B8]">:اسم المريض</label>
                                <p className="text-[12px] md:text-[16px] text-[#1E293B] font-bold">{name}</p>
                            </div>
                            <div className="col-phone flex flex-col items-end gap-1 w-full md:w-1/2">
                                <label className="text-[14px] text-[#94A3B8]">:رقم الهاتف</label>
                                <p className="text-[12px] md:text-[16px] text-[#1E293B] font-bold">{phone}</p>
                            </div>
                        </div>
                        <div className="service-doctor-col flex flex-col md:flex-row-reverse w-full">
                            <div className="col-service flex flex-col items-end gap-1 w-full md:w-1/2">
                                <label className="text-[14px] text-[#94A3B8]">:نوع الخدمة</label>
                                <p className="text-[12px] md:text-[16px] text-[#1E293B] font-bold">{serviceType}</p>
                            </div>
                            <div className="col-doctor flex flex-col items-end gap-1 w-full md:w-1/2">
                                <label className="text-[14px] text-[#94A3B8]">:الطبيب المعالج</label>
                                <p className="text-[12px] md:text-[16px] text-[#1E293B] font-bold">{doctor}</p>
                            </div>
                        </div>
                        <div className="date-time-col flex flex-col md:flex-row-reverse w-full">
                            <div className="col-date flex flex-col items-end gap-1 w-full md:w-1/2">
                                <label className="text-[14px] text-[#94A3B8]">:تاريخ الموعد</label>
                                <p className="text-[12px] md:text-[16px] text-[#1E293B] font-bold">{dateOrder}</p>
                            </div>
                            <div className="col-time flex flex-col items-end gap-1 w-full md:w-1/2">
                                <label className="text-[14px] text-[#94A3B8]">:الوقت المحدد</label>
                                <p className="text-[12px] md:text-[16px] text-[#1E293B] font-bold">{timeOrder}</p>
                            </div>
                        </div>
                    </div>
                    <div className="notes-important w-full flex items-start flex-row-reverse gap-3 p-4 bg-[#FFFBEB] rounded-xl border border-[#FDE68A] mb-6">
                        <img src={notesIcon} alt="icon-notes" />
                        <div className="col-text text-end flex flex-col md:flex-row-reverse gap-1">
                            <p className="text-[12px] text-[#78350F] font-bold min-w-fit">:تنبيه هام</p>
                            <p className="text-[12px] text-[#78350F]">سنقوم بإرسال رسالة تذكيرية نصية قبل الموعد بـ 24 ساعة. يُرجى الحضور قبل الموعد بـ 10 دقائق لإنهاء إجراءات
                                الدخول والاستقبال بكل يسر وسهولة
                            </p>
                        </div>
                    </div>
                    <div className="col-btns w-full flex flex-col md:flex-row-reverse justify-center gap-6 border-t border-[#F1F5F9] pt-6">
                        <div className="edit-data flex flex-row-reverse items-center gap-1 cursor-pointer" onClick={() => {
                            setSuccess(!success);
                        }}>
                            <img src={editIcon} alt="edit-icon" className="w-fit h-fit" />
                            <p className="text-[14px] text-[#64748B]">تعديل بيانات الحجز</p>
                        </div>
                        <Link to={`/`} className="flex flex-row-reverse items-center gap-1">
                            <img src={homeIcon} alt="home-icon" />
                            <p className="text-[14px] text-[#64748B]">العودة إلى الصفحة الرئيسية</p>
                        </Link>
                    </div>
                </div>
            }
        </form>
    )
}
export default FormOrderNow;