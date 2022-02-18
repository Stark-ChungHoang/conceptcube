import "./pageTwo.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/images/console-img-1@3x.png"
import img2 from "../../../assets/images/console-img-2@3x.png"
import img3 from "../../../assets/images/console-img-3@3x.png"
import img4 from "../../../assets/images/console-img-4@3x.png"
import img5 from "../../../assets/images/console-img-5@3x.png"
import img6 from "../../../assets/images/console-img-6@3x.png"
function PageTwo() {
  const data = [img1,img2,img3,img4,img5,img6]
  var settings = {
    dots: false,
    speed: 500,
    autoplay: true,
    draggable: true,
  autoplaySpeed: 2000,
  infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
  };
  const renderData = data.map((item,index)=> (
    <div key={index} className="page-two-slide-img">
      <img src={item} alt="" />
    </div>
  ))
  return (
    <div className="page-two">
      <div className="page-two-content">
        <div className="page-two-container">
        <div className="page-two-slide">
          <Slider arrows={false} {...settings}>{renderData}</Slider>
        </div>
            <div className={`text_wr ko`}>
              <p className="text-wr-one">
                Creative,
              </p>
              <p className="text-wr-two">
                Fun and-
              </p>
              <p className="text-wr-three">
              Enjoyable
              </p>
              <p className="text-wr-four" >
                Work
              </p>
              <p className="text-wr-five" >
              impressive
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
