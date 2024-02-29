
import './App.css';

import Home from './Home.js'
import Navi from './Navi.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>} ></Route>
      <Route path='/nav' element={<Navi/>} >
        
      </Route>
    </Routes>
    </BrowserRouter>
   
   </div>
  )
}

export default App;
