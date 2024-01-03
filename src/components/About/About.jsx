import "./About.css";
import Info1 from "../../assets/info-1.jpg";
import Info2 from "../../assets/info-2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="aboutWrapper">
        <div className="aboutTop">
          <div className="aboutLeft">
            <h2>Who We Are</h2>
            <p>
              Survey Spotter has been able to spot and bring all the UK’s best
              surveys together on one easy site for you to access. Allowing you
              to sign up and instantly have access to a large selection of
              surveys for you to complete in exchange of rewards. We are always
              on the look for new and exciting surveys for you to take, so keep
              an eye out for new opportunities to earn!
            </p>
            <br /> 
            <p>
              If you have any questions please feel free to use our 
              <a href="#"> help page</a>
            </p>
          </div>
          <div className="aboutRight">
            <img src={Info1} alt="" />
          </div>
        </div>
        <div className="aboutBottom" id="about">
          <div className="aboutLeft">
            <img src={Info2} alt="" />
          </div>
          <div className="aboutRight">
            <h2>Data Protection</h2>
            <p>
              Your personal data is always taken seriously here at Survey
              Spotter. Once you have signed up to Survey Spotter your data is
              safe, and will be used to inform you of the latest offers we might
              have!
            </p>
            <br /> 
            <p>
              You can opt out of communications from Survey Spotter at any time,
              and can always use our <a href="#"> help page.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
