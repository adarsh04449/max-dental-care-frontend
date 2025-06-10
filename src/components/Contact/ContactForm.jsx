import React, { useState } from "react";
import "./contactForm.css";
import axios from "axios"
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://formcarry.com/s/mHCrTEFtkvN", formData);
      setStatus("Form sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.response
          ? "Failed to send message. Please try again."
          : "An error occurred. Please try again later."
      );
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
      }}
    >
    <div className="form-container" id ="form-container">
      <h1 className="form-header text-center mb-3">Book an Appointment</h1>
      <p className="form-intro text-center mb-4">
            Call us or fill out this form to book an appointment.
            We look forward to hearing from you!
      </p>
      <motion.div
        className="form-card"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Mail className="form-icon" />
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="firstName"><sup>*</sup>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName"><sup>*</sup>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone"><sup>*</sup>Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="message"><sup>*</sup>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        {status && <p className="status-message">{status}</p>}
      </motion.div>
      </div>
    </form>
  );
};

export default ContactForm;