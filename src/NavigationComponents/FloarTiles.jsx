import React from "react";
import "../NavigationComponents/NavigationComponent.css";
import black from "../images/floar/double/black.png";
import all_data from './data'
import Item from "./Item";
import Footer from "../Home/Footer";

function FloarTiles() {
  return (
    <div>
      <div className="floorTiles">
        <div className="ft-main-back">
          <p>Floar TIles</p>
          <p>
            Shree Ram Enterprises Ceramics’ range of luxurious floor tiles
            integrates technological expertise with exquisite designs. Each tile
            is crafted using ultra-modern technology to ensure high quality.
            These premium floor tiles come in a variety of unique designs and
            sizes which makes them a showstopper, always. With the graceful
            colour schemes and the elegant designs, each tile is a masterpiece
            on its own. Apart from having amazing looks our tiles are also
            strong, durable and low maintenance. Our floor tiles are perfect for
            homes, hotels & workspaces.
          </p>
        </div>
        <p className="doublecharge">
          Multi Charge
        </p>
        </div>
        {/* <div className="double">
          <img src={item.back} alt="" />
          <div className="left">
          <img src={item.tileimg} alt="" />
          <div className="main-">
          <p>{item.name}</p>
          <p>{item.data1}</p>
          <p>{item.feature1}</p>
          <p>{item.feature2}</p>
          <p>{item.feature3}</p>
          <p>{item.feature4}</p>
          <p>{item.feature5}</p>
          
            </div>
            </div>
            </div> */}
            <div className="testing">
            {all_data.map((item,i)=>{
            return <Item name={item.name} back={item.back} tileimg={item.tileimg} data1={item.data1} feature1={item.feature1} feature2={item.feature2} feature3={item.feature3} feature4={item.feature4} feature5={item.feature5} />
            })}
            </div>
            <Footer/>
    </div>
  
  );
}

export default FloarTiles;
