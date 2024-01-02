import Survey from "../../assets/feature-surveys.svg";
import Signup from "../../assets/feature-signup.svg";
import Rewards from "../../assets/feature-rewards.svg";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="howItWorks">
      <div className="workingWrapper">
        <div className="sectionHeading">
          <h2>How It Wroks</h2>
          <p>It couldn't be easier. Just follow these simple steps</p>
        </div>
        <div className="workingBoxes">
          <div className="workingBox">
            <img src={Signup} className="sinimg" alt="" />
            <div className="boxTitle">
              <span>1</span> <h3>Sign up for free using our form above</h3>
            </div>
            <p>
              Register and we will match you to the best survey companies. It’s
              fast, easy and 100% free!
            </p>
          </div>
          <div className="workingBox">
            <img src={Survey} alt="" />
            <div className="boxTitle">
              <span>2</span> <h3>Select and complete online surveys</h3>
            </div>
            <p>
              Receive regular survey invitations and money-making <br /> opportunities.
              Look out for new opportunities and complete every one to maximise
              your earnings.
            </p>
          </div>
          <div className="workingBox">
            <img src={Rewards} alt="" />
            <div className="boxTitle">
              <span>3</span> <h3>Get rewarded with gift cards & cash
</h3>
            </div>
            <p>
              Get paid by the panels in the reward of your choice - cash or
              vouchers for your favourite shop!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
