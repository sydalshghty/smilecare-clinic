import { Link } from "react-router-dom";
import ordernowIcon from "../assets/ordernow-icon.svg";
function AboutusOrdernow() {
    return (
        <section className="aboutus-ordernow w-full h-full pt-12 pb-12 lg:pt-24 lg:pb-24 bg-(--textcolor1)">
            <div className="container w-full h-full flex flex-col gap-8 justify-center items-center">
                <h1 className="text-[24px] lg:text-[32px] text-[#ffffff] font-bold text-center">جاهز لبدء رحلتك نحو ابتسامة مثالية؟</h1>
                <p className="text-[14px] lg:text-[18px] text-[#A0C9FF] text-center">فريقنا مستعد للترحيب بك وتقديم الرعاية التي تستحقها. احجز موعدك اليوم واستمتع
                    بتجربة طب أسنان مختلفة</p>
                <Link to={'/ordernow'} className="w-55.5 h-15 bg-white pt-4 pb-4  rounded-xl flex gap-2 justify-center items-center">
                    <p className="text-[18px] text-(--textcolor1)">احجز موعدك الآن</p>
                    <div className="w-5 h-5">
                        <img src={ordernowIcon} alt="ordernow-icon" className="w-full h-full object-contain" />
                    </div>
                </Link>
            </div>
        </section>
    )
}
export default AboutusOrdernow;