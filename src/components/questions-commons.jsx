import HeadingSection from "./heading-section";
import { ChevronDown,ChevronUp } from "lucide-react";
import { useState } from "react";
function QuestionsCommons(){
    const [question_one, setQuestion_one] = useState(false);
    const [question_two, setQuestion_two] = useState(false);
    const [question_three, setQuestion_three] = useState(false);
    const [question_four, setQuestion_four] = useState(false);
    return(
        <section className="questions-commons w-full h-full bg-(--bg1) pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <HeadingSection title2="الأسئلة الشائعة" description=".اجابات علي اكثر الاسئلة التي تصلنا من المراجعين"/>
                <div className="all-common-questions w-full h-full mt-8 lg:mt-16 flex flex-col gap-4">
                    <div className="question-one w-full h-fit">
                        <div className="title-question w-full h-full flex justify-between items-center flex-row-reverse bg-(--bgsection) p-5 cursor-pointer"
                            onClick={() => {
                                setQuestion_one(! question_one);
                            }}
                        >
                            <h1 className="text-[14px] md:text-[18px] text-(--headingcolor)">كيف يمكنني حجز موعد؟</h1>
                            {question_one ? 
                                <ChevronUp className="text-(--textcolor2)"/>
                                :
                                <ChevronDown className="text-(--textcolor2)"/>
                            }
                        </div>
                        <div className={`answer-question bg-white  p-5 text-end text-[14px] md:text-[16px] text-(--linkcolor) ${question_one ? "active" : ""}`} >
                            يمكنك حجز موعد بسهولة من خلال النقر على زر "احجز موعدك الآن" في أعلى الصفحة، أو من خلال الاتصال بنا مباشرة على



                            الرقم الموضح في أسفل الموقع. كما نرحب بزيارتك للعيادة مباشرة
                        </div>
                    </div>
                    <div className="question-two w-full h-fit">
                        <div className="title-question w-full h-full flex justify-between items-center flex-row-reverse bg-(--bgsection) p-5 cursor-pointer"
                            onClick={() => {
                                setQuestion_two(! question_two);
                            }}
                        >
                            <h1 className="text-[14px] md:text-[18px] text-(--headingcolor)">هل تقبلون التأمين الطبي؟</h1>
                            {question_two ? 
                                <ChevronUp className="text-(--textcolor2)"/>
                                :
                                <ChevronDown className="text-(--textcolor2)"/>
                            }
                        </div>
                        <div className={`answer-question bg-white  p-5 text-end text-[14px] md:text-[16px] text-(--linkcolor) ${question_two ? "active" : ""}`} >
                            نعم، نقبل التأمين الطبي لدى عدد من شركات التأمين. يُرجى التواصل معنا للتأكد من تغطية شركة التأمين الخاصة بك والخدمات المشمولة قبل حجز الموعد
                        </div>
                    </div>
                    <div className="question-three w-full h-fit">
                        <div className="title-question w-full h-full flex justify-between items-center flex-row-reverse bg-(--bgsection) p-5 cursor-pointer"
                            onClick={() => {
                                setQuestion_three(! question_three);
                            }}
                        >
                            <h1 className="text-[14px] md:text-[18px] text-(--headingcolor)">ماذا أفعل في حالات طوارئ الأسنان؟</h1>
                            {question_three ? 
                                <ChevronUp className="text-(--textcolor2)"/>
                                :
                                <ChevronDown className="text-(--textcolor2)"/>
                            }
                        </div>
                        <div className={`answer-question bg-white  p-5 text-end text-[14px] md:text-[16px] text-(--linkcolor) ${question_three ? "active" : ""}`} >
                           في حالات طوارئ الأسنان، يُرجى التواصل معنا في أقرب وقت ممكن لتقييم الحالة وتقديم الرعاية المناسبة. إذا كانت الحالة مصحوبة بنزيف شديد، تورم كبير، صعوبة في التنفس أو البلع، فيُنصح بالتوجه فورًا إلى أقرب قسم طوارئ.
                        </div>
                    </div>
                    <div className="question-four w-full h-fit">
                        <div className="title-question w-full h-full flex justify-between items-center flex-row-reverse bg-(--bgsection) p-5 cursor-pointer"
                            onClick={() => {
                                setQuestion_four(! question_four);
                            }}
                        >
                            <h1 className="text-[14px] md:text-[18px] text-(--headingcolor)">متى يجب أن يحضر طفلي لزيارته الأولى لطبيب الأسنان؟</h1>
                            {question_four ? 
                                <ChevronUp className="text-(--textcolor2)"/>
                                :
                                <ChevronDown className="text-(--textcolor2)"/>
                            }
                        </div>
                        <div className={`answer-question bg-white  p-5 text-end text-[14px] md:text-[16px] text-(--linkcolor) ${question_four ? "active" : ""}`} >
                          يُنصح بأن تكون الزيارة الأولى للطفل لطبيب الأسنان عند ظهور أول سن، أو بحلول عمر سنة تقريبًا. تساعد الزيارة المبكرة على متابعة نمو الأسنان، اكتشاف أي مشكلات في مراحلها الأولى، وتعويد الطفل على زيارة طبيب الأسنان بطريقة مريحة وإيجابية.

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default QuestionsCommons;