import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { menu } from "./menu";
import { Link } from "react-router-dom";
const contact = {
  adress: "경기도 의왕시 이미로 40 인덕원 IT벨리 A동 411호",
  tell: " Tel 02. 851. 2662/ Fax 02. 851. 2662",
  email: "support@taejin.co.kr",
};

const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      toggle_ref.current.classList.toggle("open");
      content_ref.current.classList.toggle("open");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        toggle_ref.current.classList.remove("open");
        content_ref.current.classList.remove("open");
      }
    }
  });
};

const NavBar = () => {
  //setup dropdown menu items
  const [isOpen, setIsOpen] = useState("");
  // end
  const { pathname } = useLocation();
  const pathname_1 = useLocation()
  
  const { t, i18n } = useTranslation();
  const handleToggleMenu = () => {
    document.getElementById("menu")?.classList.remove("open");
    document.getElementById("toggle")?.classList.remove("open");
  };
  const navigate = useNavigate();

  const toggle_el = useRef(null);
  const content_el = useRef(null);

  useEffect(() => {
    if (content_el.current && toggle_el.current) {
      clickOutsideRef(content_el, toggle_el);
    }
  }, [toggle_el, content_el]);

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const renderTextNavbar = () => {
    const data = t("navbar", { returnObjects: true }) as any;
    return <>{data.address}</>;
  };

  return (
    <div className="menuAreaWrapper">
      <nav role="navigation">
        <div id="menuToggle">
          <div className="changeLangWrapper">
          <div
              onClick={() => handleLanguage("ko")}
              className={`changeLang ${i18n.language === "ko" && pathname_1.hash === "#fourthPage" ? "activeNavige" : ""}  ${i18n.language === "ko" ? "select selectActiveMenu" : ""}`}
            >
              KR
            </div>
            <div
              onClick={() => handleLanguage("en")}
              className={`changeLang en ${pathname_1.hash === "#fourthPage" && i18n.language === "en" ? "activeNavige" : ""} ${i18n.language === "en" ? "select selectActiveMenu" : ""
                }`}
            >
              EN
            </div>
           
          </div>
          <div ref={toggle_el} id="toggle" className="btn-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul ref={content_el} id="menu">
            <div className="changeLangWrapperMenu">
            <div
                onClick={() => handleLanguage("ko")}
                className={`changeLangMemnu ko ${i18n.language === "ko" ? "select" : ""
                  }`}
              >
                KR
              </div>
              <div
                onClick={() => handleLanguage("en")}
                className={`changeLangMemnu en ${i18n.language === "en" ? "select" : ""
                  }`}
              >
                EN
              </div>
              
            </div>
            <div className="list-menu-sidebar">
            {menu.map((val, key) => (
              <Link
                key={key}
                onClick={handleToggleMenu}
                className={`list ${pathname.toLowerCase() === val.path.toLowerCase()
                    ? "select"
                    : ""
                  }`}
                to={val.path}
              >
                <li>{val.display}</li>
              </Link>
            ))}
            </div>
            <div className="infoWrapper">
              <p id="adress">
                {renderTextNavbar()}
                <br />
                {contact.tell}
              </p>
              <p className="link">
                <a href="/" target="blank">
                  View Map
                </a>
              </p>
              <br />
              <p>Company.</p>
              <p className="link">
                <a href={`mailto:${contact.email}`} title="">
                  {contact.email}
                </a>
              </p>
              <br />
              <p>Technical support </p>
              <p className="link">
                <a href={`mailto:${contact.email}`} title="">
                  {contact.email}
                </a>
              </p>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
