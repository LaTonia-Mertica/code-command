import NotFound from "./components/NotFound";

import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";

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
import PlaceholderVideo from "./components/codemind/PlaceholderVideo";

import CodeMindLessons from "./components/codemind/CodeMindLessons";
import CodeMindResourcePlaceholder from "./components/codemind/CodeMindResourcePlaceholder";

import CodingLessons from "./components/coding/CodingLessons";
import JsForLoop from "./components/coding/JsForLoop";
import CodingResourcePlaceholder from "./components/coding/CodingResourcePlaceholder";

import MacBasicsLessons from "./components/macbasics/MacBasics";
import AboutMac from "./components/macbasics/AboutMac";
import CustomizeMac from "./components/macbasics/CustomizeMac";
import CustomizeMacViaRightClick from "./components/macbasics/CustomizeMacViaRightClick";
import OpenTextEdit from "./components/macbasics/OpenTextEdit";
import FileFolderDelete from "./components/macbasics/FileFolderDelete";
import SaveFolderInDocs from "./components/macbasics/SaveFolderInDocs";
import AddAppToDock from "./components/macbasics/AddAppToDock";
import MacBasicsResourcePlaceHolder from "./components/macbasics/MacBasicsResourcePlaceHolder";

import OnlineLessons from "./components/online/OnlineLessons";
import OnlineResourcePlaceholder from "./components/online/OnlineResourcePlaceholder";

import SearchLessons from "./components/search/Search";
import SearchResourcePlaceholder from "./components/search/SearchResourcePlaceHolder";

import WorkFlowLessons from "./components/workflow/WorkFlow";
import WorkFlowResourcePlaceholder from "./components/workflow/WorkFlowResourcePlaceholder";

import CurriculumOverview from "./components/CurriculumOverview";
import SelfAssessment from "./components/SelfAssessment";

import ResourceLessons from "./components/resources/ResourceLessons";
import SelfAssessmentChecklist from "./components/resources/SelfAssessmentChecklist";
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
  const location = useLocation();
  console.log(location);

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

  // conditional render part 1
  // const render = false;

  return (
    <div className="App container">
      {/* conditional render part 2 */}
      {/* {render && <Nav />} */}
      {!location.pathname.includes("noNav") && <Nav />}

      <Routes>
        {/* route method to displaying nav content */}
        {/* <Route path="/nav" component={Nav}></Route> */}

        {/* route method to displaying site nav buttons  */}
        {/* <Route exact path="/sitenavbtns" element={<SiteNavBtns />}></Route> */}

        <Route
          exact
          path="curriculumOverview-noNav"
          element={<CurriculumOverview />}
        ></Route>

        <Route
          exact
          path="/SelfAssessment-noNav"
          element={<SelfAssessment />}
        ></Route>

        <Route exact path="/codemind" element={<CodeMind />}>
          <Route
            path="CodeMindResourcePlaceholder-noNav"
            element={<CodeMindResourcePlaceholder />}
          />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
        </Route>

        <Route exact path="/coding" element={<Coding />}>
          <Route
            path="CodingResourcePlaceholder-noNav"
            element={<CodingResourcePlaceholder />}
          />
          <Route path="JsForLoop-noNav" element={<JsForLoop />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
        </Route>

        <Route exact path="/macbasics" element={<MacBasics />}>
          <Route path="AboutMac-noNav" element={<AboutMac />} />
          <Route
            path="MacBasicsResourcePlaceHolder-noNav"
            element={<MacBasicsResourcePlaceHolder />}
          />
          <Route path="AboutMac-noNav" element={<AboutMac />} />
          <Route path="CustomizeMac-noNav" element={<CustomizeMac />} />
          <Route
            path="CustomizeMacViaRightClick-noNav"
            element={<CustomizeMacViaRightClick />}
          />
          <Route path="OpenTextEdit-noNav" element={<OpenTextEdit />} />
          <Route path="FileFolderDelete-noNav" element={<FileFolderDelete />} />
          <Route path="SaveFolderInDocs-noNav" element={<SaveFolderInDocs />} />
          <Route path="AddAppToDock-noNav" element={<AddAppToDock />} />
        </Route>

        <Route exact path="/online" element={<Online />}>
          <Route
            path="OnlineResourcePlaceholder-noNav"
            element={<OnlineResourcePlaceholder />}
          />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
        </Route>

        <Route exact path="/resources" element={<Resources />}>
          <Route
            path="selfAssessmentChecklist-noNav"
            element={<SelfAssessmentChecklist />}
          />
          <Route path="admireTrying-noNav" element={<AdmireTrying />} />
          <Route path="balance-noNav" element={<Balance />} />
          <Route
            path="basicSiteConsultGuide-noNav"
            element={<BasicSiteConsultGuide />}
          />
          <Route
            path="contentReadyGuide-noNav"
            element={<ContentReadyGuide />}
          />
          <Route path="cta13-noNav" element={<Cta13 />} />
          <Route path="everydayMenu-noNav" element={<EverydayMenu />} />
          <Route path="imagery-noNav" element={<Imagery />} />
          <Route path="prepare-noNav" element={<Prepare />} />
          <Route path="selfMotivate-noNav" element={<SelfMotivate />} />
          <Route path="staticFiles-noNav" element={<StaticFiles />} />
          <Route
            path="technicalQuestions-noNav"
            element={<TechnicalQuestions />}
          />
        </Route>

        <Route exact path="/search" element={<Search />}>
          <Route
            path="SearchResourcePlaceholder-noNav"
            element={<SearchResourcePlaceholder />}
          />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
        </Route>

        <Route exact path="/workflow" element={<WorkFlow />}>
          <Route
            path="WorkFlowResourcePlaceholder-noNav"
            element={<WorkFlowResourcePlaceholder />}
          />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
          <Route path="PlaceholderVideo" element={<PlaceholderVideo />} />
        </Route>

        <Route path="/footer" element={Footer}></Route>

        <Route exact path="/" element={<Landing />}></Route>

        <Route default exact path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}
export default App;
