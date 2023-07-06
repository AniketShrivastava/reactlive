import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './ReactMenu/Home';
import { About } from './ReactMenu/About';
import { Service } from './ReactMenu/Service';
import { Navbr } from './ReactMenu/Navbr';

function App() {
  return (
    <>
    <Router>
      <Navbr/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        {/* <Route path='/contact' element={<Co}></Route> */}

        

      </Routes>
    </Router>
    </>
  );
}

export default App;
