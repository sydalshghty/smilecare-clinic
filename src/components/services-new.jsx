import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import serviceIcon1 from "../assets/service-icon-1.svg";
import serviceIcon2 from "../assets/service-icon-222.svg";
import serviceIcon3 from "../assets/service-icon-33.svg";
import serviceIcon4 from "../assets/service-icon-44.svg";
import serviceIcon5 from "../assets/service-icon-55.svg";
import serviceIcon6 from "../assets/service-icon-66.svg";
function ServicesNew() {
    const services = [
        {
            id: 1,
            title: "تصميم الابتسامة وفينير البورسلين",
            description: `استخدام تقنية التصميم الرقمي للابتسامة لمحاكاة ورسم شكل الابتسامة مسبقًا، مع تصنيع عدسات إي ماكس الألمانية فائقة الرقة، التي تتميز بالقوة ومقاومة التصبغات، للحصول على ابتسامة طبيعية ومتناسقة`,
            icon: serviceIcon1,
            notes: "جلسة محاكاة ثلاثية الأبعاد مجانية"
        },
        {
            id: 2,
            title: "الزراعة الفورية وجراحة اللثة",
            description: `تعويض الأسنان المفقودة وتثبيت الزرعات السويسرية في يوم واحد بتقنية البيزو الموجهة جراحياً بالموجات  فوق الصوتية دون جروح عميقة`,
            icon: serviceIcon2,
            notes: "ضمان مدى الحياة للزرعات"
        },
        {
            id: 3,
            title: "التقويم الشفاف غير المرئي",
            description: `نظام التقويم الشفاف المعتمد عالميًا لتعديل إطباق وتراصف الأسنان بدون أسلاك معدنية، باستخدام قوالب شفافة ومريحة قابلة للفك والتركيب بسهولة، للحصول على ابتسامة أكثر انتظامًا بشكل عملي وغير ملحوظ`,
            icon: serviceIcon3,
            notes: "خطة علاج رقمية متزامنة"
        },
        {
            id: 4,
            title: "علاج العصب والجذور بالمجهر",
            description: `تنظيف وحشو القنوات العصبية تحت الميكروسكوب
                        الجراحي في جلسة واحدة فقط، بنسبة نجاح تفوق
                        98% وتجربة غير مؤلمة بالكامل`,
            icon: serviceIcon4,
            notes: "إنهاء الإجراء بجلسة واحدة"
        },
        {
            id: 5,
            title: "تبييض وتوريد اللثة بالليزر",
            description: `تقنية الليزر المائي المتطورة لتوريد اللثة وإزالة
                        التصبغات الداكنة وتبييض الأسنان خلال 45 دقيقة
                        دون إحساس بالحساسية المزعجة`,
            icon: serviceIcon5,
            notes: "نتائج فورية وطبيعية"
        },
        {
            id: 6,
            title: "عيادة أسنان الأطفال التفاعلية",
            description: `بيئة مهيأة خصيصاً للأطفال مع شاشات تفاعلية وأطباء مؤهلين في التعامل مع رهاب الأطفال لتجربة إيجابية تمنحهم الثقة`,
            icon: serviceIcon6,
            notes: "بيئة مرحة بدون قلق"
        }
    ]
    return (
        <section className="services-new-section w-full h-full  pt-10 pb-10 bg-(--bg1)">
            <div className="container w-full h-full">
                <div className="heading-services w-full h-full flex flex-row-reverse justify-between items-end">
                    <div className="heading-content flex flex-col gap-2 justify-end items-end">
                        <span className="text-[12px] lg:text-[14px] text-(--textcolor2) font-semibold">الخدمات الإكلينيكية المتقدمة</span>
                        <h1 className="text-[20px] lg:text-[32px] font-bold text-(--textcolor1) text-end">تخصصات دقيقة تُدار بأنامل استشارية</h1>
                        <p className="text-[14px] lg:text-[16px] text-(--linkcolor) text-end">نعتمد أرقى المعايير الطبية العالمية وأحدث بروتوكولات العلاج الرقمي لضمان الدقة والراحة التامة</p>
                    </div>
                    <Link
                        className="flex gap-2 items-center"
                        to={'/services'} onClick={() => {
                            window.scrollTo({ top: 0 })
                        }}>
                        <FaArrowLeft className="mt-1 text-(--textcolor1)" />
                        <p className="text-[12px] lg:text-[14px] text-(--textcolor1) font-semibold">عرض جميع الخدمات التخصصية</p>
                    </Link>
                </div>
                <div className="all-services-new w-full h-full pt-6 lg:pt-12 flex flex-wrap flex-row-reverse gap-6">
                    {services.map((service, index) => {
                        return (
                            <div className="col-service-new p-4 w-[368px] h-[360px]  bg-white rounded-2xl flex flex-col justify-between items-end gap-6" key={service.id}>
                                <div className="information-service text-end flex flex-col gap-4 justify-end items-end">
                                    <img src={service.icon} alt="icon-service" className="" />
                                    <h1 className="text-lg lg:text-2xl text-(--textcolor1) font-semibold">{service.title}</h1>
                                    <p className="text-[14px] lg:text-[16px] text-(--linkcolor)">{service.description}</p>
                                </div>
                                <span className="mt-4 text-[12px] lg:text-[14px] text-(--textcolor2) font-semibold">{service.notes}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default ServicesNew;