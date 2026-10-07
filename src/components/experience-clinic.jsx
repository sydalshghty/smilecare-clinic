function ExperienceClinic() {
    return (
        <section className="experience-clinic w-full h-full bg-(--bgsection) pt-5 pb-5 lg:pt-12 lg:pb-12">
            <div className="container w-full h-full flex flex-row-reverse">
                <div className="col-one w-1/4 flex flex-col justify-center items-center" >
                    <span className="text-[22px] lg:text-[40px] font-bold text-(--textcolor1)">+18</span>
                    <p className="text-[12px] lg:text-[14px] text-(--linkcolor) font-medium text-center">عاماً من الريادة الطبية المعتمدة</p>
                </div>
                <div className="col-two w-1/4 flex flex-col justify-center items-center">
                    <span className="text-[22px] lg:text-[40px] font-bold text-(--textcolor2)">+30,000</span>
                    <p className="text-[12px] lg:text-[14px] text-(--linkcolor) font-medium text-center">ابتسامة جديدة تم تصميمها بنجاح</p>
                </div>
                <div className="col-three w-1/4 flex flex-col justify-center items-center">
                    <span className="text-[22px] lg:text-[40px] font-bold text-(--textcolor1)">99.6%</span>
                    <p className="text-[12px] lg:text-[14px] text-(--linkcolor) font-medium text-center">نسبة رضا وتقييمات إيجابية موثقة</p>
                </div>
                <div className="col-four w-1/4 flex flex-col justify-center items-center">
                    <span className="text-[22px] lg:text-[40px] font-bold text-(--textcolor2)">12</span>
                    <p className="text-[12px] lg:text-[14px] text-(--linkcolor) font-medium text-center">عيادة ذكية بأعلى معايير الأمان</p>
                </div>
            </div>
        </section>
    )
}
export default ExperienceClinic;