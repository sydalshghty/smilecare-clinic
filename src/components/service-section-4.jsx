import MainImgTechnology from "../assets/main-img-technology.png";
import TechIcon1 from "../assets/tech-icon-1.svg";
import TechIcon2 from "../assets/tech-icon-2.svg";
import TechIcon3 from "../assets/tech-icon-3.svg";
import TechIcon4 from "../assets/tech-icon-4.svg";
function ServiceSectionFour() {
    const allTechnologies = [
        {
            id: 1, icon: TechIcon1, title: "مجهر الجراحي", description: `تكبير بصري عالي الدقة يتيح علاج أدق القنوات
            المجهرية دون إتلاف بنية السن السليمة` },
        {
            id: 2, icon: TechIcon2, title: "الليزر المائي", description: `معالجة الأنسجة الصلبة والرخوة بطاقة الفوتون
            والماء لإجراءات بدون ألم ولا حاجة للإبر` },
        {
            id: 3, icon: TechIcon3, title: "الماسح الفموي", description: `أخذ مقاسات رقمية فورية مع فحص داخلي
            بالأشعة القريبة من تحت الحمراء لكشف
            التسوس البيني` },
        {
            id: 4, icon: TechIcon4, title: "التخدير الحاسوبي الذكي", description: `نظام ضخ التخدير بتحكم رقمي ميكروي يمنع أي
            إحساس بالضغط أو وخز الإبر المعتاد` }
    ]
    return (
        <section className="service-section-four w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full flex flex-row-reverse items-center">
                <div className="col-img w-[40%]">
                    <img src={MainImgTechnology} alt="img" className="w-full object-contain" />
                </div>
                <div className="content-technologies w-full lg:w-[60%] ">
                    <div className="col-heading flex flex-col gap-2 text-end">
                        <span className="text-[14px] lg:text-[16px] font-semibold text-(--textcolor2)">الدقة المتناهية</span>
                        <h2 className="text-[14px] lg:text-[16px] text-(--textcolor1)">تقنياتنا الطبية الحديثة</h2>
                        <p className="text-[14px] lg:text-[16px] text-(--linkcolor)">نستثمر في أحدث ما توصل إليه طب الأسنان الرقمي عالمياً لنضمن لك نتائج طبية استثنائية وأقصى درجات الراحة
                            النفسية والجسدية</p>
                    </div>
                    <div className="all-technologies pt-6 flex flex-row-reverse gap-5 flex-wrap justify-start">
                        {allTechnologies.map((item, index) => {
                            return (
                                <div key={item.id} className="col-technology w-[45%] p-5 flex flex-col items-end gap-2 text-end bg-(--bgsection) rounded-3xl">
                                    <img src={item.icon} alt="icon-technology" />
                                    <h1 className="text-[14px] lg:text-[16px] text-(--textcolor1) font-semibold">{item.title}</h1>
                                    <p className="text-[14px] lg:text-[16px] text-(--linkcolor)">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceSectionFour;