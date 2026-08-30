import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import imgTitleHero from "../assets/img-title-hero.svg";
import experienceImg from "../assets/experience-img.svg";
import doctorImg from "../assets/doctor-img.png";
import { Link as ScrollLink } from "react-scroll";
function HeroSection() {
    return (
        <div className="hero-section w-full h-full pt-12 pb-12 lg:pt-24 lg:pb-24">
            <div className="container w-full h-full flex flex-col lg:flex-row-reverse gap-10">
                <div className="col-information flex flex-col gap-8 items-end text-end">
                    <div className="col-img">
                        <img src={imgTitleHero} alt="img-title" />
                    </div>
                    <div className="col-text text-xl md:text-2xl lg:text-5xl font-medium flex flex-row-reverse gap-1 lg:flex-col">
                        <h1 className="text-(--textcolor1)"> ابتسامة صحية ومشرقة </h1>
                        <span className="text-(--textcolor2)">تبدأ من هنا </span>
                    </div>
                    <p className="text-[16px] text-(--linkcolor) w-full lg:max-w-[70%]">نقدم لك ولعائلتك رعاية أسنان متميزة باستخدام أحدث التقنيات الطبية في بيئة مريحة
                        وآمنة. دعنا نساعدك في الحصول على الابتسامة التي تستحقها.</p>
                    <div className="col-btns flex flex-row-reverse gap-4">
                        <Link to={`/ordernow`} className="flex flex-row-reverse justify-center items-center gap-2 md:gap-4 w-36 h-11 md:w-46.25 md:h-15 rounded-xl bg-(--textcolor1)">
                            <p className="text-[12px] md:text-[14px] text-white font-medium">احجز موعدك الآن</p>
                            <ArrowLeft className="text-white w-4 md:w-6 mt-1" />
                        </Link>
                        <ScrollLink to={"services"} smooth={true} duration={500}  className="w-32 h-11 md:w-43 md:h-15 border border-(--textcolor1) rounded-xl cursor-pointer text-[12px] md:text-[16px] text-(--textcolor1) font-medium hover:bg-(--textcolor1) hover:text-white transition-colors flex justify-center items-center">
                            استكشف خدماتنا
                        </ScrollLink>
                    </div>
                    <div className="col-information-experience">
                        <img src={experienceImg} alt="experience-img" />
                    </div>
                </div>
                <div className="col-img-doctor flex justify-center items-center">
                    <img src={doctorImg} alt="doctor-img" className="w-[80%] md:w-[50%] lg:w-full h-full object-contain" />
                </div>
            </div>
        </div>
    )
}
export default HeroSection;

