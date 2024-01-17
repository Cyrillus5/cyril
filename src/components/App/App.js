import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects';
import Skills from '../Skills';
import Nav from '../Nav';
import './App.scss';
import Home from '../Home';
import { Routes, Route } from 'react-router-dom';
import Contact from '../Contact';

function App() {
  return (
    <div className="App"> 
    <div id="large-header" className="large-header">
      <canvas className='canvas' id="demo-canvas"></canvas>       
      <div className="main">
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}
        </Routes> 
      </div>      
    </div>        
    </div>
  );
}

export default App;
