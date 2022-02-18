import { useTranslation } from "react-i18next";
import img1 from "../../../assets/images/on-game-dev-img.png"
import img2 from "../../../assets/images/on-ui-design-img.png"
import img3 from "../../../assets/images/on-si-img.png"
import img4 from "../../../assets/images/on-game-mar-img.png"
import img1_1 from "../../../assets/images/off-game-dev-img.png"
import img2_1 from "../../../assets/images/off-ui-design-img.png"
import img3_1 from "../../../assets/images/off-si-img.png"
import img4_1 from "../../../assets/images/off-game-mar-img.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pageThree.scss";
function PageThree() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
    ],
  };
  const { t } = useTranslation();
  const renderText = (type: string) => {
    const data = t("home", { returnObjects: true }) as any;
    return <div className="page-three-content-detail">
      <div className="content-detail-title">
      {data.thirdPage[type].title}
      </div>
      <div className="content-detail-sub">
      {data.thirdPage[type].text}
      </div>
      </div>;
  };
  return (
    <div className="page-three">
      <div className="page-three-container">
        <div className="pageThree-main">
        <div className="page-three-content">
        <Slider arrows={false} {...settings}>

        <div className="item pageThree-item-first">
            <div className="item-content">
              <p className="title title_first">Game <br />Development</p>
              <div className="item-img">
                    <img className="img-on" src={img1} alt="" />
                    <img className="img-off" src={img1_1} alt="" />
              </div>
              <div className="desc">{renderText("game-dev")}</div>
            </div>
          </div>

          <div className="item pageThree-item-second">
            <div className="item-content">
              <p className="title title_second">UI<br />design</p>
              <div className="item-img">
                    <img className="img-on" src={img2} alt="" />
                    <img className="img-off" src={img2_1} alt="" />
              </div>
              <div className="desc">{renderText("ui-design")}</div>
            </div>
          </div>
          <div className="item pageThree-item-third">
            <div className="item-content">
              <p className="title title_third">SI <br />
              <span style={{opacity:0}}>hidden</span>
              </p>
              <div className="item-img">
                    <img className="img-on" src={img3} alt="" />
                    <img className="img-off" src={img3_1} alt="" />
              </div>
              <div className="desc">{renderText("si")}</div>
            </div>
          </div>
          <div className="item pageThree-item-fourth">
            <div className="item-content">
              <p className="title title_fourth note">Game <br />Marketing</p>
              <div className="item-img">
                    <img className="img-on" src={img4} alt="" />
                    <img className="img-off" src={img4_1} alt="" />
              </div>
              <div className="desc">{renderText("game-marketing")}</div>
            </div>
          </div>
       
        </Slider>
          </div>
    
        </div>
         </div>
    </div>
  );
}

export default PageThree;
