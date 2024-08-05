import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Joke = () => {
    const URL = 'https://api.chucknorris.io/jokes/random';
    let [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setJoke(data.value);
    }

    useEffect(() => {
        fetchJoke();
    }, []);

  return (
    <div>
      <h1>Random Joke</h1>
      <br/>
      <br/>
      <p>{joke}</p>
      <br/>
      <br/>
      <Button onClick={fetchJoke} variant='contained' color='error' size='small' endIcon={<SendIcon/>} disableElevation>New Joke</Button>
    </div>
  )
}

export default Joke