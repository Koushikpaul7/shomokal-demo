import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;
