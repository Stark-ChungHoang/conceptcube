import "./pageFive.scss";

function PageFive() {
  return (
    <div className="page-five">
      {/* {t("navbar.address")} */}
      <div className="fifth-container">
        <div className="fifth-title">
          <h5>
            Let's <br />
            Make the world
            <br />
            Together.
          </h5>
        </div>
        <div className="fifth-wrapper">
          <div className="block-item">
            <h3 className="fifth-name">Partnership..</h3>
            <div className="email">
              <a href="mailto:support@taejin.co.kr">
                <p className="fifth-contact">looc.tzlee@gmail.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Recruiting.</h3>
            <div className="email">
              <a href="mailto:support@taejin.co.kr">
                <p className="fifth-contact">looc.tzlee@gmail.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Learn more.</h3>
            <div className="email">
              <a href="/about">
                <p className="fifth-contact color-diff">
                  Learn more about us {">"}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFive;
