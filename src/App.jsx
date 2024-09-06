import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import HomeSecond from "./Home/HomeSecond";
import HomeThree from "./Home/HomeThree";
import HomeFour from "./Home/HomeFour";
import Location from "./Home/Location";
import Footer from "./Home/Footer";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import FloarTiles from "./NavigationComponents/FloarTiles";
import WallTiles from "./NavigationComponents/WallTiles";
import Aboutus from './NavigationComponents/Aboutus'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/walltiles" element={<WallTiles/>}></Route>
        <Route path="/floartiles" element={<FloarTiles/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        {/* <Route path="/contactus" element={<Home/>}></Route> */}
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
