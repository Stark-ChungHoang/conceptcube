import "./pageOne.scss";
import logo from "../../../assets/images/logo-icon.png";
import { useNavigate } from "react-router-dom";
const PageOne = () => {
  const navigate = useNavigate();
  return (
    <div className="page-one">
      <div className="page-one-container">
        <div onClick={()=>{navigate("/")}} className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="about-project">
          <a href="/">About The Project</a>
        </div>
        <div className="intro-company">
          <a href="/">ConceptCube Company Introduction</a>
        </div>

        <div className="inner-content">
          <div className="first_">
            <div className="md-text">
              everything <br />
              is in the <br />
              conceptcube
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
