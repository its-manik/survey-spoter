import React from "react";
import "./LastStep.css";
import Navbar from "../components/Navbar/Navbar";
import amazon from "../assets/amazon.webp";
import paypal from "../assets/paypal.webp";
import { Link, useNavigate } from "react-router-dom";

const LastStep = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <section className="lastHero">
        <div className="lastHeroContent">
          <h1>LAST STEP: IMPORTANT! PLEASE CHECK YOUR EMAILS NOW</h1>
          <h2>
            Your first surveys are ready for you! To access your surveys and
            start earning rewards, you must confirm your registration to each
            company that you selected
            <br />
            <span>
              IMPORTANT: This step MUST be completed to ensure that you can get
              paid.
            </span>
          </h2>
          <button>GO TO YOUR INBOX</button>
        </div>
      </section>
      <section className="finalStep">
        <div>
          <div className="stepHeading">
            <h2>Final Steps</h2>
            <span>To start earning, you must:</span>
          </div>

          <div className="stepLists">
            <div className="step">
              <div className="number">1</div>
              <div className="stepContent">
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Check your emails now</a>
                <p>
                  You will have some emails from the companies that you selected
                  just now
                </p>
              </div>
            </div>
            <div className="step">
              <div className="number">2</div>
              <div className="stepContent">
                <h2>Check your emails now</h2>
                <p>
                  This is important! If you don't, the survey companies won't
                  know that you want to earn money with their surveys.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="number">3</div>
              <div className="stepContent">
                <h2>Check your emails now</h2>
                <p>
                  Sometimes the odd activation email can end up there by
                  mistake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="finalClients">
        <div className="finalClients">
          <div className="stepHeading">
            <h2>Final Steps</h2>
          </div>

          <div className="clients">
            <div className="client">
              <img src={amazon} alt="" />
              <img src={paypal} alt="" />
            </div>
          </div>
        </div>
      </section>
      <footer className="offerFooter">
        <div>
          <a href="#" className="terms">
            Terms and Conditions
          </a>
          <a href="#">Privacy Policy</a>
        </div>
        <p className="corywrite">
          Copyright Survey Spotter. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default LastStep;
