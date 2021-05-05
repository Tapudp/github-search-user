import React, { useState } from 'react';

const useSearch = () => {
  const [apiState, setApiState] = useState('');
  const [searchValues, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const searchCall = async (searchString = '') => {
    setIsLoading(true);
    console.log('going to hit the API');
    try {
      const payload = await fetch(
        `https://api.github.com/search/users?q=${searchString}&per_page=100&page=1 in:login`
      );
      const result = await payload.json();
      if (!result || result.error) {
        setApiState('There was some issue reaching the server, please try again after sometime');
        console.error('there was some issue reaching the server, please try again after sometime');
        setValues({});
      }
      setApiState(`Here are your results for ${searchString}`);
      setValues(result);
      console.log('after api >>>> ', result);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return {
    actions: {
      searchCall,
      setApiState,
      setValues,
      setIsLoading,
    },
    store: {
      apiState,
      searchValues,
      isLoading,
    },
  };
};

export default useSearch;
