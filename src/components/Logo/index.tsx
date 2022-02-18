import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
const Logo = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className={`maxius-logo`}>
      <a href="#firstPage" onClick={(e) => {
        if (pathname === "/") {
        } else {
          e.preventDefault();
          navigate("/");
        }
      }} >MAXIUS</a>
    </div>
  );
};

export default Logo;
