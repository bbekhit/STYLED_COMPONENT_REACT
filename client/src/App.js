import React from "react";
import Home from "./Pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Globals/Navbar";
import Navbar1 from "./components/Globals/Navbar1";
import Navbar2 from "./components/Globals/Navbar2";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar2 />
      <Home />
    </>
  );
}

export default App;
