function AboutUsHero(){
    return(
        <section className="aboutus-hero w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bg1)">
            <div className="container w-full h-full flex flex-col gap-6 justify-center items-center">
                <h2 className="text-[14px] text-(--textcolor1) font-bold">رؤيتنا</h2>
                <h1 className="text-[22px] md:text-[32px] text-(--headingcolor) font-bold text-center">تعرف على عيادة الابتسامة لطب الأسنان</h1>
                <p className="text-[14px] md:text-[18px] text-(--linkcolor) text-center w-full lg:w-[65%]">نلتزم بتقديم رعاية اسنان ذات مستوي عالمي بلمسة انسانية, نجمع بين احدث التقنيات والخبرة الطبية العميقة لضمان حصولك علي ابتسامة صحية ومشرقة تدوم طويلا</p>
            </div>
        </section>
    )
}
export default AboutUsHero;