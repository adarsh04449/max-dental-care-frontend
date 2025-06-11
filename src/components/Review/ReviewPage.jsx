import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ReviewForm from "./ReviewForm";
import "./reviewPage.css";
import Footer from "../Footer/Footer"
import axios from "axios";
import Rating from "@mui/material/Rating";
import image from "../../assets/max-dental-care-3.jpeg";

const ReviewPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");
  const [reviews, setReviews] = useState([]);

  const toggleForm = () => setShowForm(!showForm);
  const closeForm = () => setShowForm(false);

  const allReviews = async() => {
    try {
      const response = await axios.get("https://max-dental-care-backend.onrender.com/reviews");
      setReviews(response.data);
      setStatus("forms fetched");
    }catch (error) {
      setStatus("Error fetching reviews");
      console.error(error);
    }
  }

  useEffect(() => {
    allReviews();
  }, []);

  return (
    <>
      <Navbar />
      <div className="review-hero">
        <img src={image} className="review-hero-img"/>
        <div className="review-hero-text">
          <h1>Reviews</h1>
        </div>
      </div>

      <div className="review-page">
        <button className="open-form-button" onClick={toggleForm}>
          Leave a Review
        </button>

        {showForm && (
          <div className="modal-overlay" onClick={closeForm}>
            <div
              className="modal-wrapper"
              onClick={(e) => e.stopPropagation()} 
            >
              <ReviewForm onSuccess={() =>{
                closeForm();
                allReviews();
              }}/>
            </div>
          </div>
        )}

        <div className="review-list">
          {
            reviews.map((review, index) => (
              <div key={index} className="review-card">
                <Rating name="read-only" value={review.rating} size="large" readOnly />
                <p>{review.comment}</p>
                <p>-{review.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      

      <Footer/>
    </>
  );
};

export default ReviewPage;
