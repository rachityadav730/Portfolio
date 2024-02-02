import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';

function App() {
  return (
   <>
   <Router>
        <NavMenu />
    </Router>
   </>
  );
}

export default App;
