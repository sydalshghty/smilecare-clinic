import AboutBanner from "../assets/about-history-banner.svg";
import HistoryIcon from "../assets/history-icon.svg";
import MessageAbout from "../assets/message-img.png";
import CheckIcon from "../assets/about-check-icon.svg";
function AboutHistory() {
    const informations = [
        { id: 1, name: "معتمد من الجمعية السعودية لطب الأسنان" },
        { id: 2, name: "شهادة الجودة والتعقيم الطبي" },
        { id: 3, name: "خطط علاجية مخصصة ومفصلة بالكامل" },
        { id: 4, name: "غرف علاج خاصة توفر أقصى درجات الخصوصية" }
    ]
    return (
        <section className="about-history-section w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full flex flex-row-reverse items-center gap-16 text-end">
                <div className="col-information w-[70%] flex flex-col gap-6">
                    <div className="col-title flex flex-row-reverse items-center gap-2">
                        <img src={HistoryIcon} alt="title-icon" />
                        <span className="text-[14px] font-bold text-(--textcolor2)">تاريخ من التميز والابتكار</span>
                    </div>
                    <h1 className="flex flex-col text-[22px] lg:text-[32px] font-bold">
                        <span className="text-(--headingcolor)">نغير مفهوم العناية بالأسنان</span>
                        <span className="text-(--textcolor1)">إلى تجربة استشفائية خالية تماماً من القلق</span>
                    </h1>
                    <div className="col-description flex flex-col gap-4">
                        <p className="text-[12px] lg:text-[16px] text-(--linkcolor) text-end">انطلقت عيادة الابتسامة في قلب مدينة الرياض من فكرة جوهرية: القضاء على الخوف المرتبط بزيارات
                            الأسنان، وتقديم مستوى تخصصي يضاهي أرقى المراكز الطبية في أوروبا وأمريكا الشمالية</p>
                        <p className="text-[12px] lg:text-[16px] text-(--linkcolor) text-end">نستثمر بلا هوادة في أحدث التجهيزات الرقمية، والتصوير ثلاثي الأبعاد، وأنظمة الليزر المائي التي تضمن
                            علاجات بدون إبر تخدير أو ألم، مع الالتزام التام بأعلى معايير التعقيم العالمية المعتمدة</p>
                    </div>
                    <div className="col-message-img w-full h-full">
                        <img src={MessageAbout} alt="message-img" className="w-full h-full object-contain " />
                    </div>
                    <div className="all-informations w-full flex justify-between flex-wrap">
                        {informations.map((item, index) => {
                            return (
                                <div key={item.id} className="col-text w-1/2 flex flex-row-reverse items-center gap-2.5 mb-3">
                                    <img src={CheckIcon} alt="check-icon" />
                                    <p className="text-[12px] lg:text-[14px] font-medium text-(--headingcolor)">{item.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-img">
                    <img src={AboutBanner} alt="about-history-banner" className="w-fit h-fit object-contain" />
                </div>
            </div>
        </section>
    )
}
export default AboutHistory;