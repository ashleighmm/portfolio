import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './contents/Home';
import About from './contents/About';

import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
      </div>
    </Router>
  )
}

export default App;