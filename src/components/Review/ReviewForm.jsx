import React, { useState } from "react";
import "./ReviewForm.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";

const ReviewForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: 3,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/reviews", {
        name: formData.name,
        comment: formData.comment,
        rating: formData.rating,
      });
        setFormData({ name: "", comment: "", rating: 3 });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Failed to submit review:", error.response?.data || error.message);
    }
  };

  return (
    <div className="review-form-card">
      <h2 className="review-title">Leave a Review</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <label><sup>*</sup>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label><sup>*</sup>Rating</label>
          <Rating
            name="half-rating"
            defaultValue={3}
            size="large"
            value={formData.rating}
            onChange={(event, newValue) => {
              setFormData({ ...formData, rating: newValue });
            }}
            sx={{
              color: "#ffc107",
              "& .MuiRating-iconFilled": {
                color: "#ffc107",
              },
              "& .MuiRating-iconHover": {
                color: "#ffb300",
              },
            }}
          />
        

        <label><sup>*</sup>Comment</label>
        <textarea
          name="comment"
          placeholder="Write your feedback..."
          value={formData.comment}
          onChange={handleChange}
          rows="4"
          maxLength={500}
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
