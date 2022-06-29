// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemsListContainer from './containers/ItemsListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>

      <ItemsListContainer greeting={"Prueba de esta libreria de cosas que uno no sabe para que sirven"} />
      
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
  
       </div>
  );
}

export default App
