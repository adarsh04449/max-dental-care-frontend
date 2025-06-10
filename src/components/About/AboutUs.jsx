import React from "react"
import "./aboutus.css"
import doctorImg from "../../assets/neeta-sinha.jpeg"
import image6 from "../../assets/max-dental-care-6.jpeg";
import image7 from "../../assets/max-dental-care-7.jpeg";


const AboutUs = () => {
    return (
        <div>
            <h1 style={{textDecoration:"underline", textDecorationThickness:"2px"}}>About Us</h1>
            <div className="aboutus-block">
                <div className="content">
                    <h2>A commitment to high quality, personalized care</h2>
                    <p>We are dedicated to ensuring you receive the dental care you need and deserve. Whether that’s through regularly scheduled dental cleanings, restorative care, or cosmetic dentistry options such as crowns, bridges, veneers or more, we’re committed to helping our patients achieve a healthy and aesthetically pleasing smile—for life.</p>
                </div>

                <div className="image">
                    <img src={image6} alt="" className="aboutus-image"/>
                </div>
            </div>

            <div className="aboutus-block doctor">
                <div className="image">
                    <img src={doctorImg} alt="" className="aboutus-image"/>
                </div>

                <div className="content" style={{textAlign:"left"}}>
                    <h2>Dr. Neeta Sinha</h2>
                    <p>
                        Dr. Neeta Sinha is working as Prosthodontist specialised in crown and bridge, implant surgery, CAD-CAM system , digital intra oral scanning, 3D printer. Dr. Neeta has an academic background, serving as an Professor at the Buddha Institute of Dental Sciences & Hospital and has more than 50 papers published in peer reviewed journals.
                    </p>
                </div>
            </div>
        </div>
    )
    
}
export default AboutUs;