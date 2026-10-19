import OurTeams from "../components/our-teams";
import AboutusOrdernow from "../components/aboutus-ordernow";
import AboutHero from "../components/about-hero";
import AboutHistory from "../components/about-history";
import AboutNewTools from "../components/about-newTools";
import AboutOurValues from "../components/about-ourValues";
import AboutBestRating from "../components/about-bestrating";
import Footer from "../components/footer";
function About() {
    return (
        <>
            <AboutHero />
            <AboutHistory />
            <AboutOurValues />
            <OurTeams />
            <AboutNewTools />
            <AboutBestRating />
            <AboutusOrdernow />
            <Footer />
        </>
    )
}
export default About;