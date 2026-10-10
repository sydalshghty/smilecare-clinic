import { Link } from "react-router-dom";
import orderIcon from "../assets/ordernow-img.svg";
import LocationImg from "../assets/location-img.png";
import PhoneIcon from "../assets/mobile-icon.svg";
function LocationSection() {
    return (
        <section className="loctaion-section w-full h-full bg-(--bgsection)">
            <div className="container w-full h-full">
                <div className="content-location w-full h-full bg-[#E6E8EA] p-12 rounded-3xl flex flex-row-reverse gap-8">
                    <div className="content-text flex flex-col gap-4 text-end">
                        <span className="text-[14px] text-(--textcolor2) font-semibold">ابدأ رحلتك نحو ابتسامة أحلامك اليوم</span>
                        <h1 className="text-[20px] lg:text-[32px] font-bold text-(--textcolor1)">جاهز لرؤية ابتسامتك الجديدة بتقنية ثلاثية الابعاد ؟</h1>
                        <p className="text-[14px] lg:text-[16px] text-(--linkcolor)">احجز موعد كشفك التخصصي الآن وسيقوم فريق الاستقبال بحجز غرفتك وتجهيز خطة الاستشارة في
                            مركزنا الواقع في أرقى أحياء الرياض</p>
                        <div className="btns-contact flex  justify-end items-end gap-4">
                            <div className="bg-white pl-8 pr-8 h-14 rounded-xl flex flex-row-reverse justify-center items-center gap-2">
                                <img src={PhoneIcon} alt="phone-icon" />
                                <p className="text-[14px] text-(--textcolor1) font-medium">الاتصال المباشر: 920000000</p>
                            </div>

                            <Link to={"/ordernow"}
                                onClick={() => {
                                    window.scrollTo({ top: 0 })
                                }}
                                className="bg-(--textcolor1) pl-8 pr-8 h-14 rounded-xl flex flex-row-reverse justify-center items-center gap-2">
                                <img src={orderIcon} alt="order-icon" />
                                <p className="text-[14px] text-white">احجز موعد استشارتك</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-img-location w-[50%]">
                        <img src={LocationImg} alt="location-img" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LocationSection;