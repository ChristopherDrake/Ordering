import React from 'react';
import './About.css';

const AboutUsPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <p>Pizza Planet in downtown Denver has successfully been doing business for over 30 years!</p>
        
      <p>On behalf of our staff, I express our sincere thanks and appreciation<br />
        to all who have chosen to order from us on so many occasions.</p>
      
      <p>You have come from neighborhoods all over the Denver Metro area to enjoy our food and hospitality.</p>
        
      <p>Our employees, most of them whom are working parents and young adults<br />
         feel deep gratitude for your loyalty and generosity as they raise their families.</p>

      <p>Our commitment to work hard and provide you with the best service and dining experience will always remain.<br />
         Once again thank you so much for being the real Pizza Planet MVP's for all of these many, many years.</p> 
   
      <h2>Address:</h2>
      <p className="gray-text">123 Main St<br />Denver, CO 80202</p>

    </div>
  );
};

export default AboutUsPage;