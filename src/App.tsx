import './App.css';
import AppRouter from './App-router';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AppRouter />
      </ThemeContextProvider>
    </div>
  );
}

export default App;