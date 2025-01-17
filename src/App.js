import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Hello,
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You just Dockerized your first React app.
        </p>
      </header>
    </div>
  );
}

export default App;
