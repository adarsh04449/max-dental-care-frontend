import React from "react";
import "./contact.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Map from "./Map";

import { Phone, MapPin, Clock } from "lucide-react"; 
import ContactForm from "./ContactForm";


const Contact = () => {
    return (
        <>
        <div className="contact-container fade-in px-5 py-5">
            <h1 className="contact-header text-center mb-3">Get in Touch</h1>
            <p className="contact-intro text-center mb-4">
                We look forward to meeting you and your family, and helping you achieve the oral health and beautiful smile you deserve.
            </p>

            <div className="contact-grid">
                {/* Location */}
                <motion.div whileHover={{ scale: 1.03 }}>
                    <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05} transitionSpeed={450}>
                        <div className="contact-card">
                        <MapPin className="contact-icon" />
                        <h3>Our Location</h3>
                        <p>
                            Dr. Neeta Sinha <br/>
                            Max Dental Care<br />
                            Plot 21, Opposite Moinul Haq Stadium<br />
                            Rajendra Nagar, Patna <br />
                            Bihar 800016
                        </p>
                        </div>
                    </Tilt>
                </motion.div>

                {/* Phone Numbers */}
                <motion.div whileHover={{ scale: 1.03 }}>
                    <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05} transitionSpeed={450}>
                        <div className="contact-card">
                        <Phone className="contact-icon" />
                        <h3>Call Us</h3>
                        <p>+91 9835496069<br />+91 9534042400</p>
                        <a href="tel:9835496069" className="call-button">
                            Call Now
                        </a>
                        </div>
                    </Tilt>    
                </motion.div>

                {/* Hours */}
                <motion.div whileHover={{ scale: 1.03 }}>
                    <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05} transitionSpeed={450}>
                        <div className="contact-card">
                        <Clock className="contact-icon" />
                        <h3>Office Hours</h3>
                        <p>
                            Mon–Sat: 3:00 PM – 8:00 PM<br />
                            Sunday: Closed
                        </p>
                        </div>
                    </Tilt>
                </motion.div>
            </div>
            </div>
            <ContactForm/>
            <Map></Map>
        </>
    );
};

export default Contact;
