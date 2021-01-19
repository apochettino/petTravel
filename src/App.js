import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/home';
import { Seccion } from './components/sec02/sec02';
import { CartWid } from './components/CartWidget/CartWidget';
import  CountContainer from './Containers/CountContainer/countContainer';


function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <CartWid/>
      <Home greeting={'Bienvenido a PetTravel'}/>    
      <CountContainer initial={1} stock={5}/>
      <Seccion/>     
      
         


      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
