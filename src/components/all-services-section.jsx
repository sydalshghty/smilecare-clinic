import ServiceImg1 from "../assets/service-img-11.svg";
import ServiceIcon1 from "../assets/service-icon-11.svg";
import ServiceImg2 from "../assets/service-img-22.svg";
import ServiceIcon2 from "../assets/service-icon-22.svg";
import ServiceImg3 from "../assets/service-img-33.svg";
import ServiceIcon3 from "../assets/service-icon-333.svg";
import ServiceImg4 from "../assets/service-img-44.svg";
import ServiceIcon4 from "../assets/service-icon-444.svg";
import ServiceImg5 from "../assets/service-img-55.svg";
import ServiceIcon5 from "../assets/service-icon-555.svg";
import ServiceImg6 from "../assets/service-img-66.svg";
import ServiceIcon6 from "../assets/service-icon-666.svg";
import ServiceImg7 from "../assets/service-img-77.svg";
import ServiceIcon7 from "../assets/service-icon-777.svg";
import ServiceImg8 from "../assets/service-img-88.svg";
import ServiceIcon8 from "../assets/service-icon-888.svg";
import CheckIcon from "../assets/check-icon.svg";
import TimeIcon from "../assets/time-icon.svg";
import { Link } from "react-router-dom";

function AllServicesSection() {
    const allServices = [
        {
            id: 1, img: ServiceImg1, icon: ServiceIcon1,
            title: "تصميم الابتسامة الرقمية وفينير البورسلين",
            description: `محاكاة ثلاثية الأبعاد لاختبار ابتسامتك الجديدة قبل
                            البدء، مع قشور خزفية فائقة الدقة مخصصة لملامح
                            وجهك وطبقات طبيعية تعكس الضوء`,
            benfits: [
                { id: 1, name: "تصميم رقمي يحاكي تناسق الشفاه والفك" },
                { id: 2, name: "خزف إيماكس ألماني عالي الشفافية" },
                { id: 3, name: "تحضير ميكروسكوبي طفيف دون برد جائر " }
            ],
            time: "جلستان (أسبوع واحد)",
        },
        {
            id: 2, img: ServiceImg2, icon: ServiceIcon2,
            title: "زراعة الأسنان الفورية الموجهة رقمياً",
            description: `تقنية الجراحة الموجهة بالكمبيوتر لوضع الزرعات بدقة
                            مليمترية بدون شق جراحي أو خياطة، مع إمكانية
                            التحميل الفوري للسن في نفس الجلسة`,
            benfits: [
                { id: 1, name: "زرعات تيتانيوم وزركونيا سويسرية معتمدة" },
                { id: 2, name: "فترة تعافي قياسية دون تورم أو نزيف" },
                { id: 3, name: "دليل جراحي رقمي مطبوع بتقنية ثلاثي الابعاد" }
            ],
            time: `جلسة واحدة (30 دقيقة)`
        },
        {
            id: 3, img: ServiceImg3, icon: ServiceIcon3,
            title: "تقويم الأسنان الشفاف",
            description: `قوالب شفافة متحركة تصنع خصيصاً لتعديل اصطفاف
                            الأسنان بأريحية ونظافة تامة بدون أسلاك أو حاصرات
                            معدنية محرجة`,
            benfits: [
                {
                    id: 1, name: `خطة ثلاثية الأبعاد لرؤية النتيجة مسبقاً`
                },
                { id: 2, name: "قابلة للإزالة أثناء تناول الطعام وتنظيف الأسنان" },
                { id: 3, name: "متابعة ذكية عن بعد عبر التطبيق الذكي" }
            ],
            time: "6 - 14 شهراً",
        },
        {
            id: 4, img: ServiceImg4, icon: ServiceIcon4,
            title: "علاج الجذور بالميكروسكوب الجراحي",
            description: `إنقاذ الأسنان الطبيعية بدقة فائقة باستخدام مجهر التكبيري، لتنظيف القنوات المجهرية بدقة ومعالجة الالتهاب بضمان ممتد`,
            benfits: [
                {
                    id: 1, name: "تكبير حتى 25 ضعفاً لكشف القنوات الإضافية"
                },
                { id: 2, name: "حشو حراري هيدروليكي يمنع عودة البكتيريا تماماً" },
                { id: 3, name: "تخدير موضعي إلكتروني لا يسبب أي وخز إبري" }
            ],
            time: "جلسة واحدة (60 دقيقة)",
        },
        {
            id: 5, img: ServiceImg5, icon: ServiceIcon5,
            title: "علاج وتبييض الأسنان بالليزر",
            description: `تقنية الضوء والماء المبتكرة لعلاج التسوسات وتوريد
                            اللثة وتبييض المينا بدون حرارة أو اهتزازات الحفار
                            المزعجة ودون الحاجة لتخدير`,
            benfits: [
                { id: 1, name: "تفتيح فعال بدرجات تصل إلى 8 درجات بياض" },
                { id: 2, name: "قص وتنسيق الابتسامة اللثوية بدون قطب جراحية" },
                {
                    id: 3, name: `تطهير عميق للجيوب اللثوية وقتل البكتيريا
                        ` }
            ],
            time: "جلسة واحدة (45 دقيقة)",
        },
        {
            id: 6, img: ServiceImg6, icon: ServiceIcon6,
            title: "طب أسنان الأطفال والوقاية التفاعلية",
            description: `عيادات مصممة لكسر حاجز الرهبة لدى الصغار بنظارات
                        واقع افتراضي، وعلاجات وقائية ذكية تشمل سد
                        الشقوق وتطبيق الفلورايد الفسفوري`,
            benfits: [
                { id: 1, name: "أساليب إدارة السلوك الإيجابي مع استشاريي أطفال" },
                { id: 2, name: "غاز الضحك المهدئ  لحالات القلق" },
                {
                    id: 3, name: "تيجان زركونيا تجميلية للأسنان اللبنية"
                }
            ],
            time: "جلسة واحدة (30 دقيقة)",
        },
        {
            id: 7, img: ServiceImg7, icon: ServiceIcon7,
            title: "جراحة الفم وزراعة العظام بالبيزو",
            description: `قلع أضراس العقل المطمورة المعقدة وترميم عظام
                        الفك ورفع الجيوب الأنفية بجهاز الموجات فوق الصوتية
                        لحماية الأنسجة الرخوة`,
            benfits: [
                {
                    id: 1, name: `قطع العظم الانتقائي دون المساس بالأعصاب الحساسة`
                },
                {
                    id: 2, name: `تقنية حقن البلازما الغنية بالصفائح لتسريع الالتئام`
                },
                {
                    id: 3, name: `تخطيط ثلاثي الأبعاد مقطعي عالي الوضوح`
                }
            ],
            time: "جلسة واحدة (45 دقيقة)",
        },
        {
            id: 8, img: ServiceImg8, icon: ServiceIcon8,
            title: "تنظيف الأسنان المتقدم وعلاج حساسية اللثة",
            description: `إزالة التكلسات الجيرية الدقيقة بأحدث تقنيات تيار
                            الهواء السويسري  اللطيف على مينا
                            الأسنان، مع جلسة حماية مركزة ضد الحساسية`,
            benfits: [
                {
                    id: 1, name: `إزالة التصبغات الصعبة الناتجة عن القهوة والتدخين`
                },
                {
                    id: 2, name: `تلميع ناعم بالبودرة العضوية متناهية الصغر`
                },
                {
                    id: 3, name: `تطبيق محلول إعادة التمعدن وحماية عنق الأسنان`
                }
            ],
            time: "جلسة واحدة (30 دقيقة)",
        },
    ]
    return (
        <section className="all-services-section w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bg1)">
            <div className="container w-full h-full">
                <div className="col-heading w-full h-full flex justify-between flex-row-reverse items-end">
                    <div className="flex flex-col gap-2 items-end">
                        <span className="text-[14px] lg:text-[16px] font-semibold text-(--textcolor2)">منظومة الرعاية المتخصصة</span>
                        <p className="text-[14px] lg:text-[16px] text-(--textcolor1)">استكشف حلولنا السريرية المبتكرة</p>
                    </div>
                    <p className="w-full md:w-[45%] text-end text-[14px] lg:text-[16px] text-(--linkcolor)">تعتمد كافة أقسامنا على بروتوكولات تعقيم صارمة، وطاقم من الاستشاريين
                        المتخصصين مع محاكاة ثلاثية الأبعاد قبل بدء العلاج</p>
                </div>
                <div className="all-services pt-10 lg:pt-14 w-full h-full flex flex-row-reverse flex-wrap justify-start gap-8">
                    {allServices.map((service, index) => {
                        return (
                            <div key={service.id} className="col-service w-[30%] bg-white p-7 rounded-3xl flex flex-col gap-6 items-end">
                                <div className="col-img-service w-full flex flex-row-reverse items-center justify-between">
                                    <img src={service.img} alt="service-img" />
                                    <img src={service.icon} alt="service-icon" />
                                </div>
                                <h2 className="title-service text-[16px] text-(--textcolor1) text-end">{service.title}</h2>
                                <p className="description-service text-[16px] text-(--linkcolor) text-end">{service.description}</p>
                                <div className="all-benfits flex flex-col gap-2.5">
                                    {service.benfits.map((item, index) => {
                                        return (
                                            <div key={item.id} className="col-benfit w-full flex flex-row-reverse items-center gap-2">
                                                <img src={CheckIcon} alt="icon-check" />
                                                <p className="text-[16px] text-(--headingcolor) text-end">{item.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-time w-full p-4 bg-(--bgsection) flex flex-row-reverse justify-between items-center rounded-2xl">
                                    <p className="text-[16px] text-(--linkcolor)">:متوسط المدة</p>
                                    <div className="flex flex-row-reverse gap-1 items-center">
                                        <img src={TimeIcon} alt="time-icon" />
                                        <p className="text-[16px] text-(--textcolor1) font-semibold">{service.time}</p>
                                    </div>
                                </div>
                                <Link to={"/ordernow"}
                                    onClick={() => {
                                        window.scrollTo({ top: 0 })
                                    }}
                                    className="w-full pt-3 pb-3 pl-4 pr-4 bg-(--textcolor1) rounded-2xl text-center text-[16px]  text-white">تفاصيل وحجز استشارة</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
export default AllServicesSection;