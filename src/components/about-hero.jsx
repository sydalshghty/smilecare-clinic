import AboutTitle from "../assets/about-title.svg";
function AboutHero() {
    const informations = [
        { id: 1, title: "+15 عاماً", description: "من التميز والريادة الطبية" },
        { id: 2, title: "+25,000", description: "ابتسامة واثقة صُنعت هنا" },
        { id: 3, title: "99.4%", description: "نسبة رضا مراجعينا في الرياض" },
        { id: 4, title: "100%", description: "تقنيات رقمية غير مؤلمة" }
    ]
    return (
        <section className="about-hero-section w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full flex flex-col gap-6  items-center">
                <img src={AboutTitle} alt="about-title" />
                <h1 className="flex flex-col items-center text-[25px] lg:text-[40px] font-bold">
                    <span className="text-(--textcolor1)">رعاية أسنان بمعايير عالمية</span>
                    <span className="text-(--textcolor2)">ولمسة إنسانية راقية</span>
                </h1>
                <p className="text-[14px] lg:text-[17px] text-(--linkcolor) w-full lg:w-[70%] text-center">في عيادة الابتسامة، نؤمن بأن زيارة طبيب الأسنان يجب أن تكون تجربة عنوانها الطمأنينة والرفاهية. ندمج
                    أحدث تقنيات طب الأسنان الرقمي والتجميلي مع كوادر طبية استشارية تصنع الفارق في كل ابتسامة</p>
                <div className="all-informations w-full pt-4 flex flex-row-reverse justify-center gap-6">
                    {informations.map((item, index) => {
                        return (
                            <div key={item.id} className="col-information shadow w-51 bg-white pt-5 pb-5 rounded-3xl border border-[#e3e3f0] flex flex-col gap-1 justify-center items-center">
                                <h1 className="text-[20px] lg:text-[32px] font-bold text-(--textcolor1) text-center">{item.title}</h1>
                                <p className="text-[14px] text-(--linkcolor) font-medium text-center">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default AboutHero;