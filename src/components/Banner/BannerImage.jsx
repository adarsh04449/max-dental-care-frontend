import { useState, useEffect, React } from "react";
import image1 from "../../assets/max-dental-care-1.jpeg";
import image2 from "../../assets/max-dental-care-2.jpeg";
import image3 from "../../assets/max-dental-care-3.jpeg";
import image4 from "../../assets/max-dental-care-4.jpeg";
import image5 from "../../assets/max-dental-care-5.jpg";
import image8 from "../../assets/max-dental-care-8.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image8
];

const BannerImage = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="image-container">
            <AnimatePresence mode="wait">
            <motion.img
                key={images[index]}
                src={images[index]}
                className="dashboard-image"
                alt={`slide-${index}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8}}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
            </AnimatePresence>

            {/* <img
                src={images[index]}
                className="dashboard-image"
                alt="Dental Care Banner"
            /> */}
        </div>
    )

};

export default BannerImage;