import React from 'react';

const Result = ({ apiState, searchValues }) => {
  return (
    <div>
      <p>{apiState}t</p>
      <div>
        {searchValues?.map((user) => (
          <li>{user.login}</li>
        ))}
      </div>
    </div>
  );
};

export default Result;
