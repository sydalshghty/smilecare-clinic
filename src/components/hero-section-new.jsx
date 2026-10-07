import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import mainClinicImg from "../assets/main-clinic-img.png";
import imgTitle from "../assets/Floating Pill Tag.svg";
import orderNowIcon from "../assets/ordernow-img.svg";
import benfitIcon1 from "../assets/benfit-icon-1.svg";
import benfitIcon2 from "../assets/benfit-icon-2.svg";
import benfitIcon3 from "../assets/benfit-icon-3.svg";
function HeroSectionNew() {
    const benfits = [
        { id: 1, icon: benfitIcon1, title: "فحص ثلاثي الأبعاد", description: "مع جلسة المعاينة الأولى" },
        { id: 2, icon: benfitIcon2, title: "ضمان ذهبي ممتد", description: "على التركيبات والزراعة" },
        { id: 3, icon: benfitIcon3, title: "أقساط 0% مرنة", description: "تمارا وتابي متوفرة" }
    ]
    return (
        <section className="hero-section-new w-full h-full  pt-10 pb-10 bg-(--bg1)">
            <div className="container w-full h-full flex flex-col lg:flex-row-reverse gap-5 lg:gap-12">
                <div className="col-content flex flex-col gap-4 md:gap-6 justify-end items-end text-end">
                    <img src={imgTitle} alt="img" />
                    <h1 className="text-[22px] lg:text-[42px] text-(--textcolor1) font-bold w-full lg:w-[75%]">ابتسامة لا تُنسى.. تبدأ من رعاية
                        فائقة الدقة</h1>
                    <p className="text-[14px] lg:text-[18px] text-(--linkcolor)">نجمع بين أرقى خبرات استشاريي طب الأسنان وأحدث تقنيات الفحص والمسح ثلاثي
                        الأبعاد لنمنحك تجربة علاجية مريحة، دقيقة، وخالية تماماً من الألم
                    </p>
                    <div className="col-btns flex flex-row-reverse gap-4 items-center">
                        <Link to={"/ordernow"} className="w-40 h-12 md:w-49.5 md:h-14 bg-(--textcolor1) flex gap-2 justify-center items-center rounded-xl">
                            <p className="text-[14px] text-white">احجز استشارتك الآن</p>
                            <img src={orderNowIcon} alt="icon-order" />
                        </Link>
                        <Link to={"/services"} className="w-44 h-12 md:w-57.5 md:h-14 bg-[#E6E8EA] rounded-xl flex flex-row-reverse justify-center items-center gap-2">
                            <p className="text-[14px] text-(--textcolor1) font-medium">استكشف خدماتنا التخصصية</p>
                            <FaArrowLeft className="text-(--textcolor1) mt-1 hidden md:display-block" />
                        </Link>
                    </div>
                    <div className="all-benfits flex gap-3 flex-row-reverse flex-wrap lg:flex-nowrap mt-4">
                        {benfits.map((benfit, index) => {
                            return (
                                <div className="col-benfit flex flex-row-reverse items-center gap-2 p-3 bg-(--bgsection) rounded-lg" key={benfit.id}>
                                    <img src={benfit.icon} alt="icon" />
                                    <div className="col-text">
                                        <h2 className="text-[12px] md:text-[14px] text-(--headingcolor) font-semibold">{benfit.title}</h2>
                                        <p className="text-[10px] md:text-[12px] text-(--linkcolor)">{benfit.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-img m-auto lg:m-0">
                    <img src={mainClinicImg} alt="clinic-img" />
                </div>
            </div>
        </section>
    )
}
export default HeroSectionNew; 