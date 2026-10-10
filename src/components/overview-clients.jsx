import HeadingSection from "./heading-section";
import clientImg1 from "../assets/client-img-1.svg";
import clientImg2 from "../assets/client-img-2.svg";
import clientImg3 from "../assets/client-img-3.svg";
import { FaStar } from "react-icons/fa";
function OverviewClients() {
    const overviewClients = [
        { id: 1, title: "أحمد عبدالله", img: clientImg1, description: '.تجربة رائعة جدا العيادة نظيفة والتعامل راقي جدا. الدكتور امير يده خفيفة ولم اشعر باي الم اثناء خلع ضرس العقل. انصح بهم وبشدة' },
        { id: 2, title: "سارة محمد", img: clientImg2, description: '.افضل عيادة اسنان زرتها. طاقم العمل متعاون جدا والمواعيد دقيقة. عملتت تبيض لاسناني والنتيجة كانت مذهلة فاقت توقعاتي' },
        { id: 3, title: "خالد عبدالرحمن", img: clientImg3, description: '.كنت متخوفا جدا من زراعة الاسنان, لكن بفضل الله ثم خبرة الاطباء هنا, تمت العملية بسهولة ويسر. شكرا لجهودكم' }
    ]
    return (
        <section className="overview-clients w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20 bg-(--bg1)">
            <div className="container w-full h-full">
                <HeadingSection title1="تجارب المراجعين" title2="ماذا يقول مراجعونا في الرياض؟" description="ثقة مراجعينا هي فخرنا ومحور كل تطور نقدمه في عيادتنا" />
                <div className="all-clients-overview mt-6 lg:mt-12 w-full h-full flex flex-row-reverse gap-6">
                    {overviewClients.map((client, index) => {
                        return (
                            <div className="col-client w-1/3 flex flex-col gap-4 justify-end items-end text-end bg-white p-6 rounded-2xl shadow" key={client.id}>
                                <div className="col-stars-icon flex gap-1">
                                    <FaStar className="text-(--textcolor2) w-4 h-4" />
                                    <FaStar className="text-(--textcolor2) w-4 h-4" />
                                    <FaStar className="text-(--textcolor2) w-4 h-4" />
                                    <FaStar className="text-(--textcolor2) w-4 h-4" />
                                    <FaStar className="text-(--textcolor2) w-4 h-4" />
                                </div>
                                <p className="text-[12px] md:text-[16px] text-(--linkcolor)">{client.description}</p>
                                <div className="col-title-client flex flex-row-reverse items-center gap-3 border-t border-[#E6E8EA] w-full pt-4">
                                    <div className="w-fit h-fit md:w-6 md:h-6">
                                        <img src={client.img} alt="client-img" />
                                    </div>
                                    <p className="text-[14px] md:text-[16px] text-(--headingcolor)">{client.title}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}
export default OverviewClients;