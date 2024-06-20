import logo from './logo.svg';
import './App.css';
// import Startup from './startupscreen/Startup';
// import Login from './loginpage/login';
import Router from './router/router';
import {BrowserRouter} from "react-router-dom" 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap Bundle JS

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
       <BrowserRouter> 
      <Router/>
      </BrowserRouter> 

    </div>
  );
}

export default App;
