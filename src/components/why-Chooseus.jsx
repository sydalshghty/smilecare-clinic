import WhyChooseImg from "../assets/whychoose-us-img.png";
import chooseIcon1 from "../assets/choose-icon-1.svg";
import chooseIcon2 from "../assets/choose-icon-2.svg";
import chooseIcon3 from "../assets/choose-icon-3.svg";
import chooseIcon4 from "../assets/choose-icon-4.svg";
function WhyChooseUS(){
    const allbenfits = [
        {id: 1, icon: chooseIcon1, title: "تخدير رقمي ذكي بدون وخز", description: `نظام التخدير المحوسب  يحقن المخدر بانسيابية دقيقة دون ألم
            الإبرة التقليدي`},
        {id: 2, icon: chooseIcon2, title: "معاينة النتيجة قبل بدء العلاج", description: `نصمم ابتسامتك رقمياً وتجربتها شكلياً لتتأكد من توافقها التام مع ملامح وجهك
            قبل أي خطوة`},
        {id: 3, icon: chooseIcon3, title: "تعقيم مستشفيات فئة Class B", description: `غرف تعقيم متقدمة وأنظمة هواء مفلترة بنظام الضغط الإيجابي لضمان أعلى
            درجات النظافة الطبية`},
        {id: 4, icon: chooseIcon4, title: "استشاريون يحملون البورد الأمريكي والسعودي", description: `فريق طبي ذو كفاءات أكاديمية عالية ومشاركات دولية في أحدث أبحاث طب
            الأسنان التجميلي`}
    ]
    return(
       <section className="why-choose-us w-full h-full  pt-10 pb-10 bg-(--bgsection)">
        <div className="container w-full h-full flex flex-row-reverse justify-center items-center gap-12">
            <div className="col-img">
                <img src={WhyChooseImg} alt="choose-img" />
            </div>
            <div className="content-information flex flex-col gap-8">
                <div className="col-heading flex flex-col gap-2 justify-end items-end text-end">
                    <span className="text-[14px] text-(--textcolor2) font-semibold">تجربة الابتسامة الاستثنائية</span>
                    <h1 className="text-[20px] lg:text-[32px] font-bold text-(--textcolor1)">لماذا يختارنا نخبة المراجعين في الرياض؟</h1>
                    <p className="text-[14px] lg:text-[16px] text-(--linkcolor)">صُممت كل تفصيلة في عيادة الابتسامة لتلغي تماماً فكرة القلق المصاحب لزيارة طبيب الأسنان،
                        وتحولها إلى تجربة رعاية مريحة وفاخرة</p>
                </div>
                <div className="all-benfits-choose flex flex-col gap-5">
                    {allbenfits.map((item,index) => {
                        return(
                            <div key={item.id} className="col-benfit w-full h-26.5 p-4 flex flex-row-reverse gap-4 items-center bg-white rounded-xl">
                                <img src={item.icon} alt="icon-benfit" />
                                <div className="col-text text-end">
                                    <h2 className="text-[15px] lg:text-[17px] text-(--textcolor1) font-semibold">{item.title}</h2>
                                    <p className="text-[12px] lg:text-[16px] text-(--linkcolor)">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
       </section>
    )
}
export default WhyChooseUS;