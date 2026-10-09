import HeroSectionNew from "../components/hero-section-new";
import ExperienceClinic from "../components/experience-clinic";
import ServicesNew from "../components/services-new";
import WhyChooseUS from "../components/why-Chooseus";
import StoriesSuccess from "../components/stories-success";
import HeroSection from "../components/hero-section";
import WhyUs from "../components/whyus";
import Services from "../components/services";
import OverviewClients from "../components/overview-clients";
import QuestionsCommons from "../components/questions-commons";
import Footer from "../components/footer";
function Home() {
    return (
        <>
            <HeroSectionNew />
            <ExperienceClinic />
            <ServicesNew />
            <WhyChooseUS/>
            <StoriesSuccess/>
            <Footer />
        </>
    )
}
export default Home;