import './App.css';
import Search from './Search';
import Result from './Result';
import useSearch from './hooks/useSearch';

function App() {
  const {
    actions: { searchCall, setApiState, setValues, setIsLoading },
    store: { apiState, searchValues, isLoading },
  } = useSearch();
  return (
    <div className='App'>
      <Search searchCall={searchCall} apiState={apiState} />
      <Result searchValues={searchValues} isLoading={isLoading} />
    </div>
  );
}

export default App;
