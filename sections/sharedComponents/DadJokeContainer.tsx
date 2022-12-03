import React, {useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { JokeResponse } from '../../pages/api/dadJoke';


const DadJokeContainer = (props:any): JSX.Element => {
  const [joke, setJoke] = useState({} as JokeResponse);
  const [ isLoading, setIsLoading] = useState(false);
  
  const getJokeData = async () => {
    setIsLoading(true);
    const headers = { 'my-secret-auth': 'kitten'}
    const data = await axios.get('/api/dadJoke', {headers: headers} as AxiosRequestConfig);
    setJoke(data.data);
    setIsLoading(false);
  }
  
  return (
    <>
      <h2>Dad Jokes</h2>
      {isLoading 
        ? (<h2>Loading...</h2>)
        : null
      }
      <button onClick={getJokeData}>Get New Joke</button>
      <p>Setup: {joke.setup}</p>
      <p>Punchline: {joke.punchline}</p>
    </>
  )
};


export default DadJokeContainer;
  