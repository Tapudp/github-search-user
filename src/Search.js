import React, { useState } from 'react';

const Search = ({ searchCall, apiState }) => {
  const [string, setStr] = useState('');

  const searchHandler = ({ target }) => {
    setStr(target.value);
  };

  return (
    <div className='search-wrapper'>
      <div className='entry-logo'>Scalio Search</div>
      <input
        className='searchbar'
        placeholder='tell us what you are looking for'
        onChange={searchHandler}
      />
      <button className='submitBtn' onClick={() => searchCall(string)} disabled={string === ''}>
        Submit
      </button>
      {apiState === '' ? <></> : <div className='fail-msg'>{apiState}</div>}
    </div>
  );
};

export default Search;
