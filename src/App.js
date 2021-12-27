import NotFound from './components/NotFound'

import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// import Nav from './components/Nav';
import CodeMind from './components/CodeMind';
import Coding from './components/Coding';
import MacBasics from './components/MacBasics';
import Online from './components/Online';
import Resources from './components/Resources';
import Search from './components/Search';
import WorkFlow from './components/WorkFlow';
// import Footer from './components/Footer';
import Landing from './components/Landing'


function App() {
  return (
    <Router>
    <div className="App container">    
      {/* <Nav /> */}

      <Routes>
        {/* <Route path="/nav" component={Nav}>
        </Route> */}

        <Route path="/codemind" component={CodeMind}>
        </Route>

        <Route path="/coding" component={Coding}>
        </Route>

        <Route path="/macbasics" component={MacBasics}>
        </Route>

        <Route path="/online" component={Online}>
        </Route>

        <Route path="/resources" component={Resources}>
        </Route>

        <Route path="/search" component={Search}>
        </Route>

        <Route path="/workflow" component={WorkFlow}>
        </Route>

        {/* <Route path="/footer" component={Footer}>
        </Route> */}

        <Route exact path="/" component={Landing}>
        </Route>
        <Route default component={NotFound}/>
      </Routes>

      {/* <Footer /> */}
    </div>
    </Router>
  );
}
export default App;
