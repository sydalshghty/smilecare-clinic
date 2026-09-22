import contactusbg from "../assets/bg-contactus.png";
import HeadingSection from "./heading-section";
function ContactUsHeading() {
    const title1 = "نبقى على تواصل";
    const title2 = "نحن هنا للاجابة علي جميع استفساراتك وتقديم الرعاية التي تستحقها";
    const description = "فريقنا الطبي المتميز وممثلو خدمة العملاء مستعدون دائما لمساعدتك في حجز موعدك او الاجابة عن اي اسئلة طبية";
    return (
        <section className="contact-us-heading relative h-full  text-center pt-10 pb-10 lg:pt-20 lg:pb-20 -z-10">
            <img src={contactusbg} alt="contact-us-bg" className="absolute top-0 left-0 w-full" />
            <div className="col-heading absolute w-full h-full pl-5 pr-5">
                <HeadingSection title1={title1} title2={title2} description={description} />
            </div>
        </section>
    )
}
export default ContactUsHeading;