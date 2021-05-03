import './App.css';
import Search from './Search';
import Result from './Result';
import { useState } from 'react';

function App() {
  const [apiState, setApiState] = useState('');
  const [searchValues, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='App'>
      <Search setApiState={setApiState} setValues={setValues} setIsLoading={setIsLoading} />
      {!isLoading ? (
        <Result apiState={apiState} searchValues={searchValues.items} />
      ) : (
        <div>Loading . . . </div>
      )}
    </div>
  );
}

export default App;
