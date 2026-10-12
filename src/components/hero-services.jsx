import HeroServicesBanner from "../assets/hero-services-banner.png";
import ClinicBadge from "../assets/Clinical Badge.svg";
import benfitIcon1 from "../assets/benfit-service-icon-1.svg";
import benfitIcon2 from "../assets/benfit-service-icon-2.svg";
import benfitIcon3 from "../assets/benfit-service-icon-3.svg";
function HeroServices() {
    const allBenfits = [
        { id: 1, icon: benfitIcon1, title: `فحص رقمي ثلاثي الابعاد مجاني مع الاستشارة` },
        { id: 2, icon: benfitIcon2, title: `أقساط 0% عبر تمارا وتابي` },
        { id: 3, icon: benfitIcon3, title: `شهادة ضمان ممتدة للتركيبات` }
    ]

    const allServices = [
        { id: 1, name: "تجميل وتبييض" },
        { id: 2, name: "زراعة الأسنان" },
        { id: 3, name: "تقويم الأسنان" },
        { id: 4, name: "علاج الجذور والأعصاب" },
        { id: 5, name: "طب أسنان الأطفال" },
        { id: 6, name: "جراحة الفم واللثة" },
    ]
    return (
        <section className="hero-services w-full h-full pt-12 pb-12 lg:pt-24 lg:pb-24">
            <div className="container w-full h-full flex flex-col justify-center items-center gap-6">
                <img src={ClinicBadge} alt="clinic-img" />
                <h1 className="text-[22px] lg:text-[44px] text-(--textcolor1) text-center">رعاية تخصصية شاملة لكل تفاصيل ابتسامتك</h1>
                <p className="text-[13px] lg:text-[16px] text-(--linkcolor) w-full lg:w-[60%] text-center">نقدم في عيادة الابتسامة منظومة متكاملة من أحدث علاجات طب وجراحة وتجميل الأسنان، معتمدة على التقنيات الرقمية المتقدمة
                    لضمان علاج فائق الدقة وبدون ألم</p>
                <div className="all-benfits w-full h-full flex flex-row-reverse justify-center gap-4 mt-5">
                    {allBenfits.map((item, index) => {
                        return (
                            <div key={item.id} className="col-benfit p-3.5 bg-white rounded-2xl flex flex-row-reverse items-center gap-3 shadow min-h-[76px]">
                                <img src={item.icon} alt="benfit-img" />
                                <p className="text-[14px] lg:text-[16px] text-(--headingcolor) text-center">{item.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="all-services  h-full flex justify-center items-center flex-row-reverse gap-5 p-6 bg-white shadow w-full lg:w-[70%] rounded-3xl flex-wrap mt-5">
                    <div className="num-services h-10 pl-5 pr-5 pt-2 pb-2 rounded-full bg-(--textcolor1)">
                        <p className="text-[14px] lg:text-[16px] text-white">{`الكل (${allServices.length})`}</p>
                    </div>
                    {allServices.map((service, index) => {
                        return (
                            <div key={service.id} className="col-service w-fit h-10 pt-2 pb-2 pl-5 pr-5 bg-(--bgIcon) flex justify-center items-center rounded-full ">
                                <p className="text-[14px] lg:text-[16px] text-(--headingcolor)">{service.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default HeroServices;
