import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
// import { FaFacebook,FaYoutube} from "react-icons/fa"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faYoutube ,faGithub} from '@fortawesome/free-brands-svg-icons'
import "./Footer.css";

const Footer = ()=>{
   return (
      <footer id="footer">
         
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SELL-ZONE.</h1>
        <p>An Initiative that works.</p>

        <p>Copyrights 2023 &copy; Sk</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        
        <a  href="https://www.linkedin.com/in/kalpana-meena/"  >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
         
        <a  href="http://youtube.com/6packprogramemr">
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </a>
        <a  href="https://github.com/Kalpana2025/SELL-ZONE">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>
     

      </footer>
   );
};

export default Footer