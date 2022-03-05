import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SiteNavBtns from "./SiteNavBtns";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

const CodeCommandVision = () => {
  const { pathname } = useLocation();

  return (
    <div className="codeCommandVisionDiv">
      <Nav />
      <SiteNavBtns />
      <p className="codeCommandVisionParagraphs  para">
        Code Command is a resource for beginner code/web devs who need to
        improve basic computer literacy .. .<br />
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/curriculumOverview.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          review Curriculum Overview
        </a>
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Visitors do not create accounts and there is no signup. The only
        commitment is to them/yourselves - specifically, to navigate focus areas
        in this resource as needed to achieve a sense of comfort in basic
        computer tasks. As such, in time - with continued practice, your
        accountability to growth and owning your code will be reflected while
        undeniable through your competence and confidence. If/When you
        comfortably complete tasks outlined in the self assessment you likely no
        longer need this resource. Still, you are welcome anytime.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Code Command is designed in six lesson focus areas:
        <br />-{" "}
        <Link
          to="/macbasics"
          className={`siteButtons ${
            pathname.includes("macBasics") ? "activeLink" : ""
          }`}
        >
          mac basics
        </Link>
        <br />-{" "}
        <Link
          to="/workflow"
          className={`siteButtons ${
            pathname.includes("workFlow") ? "activeLink" : ""
          }`}
        >
          work flow
        </Link>
        <br />-{" "}
        <Link
          to="/online"
          className={`siteButtons ${
            pathname.includes("online") ? "activeLink" : ""
          }`}
        >
          online
        </Link>
        <br />-{" "}
        <Link
          to="/search"
          className={`siteButtons ${
            pathname.includes("search") ? "activeLink" : ""
          }`}
        >
          search
        </Link>
        <br />-{" "}
        <Link
          to="/codemind"
          className={`siteButtons ${
            pathname.includes("codemind") ? "activeLink" : ""
          }`}
        >
          code mind
        </Link>
        <br />-{" "}
        <Link
          to="/coding"
          className={`siteButtons ${
            pathname.includes("coding") ? "activeLink" : ""
          }`}
        >
          coding
        </Link>{" "}
        <br />
        complemented by a medley of resources.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Videos are 3 minutes or less. Resources contain videos, links to trusted
        external resources, and images of the first page of soft hard-copy
        documents. Click these images to access downloadable pdf copies. Each
        lesson focus area includes a step-by-step compilation of tasks (curated
        from the videos), which is also designed as a clickable soft hard-copy
        image to access a downloadable pdf copy.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        There are no tests. Again, Code Command is designed to encourage self
        accountability through actions that result in your comfort with the
        material. Comfort results in competence and confidence. Use the self
        assessment(s) - provided in video and soft hard-copy form - to determine
        your comfort level and continue practicing specific tasks as needed.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        more hopefully helpful:
        <br />-{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/selfMotivate.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          self motivate
        </a>
        <br />-{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/prepare.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          prepare guide
        </a>
        <br />-{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/techQs.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          technical questions guide
        </a>
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Gifted a childhood sprinkled in moments made vibrant through words and
        writing, La'Tonia Mertica values communication, creatives, and literacy.
        Since joining the tech eco system and pursuing mastery within, La'Tonia
        Mertica now adds code/web dev to her list of values. Code Command allows
        me to package these values purposefully.
        <br />
        <br />A face - in dimension, focused downward, with an open mind side -
        is the Code Command logo. It represents intent, focused, producing
        results from a down back up and through flow. Essentially, possibilities
        - sighted and actively consumed regardless initial resistance.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Contributions of lessons and resources aligned with the vision of Code
        Command are welcome. Those interested in commissioning me to produce
        results for project-based work please connect via{" "}
        <a
          href="https://www.latoniamertica.dev/"
          target="_blank"
          rel="noreferrer"
        >
          latoniamertica.dev
        </a>
        . Also, my{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/contentReadyGuide.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          Content Ready Guide
        </a>{" "}
        may be helpful.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/code-master-hopefuls.png`}
        title="La'Tonia Mertica"
        alt="La'Tonia Mertica"
        className="latoniaMertica"
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CodeCommandVision;

{
  /* <li className="curriculumOverviewClass">
        <Link
          to="/curriculumOverview-noNav"
          className={`siteButtons ${
            pathname.includes("curriculumOverview") ? "activeLink" : ""
          }`}
        >
          curriculum overview
        </Link>
      </li> */
}
