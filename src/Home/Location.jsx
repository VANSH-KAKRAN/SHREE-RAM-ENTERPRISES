import React from "react";
import "../Home/home.css";

function Location() {
  return (
    <div>
      <div className="Location">
        <div className="name">
        Shree Ram Enterprises (Tiles Showroom)
        </div>
        <div className="address">
        Hapur - Modinagar Rd, opposite Moti City, Aurangabad Gadana, Modinagar, Uttar Pradesh 201204

        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259.798122777712!2d77.59189027107843!3d28.826562872206367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8bd03461fc61%3A0xcc1cbd5eef562119!2sShree%20Ram%20Enterprises%20(Tiles%20Showroom)!5e0!3m2!1sen!2sin!4v1725370168379!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
