import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/greetings/random_greeting')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
