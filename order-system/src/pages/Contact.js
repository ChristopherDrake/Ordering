import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name..." required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email..." required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message..." required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUsPage;