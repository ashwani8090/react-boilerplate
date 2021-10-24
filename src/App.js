import './App.css';
import Routes from './routes';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux'

function App() {
  const isActive = useSelector(state => state?.sessionSlice?.isLoading);

  return (
    <div className="App">
      <LoadingOverlay
        active={isActive}
        spinner
        text='Loading...'
      >
        <header className="App-header">
          <Routes />
        </header>
      </LoadingOverlay>

    </div>
  );
}

export default App;
