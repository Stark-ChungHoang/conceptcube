import React, { Suspense } from "react";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Router from "./router/router";

const App = () => {
  return (
    <React.Fragment>
      <Router />
      <NavBar />
      {/* <Logo /> */}
    </React.Fragment>
  );
};

export default App;
