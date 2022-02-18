import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";
import PageFourth from "./PageFourth/PageFourth";
import PageFive from "./PageFive/PageFive";
import ReactFullpage from "@fullpage/react-fullpage";
import onLeave from '../../components/Animation/onLeave';
import afterLoad from '../../components/Animation/AfterLoad';
import { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const fullpageOptions = {
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fivePage"],
  sectionsColor: ['#1b0080', '#1b0080', '#1b0080', '#99dd6e',"#1b0080"],
};

function Home() {
  return (
    <ReactFullpage
      licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
      {...fullpageOptions}
      navigation={true}
      navigationPosition={'right'}
      onLeave={onLeave}
      afterLoad={afterLoad}
      scrollingSpeed={600}
      normalScrollElements={'.item-history, #menu,list-menu-sidebar'}
      render={() => {

        return (
          <div>
            <section className="section">
              <PageOne />
            </section>
            <section className="section">
              <PageTwo />
            </section>
            <section className="section">
              <PageThree />
            </section>
            <section className="section">
              <PageFourth />
            </section>
            <section className="section">
              <PageFive />
            </section>

          </div>
        );
      }}
    />
  );
}

export default memo(Home);
