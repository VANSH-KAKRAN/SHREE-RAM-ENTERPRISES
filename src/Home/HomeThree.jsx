import React from "react";
import "../Home/home.css";
import third1 from "../images/third1.jpg";
import third2 from "../images/third2.jpg";
import third3 from "../images/thrid3.jpg";
import third4 from "../images/third4.jpg";
import third5 from "../images/third5.jpg";
import third6 from "../images/third6.jpg";

function HomeThree() {
  return (
    <div style={{background:"#e7e7e7"}}>
      <div className="carousels-main">
        <p className="carousels-text1">OUR MESMERIZING RANGE OF DESIGNER TILES</p>
        <p className="carousels-text2">Trending Products</p>
        <div className="carousels">
          <div className="carousels-itom">
            <img src={third1} alt="" />
            <p className="crousel-itom-text1">The Ultimate 4DX</p>
            <p  className="crousel-itom-text2">
              The 4DX Series by Kajaria Eternity is not just a product line;
              it's a statement of progressive thinking and exceptional design.
            </p>
          </div>
          <div className="carousels-itom">
            <img src={third2} alt="" />
            <p className="crousel-itom-text1">The Ultimate 4DX</p>
            <p  className="crousel-itom-text2">
              The 4DX Series by Kajaria Eternity is not just a product line;
              it's a statement of progressive thinking and exceptional design.
            </p>
          </div>
          <div className="carousels-itom">
            <img src={third3} alt="" />
            <p  className="crousel-itom-text1">The Ultimate 4DX</p>
            <p  className="crousel-itom-text2">
              The 4DX Series by Kajaria Eternity is not just a product line;
              it's a statement of progressive thinking and exceptional design.
            </p>
          </div>
          <div className="carousels-itom">
            <img src={third4} alt="" />
            <p  className="crousel-itom-text1">The Ultimate 4DX</p>
            <p  className="crousel-itom-text2">
              The 4DX Series by Kajaria Eternity is not just a product line;
              it's a statement of progressive thinking and exceptional design.
            </p>
          </div>
          <div className="carousels-itom">
            <img src={third5} alt="" />
            <p  className="crousel-itom-text1">The Ultimate 4DX</p>
            <p  className="crousel-itom-text2">
              The 4DX Series by Kajaria Eternity is not just a product line;
              it's a statement of progressive thinking and exceptional design.
            </p>
          </div>
          <div className="carousels-itom">
            <img src={third6} alt="" />
            <p  className="crousel-itom-text1">The Ultimate 4DX</p>
            <p  className="crousel-itom-text2">
              The 4DX Series by Kajaria Eternity is not just a product line;
              it's a statement of progressive thinking and exceptional design.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeThree;
