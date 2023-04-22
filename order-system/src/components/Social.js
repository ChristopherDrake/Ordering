import React from 'react';
import twitterImage from '../../public/images/Twitter.png'

function Logo() {
    return (
      <a href="https://sometwitteraccountmaybe.com">
        <img src={twitterImage} alt="Twitter" />
      </a>
    );
  }

  export { twitterImage }