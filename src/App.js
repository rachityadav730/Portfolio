import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Footer from './components/Footer';

function App() {
  return (
   <>
   <Router>
        <NavMenu />
        <ScrollToTop />
        <Routes>
          <Route path="/about"  element={<About />} >
            
          </Route>
          <Route path="/contact"  element={<Contact />} >
            
          </Route>
          <Route path="/projects"  element={<Projects />} > 
            
          </Route>
          <Route path="/"  element={<Home />} />
            
        
        </Routes>
        {/* <Footer /> */}
    </Router>
   </>
  );
}

export default App;
