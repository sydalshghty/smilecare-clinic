import HeadingOrderNow from "../components/heading-ordernow";
import FormOrderNow from "../components/form-ordernow";
import BenfitsOrderNow from "../components/benfits-ordernow";
function OrderNow() {
    return (
        <>
            <HeadingOrderNow />
            <div className="form-benfits-ordernow w-full h-full bg-(--bg1)  pb-12  lg:pb-24">
                <div className="container w-full h-full flex flex-row-reverse gap-8">
                    <FormOrderNow />
                    <BenfitsOrderNow />
                </div>
            </div>
        </>
    )
}
export default OrderNow;