import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">Bootstrap!</div>
          <div className="card-body">
            <h5 className="card-title">Yeh! It's me, Bootstrap!</h5>
            <p className="card-text">Test...</p>
          </div>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
