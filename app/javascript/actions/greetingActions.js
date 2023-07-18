import axios from 'axios';

export const setGreeting = (greeting) => {
  return {
    type: 'SET_GREETING',
    payload: greeting,
  };
};

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios
      .get('/api/greetings/random_greeting') // Assuming your Rails API endpoint is '/api/greetings/random_greeting'
      .then((response) => {
        const greeting = response.data;
        dispatch(setGreeting(greeting));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
