import BestRatingImg from "../assets/best-rating-img.svg";
function AboutBestRating() {
    return (
        <section className="best-rating w-full h-full pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div className="container w-full h-full">
                <img src={BestRatingImg} alt="best-rating-img" className="w-full h-full object-contain" />
            </div>
        </section>
    )
}
export default AboutBestRating;