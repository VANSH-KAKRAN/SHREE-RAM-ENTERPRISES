import React from "react";
import "./home.css";
import slider1 from "../images/sliderimg1.jpg";
import slider2 from "../images/sliderimg2.jpg";
import slider3 from "../images/sliderimg3.jpg";
import small3 from "../images/small3.png";
import bathroom from "../images/bathroom.png";
import house from "../images/house.png";
import kitchen from "../images/kitchen.png";
import livingroom from "../images/livingroom.png";


function HomeSecond() {
  return (
    <div>
      <section className="section-wall2">
        <div className="section-wall-left2">
          <p className="sec1-text1">
            SHREE RAM ENTERPRISES BRINGS YOU PREMIUM TILES
          </p>
          <p className="sec1-text2">Explore Our Wall Tiles</p>
          <p className="sec1-text3">
            Shree Ram Enterprises brings to you premium wall tiles that are
            detailed with perfection. Each tile is made using state of the art
            technology making them strong, durable & easy to maintain.
          </p>
          <img src={small3} alt="" />
          <button>EXPLORE ALL</button>
        </div>
        <div className="section-wall-right">
          <div>
            <img src={bathroom} alt="" />
            <p className="section-wall-right-p1">Bathroom Wall Tiles</p>
            <p  className="section-wall-right-p2">Explore Now</p>
          </div>
          <div>
            <img src={house} alt="" />
            <p className="section-wall-right-p1">Front Wall Tiles</p>
            <p className="section-wall-right-p2">Explore Now</p>
          </div>
          <div>
            <img src={kitchen} alt="" />
            <p className="section-wall-right-p1">Kitchen Wall Tiles</p>
            <p className="section-wall-right-p2">Explore Now</p>
          </div>
          <div>
            <img src={livingroom} alt="" />
            <p className="section-wall-right-p1">Livingroom Wall Tiles</p>
            <p className="section-wall-right-p2">Explore Now</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSecond;
