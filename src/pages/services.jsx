import HeroServices from "../components/hero-services";
import AllServicesSection from "../components/all-services-section";
import ServiceSectionThree from "../components/service-section3";
import ServiceSectionFour from "../components/service-section-4";
import Footer from "../components/footer";
function Services() {
    return (
        <>
            <HeroServices />
            <AllServicesSection />
            <ServiceSectionFour />
            <ServiceSectionThree />
            <Footer />
        </>
    )
}
export default Services;