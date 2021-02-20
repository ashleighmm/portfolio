import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './contents/Home';

import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" />
        <Home />
      </div>
    </Router>
  )
}

export default App;