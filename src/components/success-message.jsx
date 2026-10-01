import checkIcon from "../assets/check-success-icon.svg";
import statusIcon from "../assets/status-icon.svg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
function SuccessMessage(props) {
    return (
        <div className="success-message-content w-[60%] bg-white  p-16 rounded-tr-3xl rounded-br-3xl">
            <div className="col-heading-message flex flex-col justify-center items-center gap-1 mb-5">
                <img src={checkIcon} alt="icon" className="animate-bounce w-15  lg:w-fit lg:h-fit" />
                <h1 className="text-[22px] lg:text-[30px] font-bold text-[#0B3B60]">!تم ارسال رسالتك بنجاح</h1>
                <p className="text-center text-[14px] lg:text-[16px] text-[#6B7280]">شكراً لتواصلك مع عيادة الابتسامة. استلمنا رسالتك وسيقوم فريقنا
                    الطبي بالتواصل معك في أقرب وقت عبر رقم الهاتف أو الواتساب
                </p>
            </div>
            <div className="col-information-user w-full lg:w-[90%]  bg-[#F8FAFC] p-5 border border-[#E9EFF6] rounded-2xl m-auto mb-5">
                <div className="col-name-phone w-full flex justify-between flex-col md:flex-row-reverse gap-3 mb-3 lg:mb-8">
                    <div className="col-name flex flex-row-reverse justify-between items-center w-full md:w-1/2">
                        <label className="text-[14px] md:text-[17px] text-[#6B7280]">:الاسم الكامل</label>
                        <p className="text-[14px] md:text-[16px] font-medium text-[#1F2937]">{props.name}</p>
                    </div>
                    <div className="col-phone flex flex-row-reverse justify-between items-center w-full md:w-1/2">
                        <label className="text-[14px] md:text-[17px] text-[#6B7280]">:رقم الجوال</label>
                        <p className="text-[14px] md:text-[16px] font-medium text-[#1F2937]">{props.phone}</p>
                    </div>
                </div>
                <div className="col-subject-status w-full flex justify-between flex-col md:flex-row-reverse gap-3">
                    <div className="col-subject flex flex-row-reverse justify-between items-center w-full md:w-1/2">
                        <label className="text-[14px] md:text-[17px] text-[#6B7280]">:موضوع الرسالة</label>
                        <p className="text-[14px] md:text-[16px] font-medium text-[#1F2937]">{props.subject}</p>
                    </div>
                    <div className="col-status flex flex-row-reverse justify-between items-center w-full md:w-1/2">
                        <label className="text-[14px] md:text-[17px] text-[#6B7280]">:حالة الطلب</label>
                        <img src={statusIcon} alt="status-icon" />
                    </div>
                </div>
            </div>
            <div className="all-buttons w-full lg:w-[90%] p-5 flex flex-col md:flex-row-reverse justify-center gap-5 md:gap-10 m-auto">
                <Link to={'/'} className="w-full md:w-[160px] h-[44px] bg-[#0B3B60] rounded-xl flex justify-center items-center text-[14px] text-white font-medium">العودة للرئيسية</Link>
                <a href="###" target="_blank" className="w-full md:w-58.5 h-11 flex flex-row-reverse justify-center  items-center gap-3 bg-[#059669] rounded-xl">
                    <FaWhatsapp className="text-white  text-xl" />
                    <p className="text-[14px] text-white font-medium">متابعة سريعة عبر الواتساب</p>
                </a>
            </div>
        </div>
    )
}
export default SuccessMessage;