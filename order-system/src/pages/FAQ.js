import React from 'react';

const FAQPage = () => {
  return (
    <div className="FAQ-container">
      <h1>FAQ</h1>
      <div className="FAQ-item">
        <h2>"Do we deliver?"</h2>
        <p>Of course! We have in-house delivery specialists ready to provide for you and your family!</p>
      </div>
      <div className="FAQ-item">
        <h2>"Are we open on weekends?"</h2>
        <p>Yes!, we are open everyday from 11:00 AM to 10:00 PM</p>
      </div>
      <div className="FAQ-item">
        <h2>"Can we custom order pizza that we don't see on the menu?"</h2>
        <p>Yes you can, However you may offend the menu artist by doing so</p>
      </div>
    </div>
  );
};

export default FAQPage;