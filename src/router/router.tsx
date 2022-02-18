import gsap from "gsap/all";
import React  from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import Works from "../pages/Works";

const Router = () => {
  const { pathname } = useLocation();
  if (pathname.toLocaleLowerCase() === "/contact" || pathname.toLocaleLowerCase() === "/works") {
    gsap.to(" .btn-toggle span ", { background: "#222" });
    gsap.to(".changeLang", { color: "#222222" });
  } if (pathname.toLocaleLowerCase() === "/teams" ) {
    gsap.to(" .btn-toggle span ", { background: "#fff" });
    gsap.to(".changeLang", { color: "#fff" });
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/works" element={<Works />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
};

export default Router;
