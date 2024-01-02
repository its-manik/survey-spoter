import "./Hero.css";
import Male from "../../assets/male-icon.svg";
import Female from "../../assets/female-icon.svg";
import Check from "../../assets/check-solid.svg";

const Hero = () => {
  return (
    <div className="hero">
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
      <div className="signup">
        <h2>Sign Up & Start Earning Now</h2>
        <p>Select Your Gender *</p>
        <div className="gender">
          <div className="gender-box">
          <label className="custom-radio">
            <input type="radio" name="radio" />
            <span className="radio-btn">
              <img src={Check} alt="check" />
              <div className="backOfCheck"></div>
              <div className="gender-pic">
                <img src={Male} alt="Male" />
              </div>
            </span>
            <span className="gender-type">
              Male
            </span>
          </label>
          </div>
          <div className="gender-box">
          <label className="custom-radio">
            <input type="radio" name="radio" />
            <span className="radio-btn">
              <img src={Check} alt="check" />
              <div className="backOfCheck"></div>
              <div className="gender-pic">
                <img src={Female} alt="Female" />
              </div>
            </span>
            <span className="gender-type">
              Female
            </span>
          </label>
          </div>
        </div>
        <div className="dob">
          <span>Date of Birth *</span>
          <div className="dob-inputs">
            <select name="day">
              <option selected desabled>Day</option>
              <option name="number" id="">1</option>
              <option name="number" id="">2</option>
              <option name="number" id="">3</option>
              <option name="number" id="">4</option>
              <option name="number" id="">5</option>
              <option name="number" id="">6</option>
              <option name="number" id="">7</option>
              <option name="number" id="">8</option>
              <option name="number" id="">9</option>
              <option name="number" id="">10</option>
              <option name="number" id="">11</option>
              <option name="number" id="">12</option>
              <option name="number" id="">13</option>
              <option name="number" id="">14</option>
              <option name="number" id="">15</option>
              <option name="number" id="">16</option>
              <option name="number" id="">17</option>
              <option name="number" id="">18</option>
              <option name="number" id="">19</option>
              <option name="number" id="">20</option>
              <option name="number" id="">21</option>
              <option name="number" id="">22</option>
              <option name="number" id="">23</option>
              <option name="number" id="">24</option>
              <option name="number" id="">25</option>
              <option name="number" id="">26</option>
              <option name="number" id="">27</option>
              <option name="number" id="">28</option>
              <option name="number" id="">29</option>
              <option name="number" id="">30</option>
              <option name="number" id="">31</option>
            </select>

            <select name="month" id="month">
              <option desabled selected>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>Desember</option>
            </select>

            <select name="year" >
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              <option value="">2009</option>
              <option value="">2008</option>
              <option value="">2007</option>
              <option value="">2006</option>
              <option value="">2005</option>
              <option value="">2004</option>
              <option value="">2003</option>
              <option value="">2002</option>
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
        <button className="btn-pink">
          SIGN UP FREE
        </button>
        <span className="signup-notice">🔒 Your data is always protected with us. Read our Privacy Policy</span>
      </div>
    </div>
  );
};

export default Hero;
