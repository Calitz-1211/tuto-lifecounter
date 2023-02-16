import logo from './logo.svg';
import './App.css';
import { Chip } from './component/chips';
import { Header } from './component/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and oui.
        </p>
        <Chip value={1}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
