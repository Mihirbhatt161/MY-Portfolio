import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Updated package import
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // EmailJS integration
    emailjs
      .send(
        "service_6vbo2gi", // Replace with your EmailJS Service ID
        "template_0bscuhg", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "KOYlvIWixQ_ohXjwn" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setIsSubmitted(true);

          // Reset form after submission
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setError("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className={styles["contact-section"]}>
      <h2>CONTACT ME</h2>
      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <button type="submit">
          {isSubmitted ? "Message Sent!" : "Send Message"}
        </button>
        {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      </form>

     {/* Social Media Links */}
     <div className={styles.socialLinks}>
        <a
          href="https://github.com/Mihirbhatt161"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.github}`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mihirkaushal/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.linkedin}`}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/nomihirfound/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialIcon} ${styles.instagram}`}
        >
          <FaInstagram />
        </a>
      </div> 
    </section>
  );
};

export default Contact;
