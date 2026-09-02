import imgDoctor1 from "../assets/img-doctor-1.png";
import imgDoctor2 from "../assets/img-doctor-2.png";
import imgDoctor3 from "../assets/img-doctor-3.png";

function OurTeams() {
    const ourTeamsInformation = [
        { id: 1, img: imgDoctor1, name: "د. أمير حسن", jobtitle: "استشاري تركيبات وزراعة الأسنان", experience: "يمتلك خبرة تزيد عن 15 عاما في طب الاسنان التجميلي وزراعة الاسنان. متخصص في تصميم الابتسامة الرقمي واستعادة الوظائف الفموية باعلي معايير الدقة" },
        { id: 2, img: imgDoctor2, name: "د. سارة خالد", jobtitle: "أخصائية تقويم الأسنان", experience: "خبيرة في احدث تقنيات التقويم الشفاف والتقويم المعدني التقليدي. شغوفة بمساعدة المرضي, خاصة الاطفال والمراهقين, في الحصول علي ابتسامة" },
        { id: 3, img: imgDoctor3, name: "د. طارق محمود", jobtitle: "أخصائي علاج الجذور", experience: "متخصص في انقاذ الاسنان المتضررة بشدة واجراء علاجات العصب الدقيقة باستخدام الميكروسكوب الجراحي, لضمان اعلي نسب النجاح واقل قدر من الام" }
    ]
    return (
        <section className="our-teams w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <div className="col-heading flex flex-col gap-1 w-full h-full justify-end items-end">
                    <span className="text-[14px] text-(--textcolor2) font-medium">فريق العمل</span>
                    <h1 className="text-[22px] md:text-[32px] text-(--headingcolor) font-bold">نخبة من أطباء الأسنان</h1>
                </div>
                <div className="all-our-teams mt-8 md:mt-12 flex flex-row-reverse gap-8">
                    {ourTeamsInformation.map((doctor, index) => {
                        return (
                            <div key={doctor.id} className="col-doctor w-full md:w-1/3 lg:w:1/2 rounded-2xl shadow">
                                <div className="col-img mb-6 w-full">
                                    <img src={doctor.img} alt="doctor-img" className="w-full h-full rounded-t-2xl" />
                                </div>
                                <div className="col-information pl-5 pr-5 pb-5">
                                    <h2 className="name-doctor text-2xl text-( --headingcolor) mb-2 text-end">{doctor.name}</h2>
                                    <p className="job-title-doctor text-[14px] text-(--textcolor1) mb-2 text-end">{doctor.jobtitle}</p>
                                    <p className="description-job text-[16px] text-(--linkcolor) text-end">{doctor.experience}</p>
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