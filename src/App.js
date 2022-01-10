import NotFound from './components/NotFound';

import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Nav from './components/Nav';
import SiteNavBtns from './components/SiteNavBtns'
import CodeMind from './components/CodeMind';
import Coding from './components/Coding';
import MacBasics from './components/MacBasics';
import Online from './components/Online';
import Resources from './components/Resources';
import Search from './components/Search';
import WorkFlow from './components/WorkFlow';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Glitch from './components/videos/Glitch.mp4'

import { useWindowWidth } from "@react-hook/window-size";

// path/component format works for nav and footer below while not for the other paths aka routes ... 
function App() {
  const width = useWindowWidth();

  if (width < 1100) {
    return (
      <div className='increaseScreen'>
        <div className="divSOS div404"><span className="firstS four04 first4">S</span><span className="onlyO four04 only0">O</span><span className="secondS four04 second4">S</span></div>
       
        <h1>size seize</h1>
        <h3 className='needLarger'>need larger screen or device</h3>
        <video src={Glitch} controls="controls" autoPlay loop muted class="notFoundPageVideo" />
        <Footer />
      </div>
    )
  }
  return (
    <Router>
    <div className="App container">    
      <Nav />

      <Routes>
        <Route path="/nav" component={Nav}>
        </Route>

        <Route exact path="/sitenavbtns" element={< SiteNavBtns />}>
        </Route>

        <Route exact path="/codemind" element={< CodeMind />}>
        </Route>

        <Route exact path="/coding" element={< Coding />}>
        </Route>

        <Route exact path='/macbasics' element={< MacBasics />}>
        </Route>

        <Route exact path="/online" element={< Online />}>
        </Route>

        <Route exact path="/resources" element={< Resources />}>
        </Route>

        <Route exact path="/search" element={< Search />}>
        </Route>

        <Route exact path="/workflow" element={< WorkFlow />}>
        </Route>

        <Route path="/footer" element={Footer}>
        </Route>

        <Route exact path="/" element={< Landing />}>
        </Route> 

        <Route default exact path="/notfound" element={< NotFound />}/>
      </Routes>

      {/* <Footer /> */}
    </div>
    </Router>
  );
}
export default App;
