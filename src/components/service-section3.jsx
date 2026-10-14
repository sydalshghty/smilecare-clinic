import HeadingSection from "./heading-section";
import journayIcon1 from "../assets/journay-icon-1.svg";
import journayIcon2 from "../assets/journay-icon-2.svg";
import journayIcon3 from "../assets/journay-icon-3.svg";
import journayIcon4 from "../assets/journay-icon-4.svg";
function ServiceSectionThree() {
    const allServices = [
        {
            id: 1, icon: journayIcon1, name: "المسح الرقمي ثلاثي الأبعاد", description: `استبدال القوالب المعجونية التقليدية
            بماسح ضوئي ذكي يلتقط 6000 صورة
            بالثانية لرسم خريطة رقمية لأسنانك
            بدقة متناهية`},
        {
            id: 2, icon: journayIcon2, name: "الاستشارة والخطة المشتركة", description: `جلسة مريحة مع الاستشاري لمناقشة
            تطلعاتك ومراجعة المحاكاة الافتراضية
            قبل بدء أي تدخل علاجي لضمان
            توافق النتيجة مع رغبتك`},
        {
            id: 3, icon: journayIcon3, name: "العلاج الدقيق بدون ألم", description: `تنفيذ العلاج بأيدي أطباء استشاريين
            باستخدام الليزر والميكروسكوب
            والتخدير الموضعي الرقمي لضمان
            أقصى درجات الراحة والهدوء`},
        {
            id: 4, icon: journayIcon4, name: "المتابعة وضمان الجودة", description: `تسليم بطاقة الضمان المعتمدة مع
                جدول زيارات متابعة دورية مجانية
                وتوصيات عناية منزلية مخصصة
                للحفاظ على رونق النتيجة لسنوات`}
    ]
    return (
        <section className="service-section-three w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bg1)">
            <div className="container">
                <HeadingSection title1="رحلة علاجية مريحة ومنظمة" title2="مسار رحلتك في عيادة الابتسامة" description="نحرص على أن تكون كل خطوة واضحة ومريحة وموثقة، لتشعر بالاطمئنان والتحكم التام في كل مرحلة" />
                <div className="all-services-section3 pt-8 lg:pt-16 w-full h-full flex flex-row-reverse gap-5">
                    {allServices.map((service, index) => {
                        return (
                            <div key={service.id} className="col-service p-6 bg-white rounded-3xl flex flex-col justify-start items-end text-end">
                                <img src={service.icon} alt="service-img" className="mb-6" />
                                <h1 className="mb-3 text-[15px] lg:text-[20px] text-(--textcolor1)">{service.name}</h1>
                                <p className="text-[13px] lg:text-[16px] text-(--linkcolor)">{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default ServiceSectionThree;