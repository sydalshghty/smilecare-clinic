import HeroSection from "../components/hero-section";
import WhyUs from "../components/whyus";
import Services from "../components/services";
import OverviewClients from "../components/overview-clients";
import QuestionsCommons from "../components/questions-commons";
import Footer from "../components/footer";
function Home() {
    return (
        <>
            <HeroSection />
            <WhyUs />
            <Services />
            <OverviewClients/>
            <QuestionsCommons/>
            <Footer/>
        </>
    )
}
export default Home;