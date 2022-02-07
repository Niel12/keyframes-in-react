import logo from './logo.png';
import jesus from './jesus.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello Word</div>
        <div id='login' >
        <img src={jesus} className="jesus-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
