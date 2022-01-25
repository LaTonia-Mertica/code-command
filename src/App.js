import NotFound from "./components/NotFound";

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import SiteNavBtns from "./components/SiteNavBtns";
import CodeMind from "./components/codemind/CodeMind";
import Coding from "./components/coding/Coding";
import MacBasics from "./components/macbasics/MacBasics";
import Online from "./components/online/Online";
import Resources from "./components/resources/Resources";
import Search from "./components/search/Search";
import WorkFlow from "./components/workflow/WorkFlow";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Glitch from "./components/videos/Glitch.mp4";

import { useWindowWidth } from "@react-hook/window-size";
import ResourceLessons from "./components/resources/ResourceLessons";
import CurriculumOverview from "./components/resources/CurriculumOverview";
import AdmireTrying from "./components/resources/AdmireTrying";
import Balance from "./components/resources/Balance";
import BasicSiteConsultGuide from "./components/resources/BasicSiteConsultGuide";
import ContentReadyGuide from "./components/resources/ContentReadyGuide";
import Cta13 from "./components/resources/Cta13";
import EverydayMenu from "./components/resources/EverydayMenu";
import Imagery from "./components/resources/Imagery";
import Prepare from "./components/resources/Prepare";
import SelfMotivate from "./components/resources/SelfMotivate";
import StaticFiles from "./components/resources/StaticFiles";
import TechnicalQuestions from "./components/resources/TechnicalQuestions";

// path/component format works for nav and footer below while not for the other paths aka routes ...
function App() {
  const width = useWindowWidth();

  if (width < 1100) {
    return (
      <div className="increaseScreen">
        <div className="divSOS div404">
          <span className="firstS four04 first4">S</span>
          <span className="onlyO four04 only0">O</span>
          <span className="secondS four04 second4">S</span>
        </div>

        <h1>size seize</h1>
        <h3 className="needLarger">need larger screen or device</h3>
        <video
          src={Glitch}
          controls="controls"
          autoPlay
          loop
          muted
          className="notFoundPageVideo"
        />
        <Footer />
      </div>
    );
  }
  return (
    <Router>
      <div className="App container">
        <Nav />

        <Routes>
          <Route path="/nav" component={Nav}></Route>

          <Route exact path="/sitenavbtns" element={<SiteNavBtns />}></Route>

          <Route exact path="/codemind" element={<CodeMind />}></Route>

          <Route exact path="/coding" element={<Coding />}></Route>

          <Route exact path="/macbasics" element={<MacBasics />}></Route>

          <Route exact path="/online" element={<Online />}></Route>

          <Route exact path="/resources" element={<Resources />}>
            <Route path="curriculumOverview" element={<CurriculumOverview />} />
            <Route path="admireTrying" element={<AdmireTrying />} />
            <Route path="balance" element={<Balance />} />
            <Route
              path="basicSiteConsultGuide"
              element={<BasicSiteConsultGuide />}
            />
            <Route path="contentReadyGuide" element={<ContentReadyGuide />} />
            <Route path="cta13" element={<Cta13 />} />
            <Route path="everydayMenu" element={<EverydayMenu />} />
            <Route path="imagery" element={<Imagery />} />
            <Route path="prepare" element={<Prepare />} />
            <Route path="selfMotivate" element={<SelfMotivate />} />
            <Route path="staticFiles" element={<StaticFiles />} />
            <Route path="technicalQuestions" element={<TechnicalQuestions />} />
          </Route>

          <Route exact path="/search" element={<Search />}></Route>

          <Route exact path="/workflow" element={<WorkFlow />}></Route>

          <Route path="/footer" element={Footer}></Route>

          <Route exact path="/" element={<Landing />}></Route>

          <Route default exact path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
