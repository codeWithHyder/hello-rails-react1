import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
