import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SiteNavBtns from "./SiteNavBtns";
import { Link, useLocation } from "react-router-dom";
import Confetti from "../Confetti";
import Footer from "./Footer";

const CodeCommandVision = () => {
  const { pathname } = useLocation();

  return (
    <div className="codeCommandVisionDiv">
      <Confetti />
      <Nav />
      <SiteNavBtns />
      <p className="codeCommandVisionParagraphs  para">
        <span className="codeCommandText">Code Command</span> is a resource for
        beginner code/web devs who need to improve basic computer literacy .. .{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/curriculumOverview.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          Curriculum Overview
        </a>
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Visitors do not create accounts. There is no signup. The only commitment
        is to them/yourselves. Specifically, to navigate focus areas in this
        resource as needed to achieve a sense of comfort in basic computer
        tasks. As such, in time - with continued practice, your accountability
        to growth and owning your code will be reflected while undeniable
        through your competence and confidence. If/When you comfortably complete
        tasks outlined in the self assessment you likely no longer need this
        resource. Still, visit anytime.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        <span className="codeCommandText">Code Command</span> is designed in six
        lesson focus areas:
        <br />{" "}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <Link
          to="/macbasics"
          className={`siteButtons ${
            pathname.includes("macBasics") ? "activeLink" : ""
          }`}
        >
          mac basics
        </Link>
        <br />{" "}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <Link
          to="/workflow"
          className={`siteButtons ${
            pathname.includes("workFlow") ? "activeLink" : ""
          }`}
        >
          work flow
        </Link>
        <br />{" "}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <Link
          to="/online"
          className={`siteButtons ${
            pathname.includes("online") ? "activeLink" : ""
          }`}
        >
          online
        </Link>
        <br />{" "}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <Link
          to="/search"
          className={`siteButtons ${
            pathname.includes("search") ? "activeLink" : ""
          }`}
        >
          search
        </Link>
        <br />{" "}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <Link
          to="/codemind"
          className={`siteButtons ${
            pathname.includes("codemind") ? "activeLink" : ""
          }`}
        >
          code mind
        </Link>
        <br />{" "}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <Link
          to="/coding"
          className={`siteButtons ${
            pathname.includes("coding") ? "activeLink" : ""
          }`}
        >
          coding
        </Link>{" "}
        <br />
        complemented by a vibrant blend of resources.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Essential to navigation of this and any site is <em>click</em>. Reading
        how-to do something is helpful. More helpful at times is searching
        online for videos/animations to see how it's done. Still,{" "}
        <a
          href={`${process.env.PUBLIC_URL}/click.png`}
          target="_blank"
          rel="noreferrer"
          title="click how-to"
        >
          click here to access a simple graphic
        </a>{" "}
        outlining how to <em>click</em>. Click is used a lot in the lesson focus
        areas videos - if you don't already, you'll recognize which{" "}
        <em>click</em> is being used with practice and time.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Videos are 3 minutes or less - seldom longer, and never over 5 minutes.
        Resources contain videos, links to trusted external resources, and
        images of the first page of soft hard-copy documents. Click these images
        to access downloadable pdf copies. Each lesson focus area includes a
        step-by-step compilation of tasks (curated from the videos), which is
        also designed as a clickable soft hard-copy image to access a
        downloadable pdf copy.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        There are no tests. Again,{" "}
        <span className="codeCommandText">Code Command</span> is designed to
        encourage self accountability through actions that result in your
        comfort with the material. Comfort results in competence and confidence.
        Use the self assessment(s) - provided in video and soft hard-copy form -
        to determine your comfort level and continue practicing specific tasks
        as needed.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        <strong>MORE HOPEFULLY HELPFUL:</strong>
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/selfMotivate.pdf`}
          target="_blank"
          rel="noreferrer"
          title="download copy"
        >
          self motivate quote
        </a>
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/prepare.pdf`}
          target="_blank"
          rel="noreferrer"
          title="download copy"
        >
          prepare guide
        </a>
        <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        -{" "}
        <a
          href={`${process.env.PUBLIC_URL}/lessonsContent/techQs.pdf`}
          target="_blank"
          rel="noreferrer"
          title="download copy"
        >
          technical questions guide
        </a>
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Gifted a childhood sprinkled in moments made vibrant through words and
        writing, La'Tonia Mertica values communication, creatives, and literacy.
        Since joining the tech eco system and pursuing mastery within, La'Tonia
        Mertica now adds code/web dev to her list of values.{" "}
        <span className="codeCommandText">Code Command</span> allows her/me to
        package these values purposefully.
        <br />
        <br />A face - in dimension, focused downward, with an open mind side -
        is the <span className="codeCommandText">Code Command</span> logo. It
        represents intent, focused, producing results from a down back up and
        through flow. Essentially, possibilities - sighted and actively consumed
        regardless initial resistance.
      </p>
      <p className="codeCommandVisionParagraphs  para">
        Contributions of lessons and resources aligned with the vision of{" "}
        <span className="codeCommandText">Code Command</span> are welcome. Those
        interested in commissioning me to produce results for project-based work
        please connect via{" "}
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
      <p className="codeCommandVisionParagraphs  para">
        <strong>AND SO WHAT'S WITH THE CONFETTI</strong>
        <br />
        Things happen all the time that we need to celebrate. Some thing that
        makes us smile to ourselves. Other things that draw attention. Whether
        wanted or not. From others who smile for and with us. Big things. Maybe
        moreso not-so-big things. Yet still never insignificant. Toss confetti
        time is simply recognition that while life may be a challenge, there are
        things along the way we should pause to admire. Tossed symbolically -
        such as in words. Or literally. Without worry about boasting. Or risk of
        ever tossing too much. I'm constantly tossing mine. Toss yours.
        <br />
        <br />
        Completing the self assessment is a good opportunity. Too is each task
        you conquer along the way. .. toss YOUR confetti.
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
