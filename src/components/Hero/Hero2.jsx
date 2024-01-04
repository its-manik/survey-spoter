import "./Hero.css";
import Male from "../../assets/male-icon.svg";
import Female from "../../assets/female-icon.svg";
import Check from "../../assets/check-solid.svg";
import { useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";

const Hero2 = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [yesNo, setYesNo] = useState("");


  const navigate = useNavigate();

  function signAgain(e) {
    e.preventDefault();
    if (email && firstName && lastName && yesNo) {
      console.log("workidsdfng");
      return navigate("/offers");
    } else {
      console.log("nothing");
      return;
    }
  }

  return (
    <div className="hero" id="hero">



        <div className="secondHome">
          <div className="hero_content">
            <h1>
              Great news! We have found survey companies looking for males aged
              22.
            </h1>
            <h2>Please enter your Name and Email Address below to continue.</h2>
          </div>
          <form className="signup signup2">
            <h2>Complete Your Details & Start Earning</h2>
            <div className="inputBox">
              <div className="email">
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="names">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="selectOne">
                <p>
                  To consent to receive daily emails about new survey companies
                  from SurveySpotter, click Yes
                </p>
                <div>
                  <button
                    type="button"
                    className={`yes ${yesNo === "yes" ? "activeYes" : ""}`}
                    onClick={() => setYesNo("yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`no ${yesNo === "no" ? "activeNo" : ""}`}
                    onClick={() => setYesNo("no")}
                  >
                    No
                  </button>
                </div>
              </div>
              <p className="unsubscribe">You can unsubscribe at any time.</p>
            </div>
            <button className="btn-pink" type="submit" onClick={signAgain}>
              SIGN UP AND START EARNING
            </button>
            <div className="sbottom">
              <p>
                By clicking Sign Up you agree to the{" "}
                <a href="#">Terms & Conditions</a> and confirm that I have read
                and agree to SurveySpotter.com <a href="#">Privacy Policy</a>.
              </p>
              <span className="signup-notice">
                🔒 Your data is always protected with us. Read our Privacy
                Policy
              </span>
            </div>
          </form>
          <p className="heroPara">
            *The amount of money you can earn depends on the number of survey
            panels you register with, and how many surveys you complete. As an
            example, an average survey payout is £3. By taking 5 surveys per
            day, 5 days a week, you could earn £300/month.
          </p>
        </div>
    </div>
  );
};

export default Hero2;
