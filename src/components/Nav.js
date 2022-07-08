import React, { useEffect, useState } from "react";
import "./css/Nav.css";

function Nav() {
   const [show, handleShow] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         //      if (window.scrollY > 120) {
         //         handleShow(true);
         //      } else {
         //         handleShow(false);
         //      }
         //   });
         window.innerWidth < 438
            ? window.scrollY > 75
               ? handleShow(true)
               : handleShow(false)
            : window.scrollY > 110
            ? handleShow(true)
            : handleShow(false);
      });
      //   return () => {
      //      window.removeEventListener("scroll");
      //   };
   }, []);

   return (
      <div className={`nav ${show && "nav__black"}`}>
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="nav__logo"
         />

         <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/366be133850498.56ba69ac36858.png"
            alt="Netflix Profile Icon"
            className="nav__avatar"
         />
      </div>
   );
}

export default Nav;
