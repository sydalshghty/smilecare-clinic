import TeamIcon from "../assets/team-icon.svg";
import imgDoctor1 from "../assets/doctor-bg-1.png";
import imgDoctor2 from "../assets/doctor-bg-2.png";
import imgDoctor3 from "../assets/doctor-bg-3.png";
import { Link } from "react-router-dom";
import orderIcon from "../assets/order-icon-new.svg";
function OurTeams() {
    const ourTeamsInformation = [
        { id: 1, img: imgDoctor1, name: "د. أمير حسن", jobtitle: "استشاري تركيبات وزراعة الأسنان", experience: "يمتلك خبرة تزيد عن 15 عاما في طب الاسنان التجميلي وزراعة الاسنان. متخصص في تصميم الابتسامة الرقمي واستعادة الوظائف الفموية باعلي معايير الدقة" },
        { id: 2, img: imgDoctor2, name: "د. سارة خالد", jobtitle: "أخصائية تقويم الأسنان", experience: "خبيرة في احدث تقنيات التقويم الشفاف والتقويم المعدني التقليدي. شغوفة بمساعدة المرضي, خاصة الاطفال والمراهقين, في الحصول علي ابتسامة" },
        { id: 3, img: imgDoctor3, name: "د. طارق محمود", jobtitle: "أخصائي علاج الجذور", experience: "متخصص في انقاذ الاسنان المتضررة بشدة واجراء علاجات العصب الدقيقة باستخدام الميكروسكوب الجراحي, لضمان اعلي نسب النجاح واقل قدر من الام" }
    ]
    return (
        <section className="our-teams w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <div className="col-heading flex flex-col gap-2 w-full h-full justify-end items-end">
                    <div className="col-title flex flex-row-reverse gap-2">
                        <img src={TeamIcon} alt="team-icon" />
                        <span className="text-[14px] font-bold text-(--textcolor2)">فريق النخبة الطبي</span>
                    </div>
                    <h1 className="text-[18px] lg:text-[32px] font-bold text-(--headingcolor) text-end">أطباء استشاريون يحملون أرقى البوردات العالمية</h1>
                    <p className="text-[14px] lg:text-[16px] text-(--linkcolor) text-end">نجمع أفضل الكفاءات الأكاديمية والسريرية تحت سقف واحد لتقديم استشارات وخطط علاجية تكاملية</p>
                </div>
                <div className="all-our-teams mt-8 md:mt-12 flex flex-row-reverse gap-8">
                    {ourTeamsInformation.map((doctor, index) => {
                        return (
                            <div key={doctor.id} className="col-doctor w-full max-w-92.75 rounded-2xl shadow">
                                <div className="col-img mb-6 w-fit h-fit">
                                    <img src={doctor.img} alt="doctor-img" className="w-full h-full rounded-t-2xl object-cover" />
                                </div>
                                <div className="col-information pl-5 pr-5 pb-5">
                                    <h2 className="name-doctor text-[15px] lg:text-[20px] font-bold text-( --headingcolor) mb-2 text-end">{doctor.name}</h2>
                                    <p className="job-title-doctor text-[14px] font-semibold text-(--textcolor1) mb-2 text-end">{doctor.jobtitle}</p>
                                    <p className="description-job text-[14px] text-(--linkcolor) text-end pt-2">{doctor.experience}</p>
                                </div>
                                <div className="ordernow-btn p-5">
                                    <Link to={'/ordernow'} onClick={() => {
                                        window.scrollTo({ top: 0 })
                                    }}
                                        className="mb-5 w-full h-11.5 flex flex-row-reverse justify-center items-center gap-2 border border-(--textcolor1) rounded-2xl"
                                    >
                                        <img src={orderIcon} alt="order-icon" />
                                        <p>حجز استشارة مع الطبيب</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default OurTeams;