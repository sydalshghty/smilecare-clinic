import TitleIcon from "../assets/newTools-Title-icon.svg";
import NewToolsBanner from "../assets/newTools-banner.png";
import ToolsIcon1 from "../assets/newTools-icon-1.svg";
import ToolsIcon2 from "../assets/newTools-icon-2.svg";
import ToolsIcon3 from "../assets/newTools-icon-3.svg";
import ToolsIcon4 from "../assets/newTools-icon-4.svg";
function AboutNewTools() {
    const allNewTools = [
        {
            id: 1, icon: ToolsIcon1, title: "الماسح الفموي ثلاثي الأبعاد", description: `تقنية ثلاثية الابعاد التي تغني تماماً عن قوالب الطبعات المعجونية المزعجة، وتلتقط ملايين النقاط بدقة متناهية خلال ٦٠ ثانية
`},
        { id: 2, icon: ToolsIcon2, title: "الليزر المائي", description: `علاج اللثة وإزالة التسوس بطاقة الماء والضوء دون احتكاك أو ألم أو حاجة لحقن التخدير في معظم الحالات، مع شفاء سريع للغاية` },
        { id: 3, icon: ToolsIcon3, title: "تصميم الابتسامة الرقمي ", description: `شاهد ابتسامتك الجديدة على شاشة ثلاثية الأبعاد قبل لمس سن واحد، لتكون أنت وشريكك الطبي صانعي القرار معا` },
        { id: 4, icon: ToolsIcon4, title: "غرف تعقيم المستشفيات", description: `أنظمة أوتوكلاف رقمية مراقبة إلكترونياً تضمن تعقيماً جراحياً بنسبة 100% لكل أداة تُستخدم داخل العيادة` }
    ]
    return (
        <section className="about-newTools w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bgsection)">
            <div className="container w-full h-full flex flex-row-reverse gap-12">
                <div className="content-col flex flex-col gap-6 items-end">
                    <div className="col-title flex items-center flex-row-reverse gap-2">
                        <img src={TitleIcon} alt="icon" />
                        <span className="text-[14px] font-bold text-(--textcolor2)">التقنيات والمرافق الذكية</span>
                    </div>
                    <h1 className="text-[20px] lg:text-[36px] font-bold text-(--headingcolor) text-end">أحدث التجهيزات الطبية في عياداتنا الذكية</h1>
                    <p className="text-end text-[14px] lg:text-[16px] text-(--linkcolor)">لا نستخدم الطرق التقليدية المرهقة. كل خطوة في عيادة لومينا مدعومة بالذكاء
                        الاصطناعي والأجهزة فائقة الدقة لتقليل وقت الجلسة وزيادة الراحة المطلقة</p>
                    <img src={NewToolsBanner} alt="newTools-img" className="pt-4" />
                </div>
                <div className="allnew-tools flex flex-wrap justify-center flex-row-reverse gap-5 w-[70%]">
                    {allNewTools.map((item, index) => {
                        return (
                            <div key={item.id} className="col-newTool  bg-white rounded-3xl p-5 shadow flex flex-col items-end gap-4 w-[48%]">
                                <img src={item.icon} alt="tool-icon" />
                                <h1 className="text-[15px] lg:text-[18px] font-bold text-(--headingcolor) text-end">{item.title}</h1>
                                <p className="text-[14px] text-(--linkcolor) text-end">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default AboutNewTools;