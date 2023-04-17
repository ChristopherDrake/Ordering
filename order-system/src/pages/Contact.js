import React from 'react';
import './Contact.css'

const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>Address</h2>
      <p>123 Main St<br />Denver, CO 80202</p>
      <form className="contact-form">
        <input type="text" id="name" name="name" placeholder="Your name..." required className='small-input' />

        <input type="email" id="email" name="email" placeholder="Your email..." required className='small-input' />

        <textarea id="message" name="message" placeholder="Your message..." required className='large-input'></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default ContactUsPage;
