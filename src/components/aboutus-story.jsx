import { Link } from "react-router-dom";
import storyImg from "../assets/story-img.svg";
function AboutUSStory(){
    return(
        <section className="about-us-story w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bg1)">
            <div className="container w-full h-full flex  flex-col lg:flex-row-reverse  items-center gap-8 lg:gap-16">
                <div className="col-img-story w-full lg:w-1/2">
                    <img src={storyImg} alt="img-story" className="w-full h-full object-contain"/>
                </div>
                <div className="content-information w-full lg:w-1/2 flex flex-col items-end gap-4 lg:gap-6">
                    <h2 className="text-[14px] text-(--textcolor2) font-medium">قصتنا</h2>
                    <h1 className="text-[22px] lg:text-[32px] text-(--headingcolor) font-bold">تاريخ من الالتزام بالتفوق</h1>
                    <p className="text-end text-[14px] lg:text-[16px] text-(--linkcolor)">تأسست عيادة لومينا برؤية واضحة: تغيير نظرة المجتمع لزيارة طبيب الأسنان من تجربة مقلقة
                     إلى رحلة مريحة ومثمرة نحو صحة فموية ممتازة. منذ يومنا الأول، وضعنا راحة المريض وثقته في
                     صميم كل ما نقوم به
                    </p>
                    <p className="text-end text-[14px] lg:text-[16px] text-(--linkcolor)">
                    رحلتنا تميزت بالاستثمار المستمر في أحدث التطورات التكنولوجية في طب الأسنان، واستقطاب
                    أفضل الكفاءات الطبية. نحن لا نعالج الأسنان فحسب، بل نبني علاقات طويلة الأمد مع مرضانا
                    مبنية على الشفافية والرعاية الصادقة
                    </p>
                    <Link to={"/ordernow"} className="w-36.5 h-12 bg-(--textcolor1) rounded-xl flex justify-center items-center text-white text-[16px]">
                        احجز استشارة
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default AboutUSStory;