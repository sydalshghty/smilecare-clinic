import TitleValuesIcon from "../assets/title-values-icon.svg";
import ValueIcon1 from "../assets/value-icon-1.svg";
import ValueIcon2 from "../assets/value-icon-2.svg";
import ValueIcon3 from "../assets/value-icon-3.svg";
import ValueIcon4 from "../assets/value-icon-4.svg";
function AboutOurValues() {
    const allValues = [
        {
            id: 1, icon: ValueIcon1, title: "الدقة والتكنولوجيا الرقمية", description: `مسح ثلاثي الأبعاد وتقنيات ليزر نسيجي متقدمة تقضي على الأخطاء اليدوية وتمنح نتائج فائقة الدقة`, notes: "علاج رقمي"
        },
        {
            id: 2, icon: ValueIcon2, title: `تجربة خالية من القلق والألم`, description: `بيئة استرخاء متكاملة تشمل التخدير بالغاز الضاحك، وشاشات ترفيهية خاصة لكل مراجع أثناء العلاج`, notes: `راحة نفسية وجسدية تامة`
        },
        { id: 3, icon: ValueIcon3, title: `الشفافية والمصداقية المطلقة`, description: `شرح تفصيلي لتكلفة وخيارات العلاج قبل البدء، وعرض مجسم ثلاثي الأبعاد للنتيجة المتوقعة لابتسامتك`, notes: `بدون مفاجآت أو تكاليف خفية` },
        {
            id: 4, icon: ValueIcon4, title: `رعاية شاملة ومتابعة مستمرة`, description: `برامج وقاية دورية وتذكير بمواعيد الفحص للمحافظة الدائمة على صحة اللثة وديمومة التركيبات والزراعات`, notes: `ضمانات ممتدة على العلاجات`
        },
    ]
    return (
        <section className="about-ourValues w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bgsection)">
            <div className="container w-full h-full">
                <div className="col-heading w-full h-full flex flex-col justify-center items-center gap-3">
                    <div className="flex items-center">
                        <p className="text-[12px] lg:text-[14px] font-medium text-(--textcolor2)">معاييرنا الراسخة</p>
                        <img src={TitleValuesIcon} alt="title-icon" />
                    </div>
                    <h1 className="text-[18px] lg:text-[36px] font-bold text-(--headingcolor)">القيم التي تحكم كل تفصيلة في علاجك</h1>
                    <p className="text-[12px] lg:text-[18px] text-(--linkcolor) text-center">نلتزم بمنهج عملي يضع سلامتك، راحتك، وشفافية كل مرحلة علاجية كأولوية لا مساومة عليها</p>
                </div>
                <div className="all-values w-full h-full pt-8 lg:pt-16 flex flex-row-reverse gap-6">
                    {allValues.map((item, index) => {
                        return (
                            <div key={item.id} className="col-value p-8 bg-white rounded-3xl shadow flex flex-col gap-7 items-end">
                                <div className="content-text flex flex-col items-end gap-2.5">
                                    <img src={item.icon} alt="value-icon" />
                                    <h1 className="text-[14px] lg:text-[18px] font-bold text-(--headingcolor) text-end">{item.title}</h1>
                                    <p className="text-[12px] lg:text-[14px] text-(--linkcolor) text-end">{item.description}</p>
                                </div>
                                <div className="notes-value mt-5 w-full border-t border-[#e3e5eb] pt-4 text-end">
                                    <p className="text-[12px] text-(--textcolor2) font-semibold">{item.notes}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}
export default AboutOurValues;