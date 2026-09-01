import HeadingSection from "./heading-section";
import valueImg1 from "../assets/values-img-1.svg";
import valueImg2 from "../assets/values-img-2.svg";
import valueImg3 from "../assets/values-img-3.svg";
function OurValues(){
    const ourValues = [
        {id: 1, icon: valueImg1, title: "الاحترافية" , description: ".التزام صارم باعلي المعايير الطبية العالمية. تقديم تشخيصات دقيقة وخطط علاجية موثوقة مبنية علي الادلة العلمية"},
        {id: 2, icon: valueImg2, title: "الرعاية الشخصية", description: ".نومن بان كل مريض فريد من نوعه. نستمع لاحتياجاتك ونصمم رحلة علاجية تتناسب مع ظروفك وتوقعاتك الخاصة بكل عناية"},
        {id: 3, icon: valueImg3, title: "الابتكار", description: ".نسعي دائما لاعتماد احدث تقنيات طب الاسنان, لضمان علاجات اسرع, اقل الما, وذات نتائج تجميلية ووظيفية استثنائية"}
    ]
    return(
        <section className="our-values w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bgsection)">
            <div className="container">
                <HeadingSection title1="مبادئنا" title2="القيم التي تحركنا"/>
                <div className="our-values-content w-full h-full flex flex-row-reverse  justify-center gap-8 pt-8 lg:pt-16">
                    {ourValues.map((value,index) => {
                        return(
                        <div key={value.id} className="col-our-value w-full md:1/2 lg:w-1/3 bg-white rounded-2xl p-8 flex flex-col gap-4 justify-center items-center">
                            <div className="col-icon w-10 h-10 lg:w-fit lg:h-fit">
                                <img src={value.icon} alt="icon-img" />
                            </div>
                            <h2 className="text-[18px] lg:text-2xl text-(--headingcolor)">{value.title}</h2>
                            <p className="text-[12px] lg:text-[16px] text-(--linkcolor) text-center">{value.description}</p>
                        </div>
                     )
                    })}
                </div>
            </div>
        </section>
    )
}
export default OurValues;