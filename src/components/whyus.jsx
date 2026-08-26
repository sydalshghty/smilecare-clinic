import whyusImg1 from "../assets/whyus-benfits-1.svg";
import whyusImg2 from "../assets/why-us-benfits-2.svg";
import whyusImg3 from "../assets/why-us-benfits-3.svg";
import HeadingSection from "./heading-section";
function WhyUs() {
    const whyusBenfits = [
        { id: 1, img: whyusImg1, title: "تقنيات حديثة", description: 'نستخدم احدث الاجهزة والتقنيات الطبية لضمان تشخيص دقيق وعلاج فعال وسريع' },
        { id: 2, img: whyusImg2, title: "أطباء متخصصون", description: 'فريق طبي متميز يتمتع بخبرة واسعة وكفاءة عالية في كافة تخصصات طب الاسنان' },
        { id: 3, img: whyusImg3, title: "بيئة مريحة", description: 'نحرص علي توفير جو هادئ ومريح لتفليل التوتر وجعل تجربة العلاج خالية من القلق' }
    ]
    return (
        <section className="whyus-section w-full h-full bg-(--bgsection) pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <HeadingSection title1="لماذا نحن؟" title2="اختيارك الأفضل لابتسامة صحية" description=".نلتزم بتقديم اعلي معايير الجودة في الرعاية السنية لضمان راحة مرضانا وسلامتهم" />
                <div className="whyus-content w-full h-full mt-8 lg:mt-16 flex flex-col justify-center gap-4 lg:gap-8 md:flex-row-reverse">
                    {whyusBenfits.map((benfits, index) => {
                        return (
                            <div className="col w-full md:w-1/2 lg:w-1/3 bg-white rounded-2xl p-6 flex  flex-col gap-2 justify-center items-center text-center" key={benfits.id}>
                                <div className="col-icon w-12 h-12 lg:w-fit lg:h-fit">
                                    <img src={benfits.img} alt="icon-img" />
                                </div>
                                <h2 className="text-[15px] lg:text-xl text-(--headingcolor) font-medium">{benfits.title}</h2>
                                <p className="text-[12px] lg:text-[14px] text-(--linkcolor)">{benfits.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default WhyUs;



