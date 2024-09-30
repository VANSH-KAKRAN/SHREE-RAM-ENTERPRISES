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
import HomeSecond from "./HomeSecond";
import HomeThree from "./HomeThree";
import HomeFour from "./HomeFour";
import Footer from "./Footer";
import carving from "../images/carving.jpg";
import glossmat from "../images/glossmat.jpg";
import marbletech from "../images/marbletech.jpg";
import matt from "../images/matt.jpg";
import mettalic from "../images/mettalic.jpg";
import polished from "../images/polished.jpg";
import rotomatt from "../images/rotomatt.jpg";
import superwhite from "../images/superwhite.jpg";
import infoimg from '../images/infoimage.png'

import "../Home/home.css";
import third1 from "../images/third1.jpg";
import third2 from "../images/third2.jpg";
import third3 from "../images/thrid3.jpg";
import third4 from "../images/third4.jpg";
import third5 from "../images/third5.jpg";
import third6 from "../images/third6.jpg";
import { Link } from "react-router-dom";


function Home() {
  function function1() {
    var image = carving;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    
    document.getElementById("big-text").innerText =
      "Carving finish gives crevices and grains across the surface of the slab, which can only be found in natural marbles and wood. You can touch and feel each grain by hand and witness the technologically advanced creation of ultimate beauty.";
  }
  function function2() {
    var image = glossmat;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "With a unique gloss and matt finish, Glossmatt is amongst the first technical body slabs to carry a dual effect. Some areas appear rough, while others look shiny and smooth, which can not only be seen, but also be touched and felt by hand.";
  }
  function function3() {
    var image = marbletech;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "Marbletech finish is the closest thing to natural marble. The marble-look is achieved with a special glaze coated on top of the design. Along with that, an elaborate polishing process gives the slab a marble-like smooth feel and shine.";
  }
  function function4() {
    var image = matt;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "Durable and slip resistant, these tiles are a perfect choice for indoors as well as outdoors. The matt finish complements perfectly with your vision of creating spaces that look traditional and rustic.";
  }
  function function5() {
    var image = mettalic;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "A Metallic finish tiles is unlike anything you have seen before. A special technique is employed to give an authentic metallic look and feel. Stylish streaks enhance the aesthetic appeal and render a unique fusion.";
  }
  function function6() {
    var image = polished;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "A spectacular mirror like effect is what you get in this superior finish. The highly polished look is achieved with a thicker coat of glaze, enhancing image sharpness and giving you a rich and true color experience.";
  }
  function function7() {
    var image = rotomatt;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "Rotomatt is the perfect choice to achieve a timeless, classic look. The elegant, traditional hues of the finish render a relaxing character to your spaces. Slabs of the finish give you the creative flexibility to style your rooms, the way you like.";
  }
  function function8() {
    var image = superwhite;
    var imageHtml =
      '<img src="' + image + '" alt="My Image" width="500" height="330">';
    document.getElementById("tilesimages").innerHTML = imageHtml;
    document.getElementById("big-text").innerText =
      "Superwhite finish stands at an impressive 93% on the L Value Scale, lending it the purest of white hues. Its superior white colour adds sophistication to any living space, while creating an illusion of a white space, brightened with natural light.";
  }
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev carousel-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next carousel-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      {/* <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
      {/* <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <section className="section-wall">
        <div className="section-wall-left">
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
          <Link to="/walltiles">
          <button> EXPLORE ALL</button>
          </Link>
        </div>
        <div className="section-wall-right">
          <div>
            <img src={bathroom} alt="" />
            <p className="section-wall-right-p1">Bathroom Wall Tiles</p>
            <p  className="section-wall-right-p2"></p>
          </div>
          <div>
            <img src={house} alt="" />
            <p className="section-wall-right-p1">Front Wall Tiles</p>
            <p className="section-wall-right-p2"></p>
          </div>
          <div>
            <img src={kitchen} alt="" />
            <p className="section-wall-right-p1">Kitchen Wall Tiles</p>
            <p className="section-wall-right-p2"></p>
          </div>
          <div>
            <img src={livingroom} alt="" />
            <p className="section-wall-right-p1">Livingroom Wall Tiles</p>
            <p className="section-wall-right-p2"></p>
          </div>
        </div>
      </section>
      <div>
      <section className="section-wall2">
        <div className="section-wall-left2">
          <p className="sec1-text1">
            SHREE RAM ENTERPRISES BRINGS YOU PREMIUM TILES
          </p>
          <p className="sec1-text2">Explore Our Floar Tiles</p>
          <p className="sec1-text3">
            Shree Ram Enterprises brings to you premium floar tiles that are
            detailed with perfection. Each tile is made using state of the art
            technology making them strong, durable & easy to maintain.
          </p>
          <img src={small3} alt="" />

          <Link to="/floartiles">
          <button> EXPLORE ALL</button>
          </Link>

        </div>
        <div className="section-wall-right">
          <div>
            <img src={bathroom} alt="" />
            <p className="section-wall-right-p1">Bathroom Floar Tiles</p>
            <p  className="section-wall-right-p2"></p>
          </div>
          <div>
            <img src={house} alt="" />
            <p className="section-wall-right-p1">Front Floar Tiles</p>
            <p className="section-wall-right-p2"></p>
          </div>
          <div>
            <img src={kitchen} alt="" />
            <p className="section-wall-right-p1">Kitchen Floar Tiles</p>
            <p className="section-wall-right-p2"></p>
          </div>
          <div>
            <img src={livingroom} alt="" />
            <p className="section-wall-right-p1">Livingroom Floar Tiles</p>
            <p className="section-wall-right-p2"></p>
          </div>
        </div>
      </section>
    </div>
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
    <div>
      <div className="aboutTiles">
        <div className="aboutTiles-left">
        <p className="kaf">Know About Finishing</p>
          <div className="onclick">
            <p onClick={function1}>Carving</p>
            <p onClick={function2}>Glossmat</p>
            <p onClick={function3}>Marbletech</p>
            <p onClick={function4}>Matt</p>
            <p onClick={function5}>Mettalic</p>
            <p onClick={function6}>Polished</p>
            <p onClick={function7}>Rotomatt</p>
            <p onClick={function8}>Superwhite</p>
          </div>
          <p id="big-text">CHOOSE TILES TYPE WHICH YOU WANNA KNOW ABOUT</p>
        </div>
          <div className="aboutTiles-right" id="tilesimages"><img className="infoimage" src={infoimg} alt="" /></div>
     
      </div>
    </div>
    <div style={{background:"#e0e0e0",marginTop:"150px"}}>
      <div className="footer">
        <p className="sre">SHREE RAM ENTERPRISES</p>
        <div className="callEmail">
          <div className="call">
            <p className="key">CALL</p>
            <hr className="hrcall" />
            <p className="value">8868988564</p>
          </div>
          <div className="email">
            <p className="key">EMAIL</p>
            <hr className="hremail" />
            <p  className="value">shreeramenterprises@email.com</p>
          </div>
          <div className="connect">
            <p className="key">Contact</p>
            <hr className="hrcontact" />
            <div className="svg" >

            <a target="_blank" href="https:/www.instagram.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
                >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a href="https:/www.linkidin.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
                >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
                  </div>
          </div>
        </div>
      </div>
        <hr className="lasthr" />
        <p className="RIGHTS">SHREE RAM ENTERPRISES © All Rights Reserved</p>
    </div>
   
    </div>
  );
}

export default Home;

{/* <HomeSecond />
<HomeThree />
<HomeFour />
<Location />
<Footer /> */}