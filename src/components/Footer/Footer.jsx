import "./Footer.css";
import Flogo from "../../assets/SS_Main_white.svg";;

const Footer = () => {
  return (
    <footer>
      <div className="ftop">
      <div className="logo">
        <img src={Flogo} alt="" />
      </div>
      <div className="footerList">
        <a href="/about">Help Centre</a>
        <a href="/about">Privacy Policy</a>
        <a href="/about">Terms and Conditions</a>
      </div>
      </div>
      <div className="copywrite">© Survey Spotter. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
