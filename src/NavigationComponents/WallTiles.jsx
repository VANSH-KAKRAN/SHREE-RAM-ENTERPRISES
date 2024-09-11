import React from "react";
import "../NavigationComponents/NavigationComponent.css";
import Walltilesitom from "./Walltilesitom";
import wall_data from "./floartilesdata";
import Footer from "../Home/Footer";
function WallTiles() {
  return (
    <div>
      <div className="floorTiles">
        <div className="ft-main-back">
          <p>Wall TIles</p>
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
        <div className="single-main">
          <div className="singleCharge">
            {wall_data.map((item, i) => {
              return (
                <Walltilesitom
                  key={i}
                  number={item.number}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WallTiles;
