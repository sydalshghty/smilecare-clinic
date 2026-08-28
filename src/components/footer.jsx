import logo from "../assets/logo-clinic.svg";
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer(){
    return(
        <section className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="col-profile">
                        <div className="col-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>.نقدم رعاية اسنان متميزة باحدث التقنيات العالمية لضمان ابتسامة صحية ومشرقة لجميع افراد العائلة</p>
                    </div>
                    <div className="col-contact">
                        <h1>تواصل معنا</h1>
                        <div className="col-phone">
                            <Phone/>
                            <p>920000000</p>
                        </div>
                        <div className="col-location">
                            <MapPin />
                            <p>الرياض، حي العليا، شارع التخصصي</p>
                        </div>
                        <a className="email" href="mailto:info@smileclinic.sa">
                            <Mail />
                            <p>info@smileclinic.sa</p>
                        </a>
                    </div>
                    <div className="col-social">
                        <h1>تابعنا</h1>
                        <div className="all-social">
                            <div className="col-social">
                                <FaFacebookF/>
                            </div>
                            <div className="col-social">
                                <FaTwitter/>
                            </div>
                            <div className="col-social">
                                <FaInstagram/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-p">
                    جميع الحقوق محفوظة © 2026 عيادة الابتسامة لطب الأسنان
                </div>
            </div>
        </section>
    )
}
export default Footer;