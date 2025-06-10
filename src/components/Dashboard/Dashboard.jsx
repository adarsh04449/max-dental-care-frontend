import React from "react";
import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import photo from "../../assets/photo.jpg"
import IconBar from "./Iconbar/IconBar";
import FadeInOnScroll from "../../FadeInOnScroll";
import Footer from "../Footer/Footer";
import AboutUs from "../About/AboutUs";
import Contact from "../Contact/Contact";
import BannerImage from "../Banner/BannerImage";
import ContentCard from "./ContentCard";

const Dashboard = () => {
    FadeInOnScroll();
    return (
        <>
            <Navbar />
            <section className="banner-wrapper block">
                <BannerImage/>
            </section>

            
            <section className="content-section">
                        <h1 className="mt-4 px-2 text-center fade-in">
                        A lifetime of healthy smiles starts at Max Dental Care
                        </h1>

                        <p className="my-4 px-5 text-center fade-in">
                        At Max Dental Care, we believe every visit should be comfortable, personalized,
                        and focused on your long-term wellbeing. From children to seniors, we’re here
                        to provide gentle care, expert treatment, and the one-on-one attention your
                        family deserves—for a lifetime of confident, healthy smiles.
                        </p>

                        <div className="fade-in">
                            <IconBar />
                        </div>



                        <div className="box-layout fade-in">
                            <ContentCard/>

                            <div className="media">
                                <img src={photo} alt="Dental clinic" loading="lazy" className="media-image"/>
                            </div>
                        </div>

                    <div id = "aboutus-section" className="fade-in">
                    <AboutUs id="aboutus-section" />
                    </div>

                <div id="contact-section" className="fade-in">
                    <Contact />
                </div>
            </section>

            <Footer/>
        </>
    )
}


export default Dashboard;