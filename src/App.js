import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contuct from './Component/Contuct/Contuct';
import Navber from './Component/Navber/Navber';
import Details from './Component/Details/Details';
import { createContext, useState } from 'react';

export const productContext=createContext()

function App() {
  const[products,setProducts]=useState([])
  console.log(products)
  return (
    <productContext.Provider value={[products,setProducts]}>
    <Navber/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/contuct' element={<Contuct/>}/>
    </Routes>
    </productContext.Provider>
  );
}

export default App;
