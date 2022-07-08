import React from "react";
import "./css/Footer.css";

function Footer() {
   return (
      <footer className="footer">
         <p className="footer__text">
            Created by
            <a
               href="https://github.com/Fachi-r"
               target="_blank"
               rel="noopener noreferrer"
            >
               {" "}
               Fachi{" "}
            </a>
            using
            <a
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               {" "}
               React{" "}
            </a>
         </p>
      </footer>
   );
}

export default Footer;
