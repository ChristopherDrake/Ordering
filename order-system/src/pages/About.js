import React from 'react';
import './About.css';

const AboutUsPage = () => {
  return (
    <div className="About-container">
      <h1 style={{ marginBottom: '2em' }} >About Us</h1>
      <div className="About-item">
        <h2>Pizza Planet in downtown Denver has successfully been doing business for over 30 years!</h2>
        <h2 style={{ marginBottom: '2em' }}  >On behalf of our staff, I express our sincere thanks and appreciation to all who have chosen to order from us on so many occasions.</h2>
        <h2>You have come from neighborhoods all over the Denver Metro area to enjoy our food and hospitality.</h2>
        <h2 style={{ marginBottom: '2em' }}  >Our employees, most of them whom are working parents and young adults feel deep gratitude for your loyalty and generosity as they raise their families.</h2>
        <h2>Our commitment to work hard and provide you with the best service and dining experience will always remain.</h2>
        <h2>Once again thank you so much for being the real Pizza Planet MVP's for all of these many, many years.</h2>
      </div>
    </div>
  );
};

export default AboutUsPage;