import HeadingSection from "./heading-section";
import { ArrowLeft } from "lucide-react";
import serviceImg1 from "../assets/service-img-1.svg";
import serviceImg2 from "../assets/service-img-2.svg";
import serviceImg3 from "../assets/service-img-3.svg";
import serviceImg4 from "../assets/service-img-4.svg";
function Services() {
    const allServices = [
        { id: 1, img: serviceImg1, title: "تبييض الأسنان", description: "استعد ثقتك بابتسامتك مع احدث تقنيات تبيض الاسنان الامنة والفعالة للحصول علي نتائج مبهرة في جلسة واحدة" },
        { id: 2, img: serviceImg2, title: "تقويم الاسنان", description: "حلول تقويمية متطورة تشمل التقويم الشفاف والمعدني لتصحيح اطباق الاسنان والحصول علي ابتسامة متناسقة" },
        { id: 3, img: serviceImg3, title: "زراعة الأسنان", description: "استعض عن اسنانك النفقودة بزراعات عالية الجودة تدوم طويلا,معتمدين علي احدث تقنيات التصوير والزراعة" },
        { id: 4, img: serviceImg4, title: "طب أسنان الأطفال", description: "بيئة صديقة ومحببة للاطفال لضمان تجربة علاجية خالية من الخوف, مع التركيز علي الوقاية والعناية المبكرة" }
    ]
    return (
        <section className="services-section w-full h-full bg-(--bg1) pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <HeadingSection title1="خدماتنا الطبية" title2="رعاية شاملة لصحة فمك وأسنانك" description=".نقدم مجموعة واسعة من العلاجات السنية الوقائية والتجميلية باستخدام احدث التقنيات لضمان افضل النتائج لمرضانا" />
                <div className="all-services w-full h-full mt-8 lg:mt-16 flex flex-col justify-center gap-4 lg:gap-8 md:flex-row-reverse">
                    {allServices.map((service, index) => {
                        return (
                            <div className="col-service w-full md:w-1/4 lg:w-1/2 bg-white rounded-2xl p-6 flex  flex-col gap-3 justify-center items-end text-end" key={service.id}>
                                <div className="col-icon w-12 h-12 lg:w-fit lg:h-fit">
                                    <img src={service.img} alt="icon-service" />
                                </div>
                                <h2 className="text-[15px] lg:text-xl text-(--headingcolor) font-medium">{service.title}</h2>
                                <p className="text-[12px] lg:text-[14px] text-(--linkcolor)">{service.description}</p>
                                <a href="###" className="btn-navgitation flex flex-row-reverse items-center">
                                    <p className="text-[16px] text-(--textcolor2)">المزيد من التفاصيل</p>
                                    <ArrowLeft className="w-5 text-(--textcolor2) mt-1" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Services;