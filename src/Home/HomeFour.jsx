import React, { useState } from "react";
import '../Home/home.css'
import carving from "../images/carving.jpg";
import glossmat from "../images/glossmat.jpg";
import marbletech from "../images/marbletech.jpg";
import matt from "../images/matt.jpg";
import mettalic from "../images/mettalic.jpg";
import polished from "../images/polished.jpg";
import rotomatt from "../images/rotomatt.jpg";
import superwhite from "../images/superwhite.jpg";
import infoimg from '../images/infoimage.png'

function HomeFour() {
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
  );
}

export default HomeFour;
