import HeadingSection from "./heading-section";
import StoryImg1 from "../assets/story-img-.png";
import StoryImg2 from "../assets/story-img-2.png";
import StoryImg3 from "../assets/story-img-3.png";
function StoriesSuccess(){
    const stories = [
        {id: 1, img: StoryImg1, title: "حالة تجميل وتعديل اصطفاف", time: "6 أيام", description: `تم علاج التصبغات وتفاوت أطوال الأسنان بنتيجة فاقت
        توقعاتي دون الإضرار بمينا السن الطبيعي`, doctor: "رزان الحكيم"},
        {id: 2, img: StoryImg2, title: "إعادة تأهيل الفك الكامل", time: "جلسة واحدة" , description: `استعدت القدرة على تناول الطعام والابتسام بثقة
        كاملة من نفس اليوم بفضل التثبيت المباشر`, doctor: "طارق المنصور"},
        {id: 3, img: StoryImg3, title: "تصحيح عضة وازدحام الأسنان", time: "8 اشهر", description: `تجربة سهلة جداً بدون أسلاك ولا جروح في الفم،
        والجميع لم يلاحظ أنني أرتدي قوالب تقويم`, doctor: "ماجد العصيمي"}
    ]
    return(
        <section className="stories-success w-full h-full  pt-10 pb-10 bg-(--bg1)">
            <div className="container">
                <HeadingSection title1="قصص نجاح واقعية" title2="ابتسامات حقيقية صنعت في عيادة الابتسامة" description="شاهد نتائج حية لمرضانا بعد إتمام خططهم العلاجية التجميلية والجراحية"/> 
                <div className="all-stories w-full h-full mt-10 flex flex-row-reverse gap-6">
                    {stories.map((story,index) => {
                        return(
                            <div key={story.id} className="col-story w-1/3 bg-white rounded-2xl">
                                <div className="col-img w-full">
                                    <img src={story.img} alt="img-client"  className="w-full object-contain rounded-t-2xl"/>
                                </div>
                                <div className="col-information p-5 text-end">
                                    <div className="title-time-text flex flex-row-reverse justify-between items-center mb-2">
                                        <p className="text-[15px] lg:text-[18px] text-(--textcolor1) font-medium">{story.title}</p>
                                        <span className="text-[14px] text-(--textcolor2) font-medium">{`مدة العلاج: ${story.time}`}</span>
                                    </div>
                                    <p className="mb-2 text-[14px] text-(--linkcolor)">{story.description}</p>
                                    <p className="pt-4 text-[13px] text-[#727780]">{`إشراف: د. ${story.doctor}`}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>          
            </div>
        </section>
    )
}
export default StoriesSuccess;