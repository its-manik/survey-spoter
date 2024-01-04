import "./Hero.css";
import Male from "../../assets/male-icon.svg";
import Female from "../../assets/female-icon.svg";
import Check from "../../assets/check-solid.svg";
import { useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";

const Hero = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [yesNo, setYesNo] = useState("");
  const [gender, setGender] = useState("");

  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();
    if (day && month && year) {
      return setIsSignup(true);
    } else {
      console.log("nothing");
      return setIsSignup(false);
    }
  }

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
      {!isSignup ? (
        <div className="firstHome">
          <div className="hero_content">
            <h1>
              Start <span>Earning Cash Today</span> with Online Survyes
            </h1>
            <h2>
              Earn Up To £300 Per Month Or £25 Per Survey* In Your Spare Time!
            </h2>
            <ul>
              <li>Sign up is fast, easy and 100% free</li>
              <li>We match you to the best survey companies</li>
              <li>You earn rewards for joining & taking surveys</li>
              <li>Join today! Limited spaces available</li>
            </ul>
          </div>
          <form className="signup">
            <h2>Sign Up & Start Earning Now</h2>
            <p>Select Your Gender *</p>
            <div className="gender">
              <div className="gender-box">
                <label className="custom-radio" required>
                  <input
                    type="radio"
                    name="gender"
                    required
                    value=""
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="radio-btn">
                    <img src={Check} alt="check" />
                    <div className="backOfCheck"></div>
                    <div className="gender-pic">
                      <img src={Male} alt="Male" />
                    </div>
                  </span>
                  <span className="gender-type">Male</span>
                </label>
              </div>
              <div className="gender-box">
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="gender"
                    required
                    value=""
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="radio-btn">
                    <img src={Check} alt="check" />
                    <div className="backOfCheck"></div>
                    <div className="gender-pic">
                      <img src={Female} alt="Female" />
                    </div>
                  </span>
                  <span className="gender-type">Female</span>
                </label>
              </div>
            </div>
            <div className="dob">
              <span>Date of Birth *</span>
              <div className="dob-inputs">
                <select
                  name="day"
                  required
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option selected value="">
                    Day
                  </option>
                  <option value="1" id="">
                    1
                  </option>
                  <option value="2" id="">
                    2
                  </option>
                  <option value="3" id="">
                    3
                  </option>
                  <option value="4" id="">
                    4
                  </option>
                  <option value="5" id="">
                    5
                  </option>
                  <option value="6" id="">
                    6
                  </option>
                  <option value="7" id="">
                    7
                  </option>
                  <option value="8" id="">
                    8
                  </option>
                  <option value="9" id="">
                    9
                  </option>
                  <option value="9" id="">
                    10
                  </option>
                  <option value="10" id="">
                    11
                  </option>
                  <option value="11" id="">
                    12
                  </option>
                  <option value="12" id="">
                    13
                  </option>
                  <option value="13" id="">
                    14
                  </option>
                  <option name="number" id="">
                    15
                  </option>
                  <option name="number" id="">
                    16
                  </option>
                  <option name="number" id="">
                    17
                  </option>
                  <option name="number" id="">
                    18
                  </option>
                  <option name="number" id="">
                    19
                  </option>
                  <option name="number" id="">
                    20
                  </option>
                  <option name="number" id="">
                    21
                  </option>
                  <option name="number" id="">
                    22
                  </option>
                  <option name="number" id="">
                    23
                  </option>
                  <option name="number" id="">
                    24
                  </option>
                  <option name="number" id="">
                    25
                  </option>
                  <option name="number" id="">
                    26
                  </option>
                  <option name="number" id="">
                    27
                  </option>
                  <option name="number" id="">
                    28
                  </option>
                  <option name="number" id="">
                    29
                  </option>
                  <option name="number" id="">
                    30
                  </option>
                  <option name="number" id="">
                    31
                  </option>
                </select>

                <select
                  name="month"
                  id="month"
                  required
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option selected value="">
                    Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select
                  name="year"
                  required
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" selected>
                    Year
                  </option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="">2001</option>
                  <option value="">2000</option>
                  <option value="">1999</option>
                  <option value="">1998</option>
                  <option value="">1997</option>
                  <option value="">1996</option>
                  <option value="">1995</option>
                  <option value="">1994</option>
                  <option value="">1993</option>
                  <option value="">1992</option>
                  <option value="">1991</option>
                  <option value="">1990</option>
                </select>
              </div>
            </div>
            <button className="btn-pink" type="submit" onClick={signup}>
              SIGN UP FREE
            </button>
            <span className="signup-notice">
              🔒 Your data is always protected with us. Read our Privacy Policy
            </span>
          </form>
          <p className="heroPara">
            *The amount of money you can earn depends on the number of survey
            panels you register with, and how many surveys you complete. As an
            example, an average survey payout is £3. By taking 5 surveys per
            day, 5 days a week, you could earn £300/month.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Hero;
