import { Link } from "react-router-dom";
import doctorImg1 from "../assets/doctor-img-1.png";
import doctorImg2 from "../assets/doctor-img-2.png";
import doctorImg3 from "../assets/doctor-img-3.png";
import doctorImg4 from "../assets/doctor-img-4.png";
function OurTeamsNew() {
    const ourTeams = [
        {
            id: 1, img: doctorImg1, jobTitle: "استشاري جراحة وزراعة الأسنان", name: "د. طارق المنصور", experiense: `البورد الألماني في زراعة الأسنان، 16 عاماً من
            الخبرة الجراحية`},
        {
            id: 2, img: doctorImg2, jobTitle: "استشارية تجميل وتصميم الابتسامة", name: "د. رزان الحكيم", experiense: `الزمالة البريطانية في التركيبات التجميلية وتصميم
            الابتسامة DSD`},
        {
            id: 3, img: doctorImg3, jobTitle: "استشاري تقويم وتعديل الفكين", name: "د. ماجد العصيمي", experiense: `البورد الأمريكي في تقويم الأسنان والوجه،
            ماجستير جامعة ميشيغان`},
        {
            id: 4, img: doctorImg4, jobTitle: "أخصائية طب أسنان الأطفال وذوي الاحتياجات", name: "د. ندى الحربي", experiense: `ماجستير طب أسنان الأطفال، خبيرة في تقنيات
            التهدئة الخالية من الخوف`}
    ]
    return (
        <section className="our-teams-new w-full h-full  pt-10 pb-10 bg-(--bgsection)">
            <div className="container w-full h-full">
                <div className="col-heading w-full flex  flex-col justify-end items-end gap-2">
                    <span className="text-[14px] text-(--textcolor2) font-semibold">الكادر الطبي الأكاديمي</span>
                    <h1 className="text-[20px] lg:text-[32px] font-bold text-(--textcolor1)">نخبة الاستشاريين المشرفين على علاجك</h1>
                    <p className="text-[12px] lg:text-[16px] text-(--linkcolor) text-end">أطباء حاصلون على أعلى الدرجات والزمالات العالمية مع خبرات عملية تمتد لعقود</p>
                </div>
                <div className="all-our-teams w-full flex flex-row-reverse gap-6 mt-6 lg:mt-12">
                    {ourTeams.map((doctor, index) => {
                        return (
                            <div className="col-doctor w-1/4 bg-white rounded-2xl" key={doctor.id}>
                                <div className="col-img w-full h-70">
                                    <img src={doctor.img} alt="doctor-img" className="w-full h-full rounded-tl-2xl rounded-tr-2xl object-cover" />
                                </div>
                                <div className="information-doctor p-5 text-end">
                                    <span className="text-[13px] text-(--textcolor2) font-semibold">{doctor.jobTitle}</span>
                                    <h2 className="text-[18px] text-(--textcolor1)">{doctor.name}</h2>
                                    <p className="text-[13px] text-(--linkcolor)">{doctor.experiense}</p>
                                </div>
                                <div className="col-btn p-5  w-full flex justify-center items-center">
                                    <Link className="bg-[#E6E8EA] h-10 rounded-lg w-full flex justify-center items-center text-[14px] text-(--textcolor1) font-medium" to={'/ordernow'} onClick={() => {
                                        window.scrollTo({ "top": 0 })
                                    }}>
                                        حجز استشارة خاصة
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
export default OurTeamsNew;