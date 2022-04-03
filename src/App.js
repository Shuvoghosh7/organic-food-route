import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contuct from './Component/Contuct/Contuct';
import Navber from './Component/Navber/Navber';

function App() {
  return (
    <>
    <Navber/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contuct' element={<Contuct/>}/>
    </Routes>
    </>
  );
}

export default App;
