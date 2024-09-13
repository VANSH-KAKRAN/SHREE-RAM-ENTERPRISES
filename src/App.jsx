import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { HashRouter, Routes, Route, } from "react-router-dom";
import FloarTiles from "./NavigationComponents/FloarTiles";
import WallTiles from "./NavigationComponents/WallTiles";
import Aboutus from "./NavigationComponents/Aboutus";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<Home/>,

//   },

//   {
//     path:"/walltiles",
//     element:<WallTiles/>,

// }
// ,
// {
//   path:"/floartiles",
//   element:<FloarTiles/>,

// },
// {
//   path:"/aboutus",
//   element:<Aboutus/>,

// },


// ])
  return (
    <div>
      
      <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/walltiles" element={<WallTiles />}></Route>
        <Route path="/floartiles" element={<FloarTiles />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
      </Routes>
      </HashRouter>
      
       {/* <Navbar/>
       <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
