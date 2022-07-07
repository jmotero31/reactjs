// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemsListContainer from './containers/ItemsListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemsListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemsListContainer/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
