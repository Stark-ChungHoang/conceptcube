import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pageFourth.scss";
import DataHistory from "./DataHistory.json";
import dataEn from "./dataen.json";
import { useTranslation } from 'react-i18next';
function PageFourth() {
  //translate
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(DataHistory);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
    ],
  };
  const renderData = data.history.map((val, index) => (
    <div className="item-history" key={val.id}>
      <div className="year">
        <p className={"year" + val.year}>{val.year}</p>
      </div>
      <div className="item-box">
        {val.childrenYears.map((child, i) => {

          return (
            <div className="item-year" key={child.id}>
              <h2 dangerouslySetInnerHTML={{ __html: child.title }} />
              <p dangerouslySetInnerHTML={{ __html: child.type }} />
            </div>
          );
        })}
      </div>
    </div>
  ));


  useEffect(() => {
    if (i18n.language === "ko") {
      setData(DataHistory);
    } else {
      setData(dataEn);
    }
  }, [i18n.language]);


  return (
    <div className="page-fourth">
      <div className="fourth-container">
        <h1 className="fourth-title">History</h1>
        <div className="list-history">
          <Slider arrows={false}  {...settings}>{renderData}</Slider>
        </div>

      </div>
    </div>
  );
}

export default PageFourth;
