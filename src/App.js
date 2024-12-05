import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
