import React, { useState } from 'react';

const Search = ({ setApiState, setValues, setIsLoading }) => {
  const [string, setStr] = useState('');

  const searchHandler = ({ target }) => {
    setStr(target.value);
  };

  const searchCall = async () => {
    setIsLoading(true);
    console.log('going to hit the API');
    try {
      const payload = await fetch(`https://api.github.com/search/users?q=${string} in:login`);
      const result = await payload.json();
      if (!result || result.error) {
        setApiState('there was some issue reaching the server, please try again after sometime');
        console.error('there was some issue reaching the server, please try again after sometime');
      }
      setApiState(`Here are your results for ${string}!`);
      setValues(result);
      console.log('after api >>>> ', result);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <input placeholder='tell us what you are looking for' onChange={searchHandler} />
      <button onClick={searchCall} disabled={string === ''}>
        Submit
      </button>
    </div>
  );
};

export default Search;
