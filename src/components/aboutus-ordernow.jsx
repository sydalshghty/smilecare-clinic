import { Link } from "react-router-dom";
import ordernowIcon from "../assets/ordernow-icon.svg";
import StartTitleImg from "../assets/about-start-order-title.svg";
import PhoneIcon from "../assets/service-phone-icon.svg";
function AboutusOrdernow() {
    return (
        <section className="aboutus-ordernow w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--textcolor1)">
            <div className="container w-full h-full flex flex-col  justify-center items-center">
                <img src={StartTitleImg} alt="title-img" className="mb-4" />
                <h1 className="mb-4 w-full lg:w-[50%] text-[22px] lg:text-[48px] text-white font-bold text-center">جاهز لتجربة رعاية أسنان مختلفة
                    تماماً؟</h1>
                <p className="mb-8 w-full lg:w-[40%] text-[14px] lg:text-[18px] text-[#A0C9FF] text-center">فريقنا الاستشاري متواجد للإجابة على جميع تساؤلاتك وتصميم خطة علاج تناسب
                    ابتسامتك وميزانيتك بدقة</p>
                <div className="order-contact-btns flex flex-row-reverse gap-4">
                    <Link to={'/ordernow'}
                        onClick={() => {
                            window.scrollTo({ "top": 0 })
                        }}
                        className="w-65.75 h-14 bg-white pt-4 pb-4  rounded-2xl flex gap-2.5 justify-center items-center">
                        <p className="text[14px] lg:text-[16px] font-bold text-(--textcolor1)">احجز موعد كشف واستشارة</p>
                        <div className="w-5 h-5">
                            <img src={ordernowIcon} alt="ordernow-icon" className="w-full h-full object-contain" />
                        </div>
                    </Link>
                    <div className="phone-btn w-65.75 h-14 flex flex-row-reverse justify-center items-center gap-2.5 border border-[#dad6d6c5] rounded-2xl">
                        <img src={PhoneIcon} alt="phone-icon" />
                        <p className="text-[14px] lg:text-[16px] text-white font-bold">اتصل بنا: 920000000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutusOrdernow;