/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function WelcomeMessage({ isLoggedIn, userName }) {
  return (
    <div>
      {isLoggedIn ? <h1>Hello, {userName}!</h1> : <h1>Welcome, Guest!</h1>}
    </div>
  );
}

export default WelcomeMessage;
