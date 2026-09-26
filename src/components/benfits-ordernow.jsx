import iconBenfit1 from "../assets/icon-benfit-1.svg";
import iconBenfit2 from "../assets/icon-benfit-2.svg";
import iconBenfit3 from "../assets/icon-benfit-3.svg";
import clinicImg from "../assets/clinic-img.png";
function BenfitsOrderNow() {
    return (
        <div className="benfits-ordernow flex flex-col gap-6">
            <div className="col-benfits bg-(--bgsection) p-6 rounded-xl flex flex-col gap-4">
                <h1 className="text-2xl text-(--textcolor1) font-semibold text-end">مميزات الحجز لدينا</h1>
                <div className="col-benfit flex flex-row-reverse items-center gap-4">
                    <img src={iconBenfit1} alt="icon-benfit" />
                    <div className="col-text text-end">
                        <h2 className="text-[14px] text-(--headingcolor) font-medium">تذكير بالموعد</h2>
                        <p className="text-[14px] text-(--linkcolor)">سنقوم بإرسال رسالة نصية لتذكيرك بموعدك قبل
                            24 ساعة
                        </p>
                    </div>
                </div>
                <div className="col-benfit flex flex-row-reverse items-center gap-4">
                    <img src={iconBenfit2} alt="icon-benfit" />
                    <div className="col-text text-end">
                        <h2 className="text-[14px] text-(--headingcolor) font-medium">مرونة في إعادة الجدولة</h2>
                        <p className="text-[14px] text-(--linkcolor)">يمكنك تغيير موعدك بسهولة عبر الهاتف أو الموقع</p>
                    </div>
                </div>
                <div className="col-benfit flex flex-row-reverse items-center gap-4">
                    <img src={iconBenfit3} alt="icon-benfit" />
                    <div className="col-text text-end">
                        <h2 className="text-[14px] text-(--headingcolor) font-medium">رعاية متخصصة</h2>
                        <p className="text-[14px] text-(--linkcolor)">نخبة من الأطباء المتخصصين في بيئة معقمة
                            ومريحة
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-img w-full">
                <img src={clinicImg} alt="img" className="w-full h-full object-contain" />
            </div>
        </div>
    )
}
export default BenfitsOrderNow;