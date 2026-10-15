import { Link } from "react-router-dom";
import ServiceOrderImg from "../assets/service-ordernow-img.svg";
import OrderIcon from "../assets/service-order-icon.svg";
import PhoneIcon from "../assets/service-phone-icon.svg";
function ServiceOrder() {
    return (
        <section className="service-ordernow w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <div className="content-section w-full h-full bg-(--textcolor1) p-5 lg:p-16 rounded-4xl flex flex-row-reverse items-center">
                    <div className="col-text flex flex-col gap-4 items-end w-[50%]">
                        <img src={ServiceOrderImg} alt="img" />
                        <h1 className="text-[22px] lg:text-[38px] text-white text-end">ابدأ رحلة ابتسامتك المثالية اليوم</h1>
                        <p className="text-[14px] lg:text-[16px] text-[#A0C9FF] text-end">احجز موعدك الاستشاري الآن شامل التصوير الرقمي ثلاثي الأبعاد وتقييم صحة الفم
                            واللثة بالكامل مع نخبة أطباء الأسنان في المملكة</p>
                    </div>
                    <div className="col-btns flex flex-row-reverse  gap-4">
                        <Link to={"/ordernow"} className=" w-fit h-14 flex justify-center items-center flex-row-reverse gap-2 bg-white pt-4 pb-4 pl-8 pr-8 rounded-2xl" onClick={() => {
                            window.scrollTo({ top: 0 })
                        }}>
                            <img src={OrderIcon} alt="order-icon" />
                            <p className="text-[14px] lg:text-[16px] text-(--textcolor1)">حجز موعد استشارة فوري</p>
                        </Link>
                        <div className="phone-btn w-fit h-14 border border-[#ffffffa4] rounded-2xl pt-4 pb-4 pl-7 pr-7 flex flex-row-reverse justify-center items-center gap-2">
                            <img src={PhoneIcon} alt="phone-icon" />
                            <p className="text-[14px] lg:text-[16px] text-white font-medium">الاتصال المباشر 920000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceOrder;