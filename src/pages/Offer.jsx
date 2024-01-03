import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./offer.css";
import ListBox from "../utils/ListBox";
import YouGov from "../assets/YouGov.webp";
import branded from "../assets/mobrog.webp";
import pureprofile from "../assets/pureprofile.webp";
import toluna from "../assets/toluna.webp";
import prime from "../assets/prime.webp";
import cashback from "../assets/cashback.webp";
import dosh from "../assets/dosh.webp";
import view from "../assets/view.webp";
import isay from "../assets/isay.webp";
import mobrog from "../assets/mobrog.webp";
import swagbucks from "../assets/swagbucks.webp";
import green from "../assets/green.webp";
import maxi from "../assets/maxi.webp";
import inboxx from "../assets/inbox.webp";
import star from "../assets/stars-4.5.svg";

const Offer = () => {
  return (
    <>
      <Navbar />
      <section className="offerHero">
        <div className="offerHeroContent">
          <h1>NEXT STEP: SELECT SURVEY PANELS TO JOIN</h1>
          <h2>
            These survey panels are looking for new male members aged under 26
            to join before January 5, 2024. Select which panels you'd like to
            join. The more you select, the more you can earn. <br />
            <span>
              TIP: Select all and click the email invitation for the highest
              possible earnings.
            </span>
          </h2>
        </div>
      </section>
      <section className="offerLists">
        <div className="listHeading">
          <h2>
            <span>SELECT ALL</span> & Earn £300 per month
          </h2>
          <button>Select All</button>
        </div>
        <div className="listBoxes">
          <ListBox
            data={{
              img: YouGov,
              heading: "Share your opinion with YouGov and get rewarded",
              list: [
                " You can get your opinion featured in the news!",
                "Answer surveys for cash rewards",
                " Join millions of others in sharing your opinion on politics, sport, entertainment and more",
              ],
              smallText:
                "By clicking Select, you consent to YouGov sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: branded,
              review: star,
              heading:
                "Branded Surveys - Take surveys, make money. It's that simple.",
              list: [
                "Earn up to £5 per survey you take with Branded Surveys!",
                " We pay you with cash or gift card rewards for completing surveys",
                " Takes a few minutes to create your profile and start earning.",
              ],
              smallText:
                "By clicking Select, you consent to Branded Surveys sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: mobrog,
              review: star,
              heading: "Mobrog - Paid Online Surveys",
              list: [
                " Earn from £0.50 and £3 per survey",
                " Earn from your phone! Excellent Mobile Survey app",
                " Fast, hassle-free earnings via PayPal",
              ],
              smallText:
                "By clicking Select, you consent to Splendid Research sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: pureprofile,
              heading: "Join Pureprofile: What you discover will amaze you.",
              list: [
                "Earn real cash - straight into your Bank! No confusing points",
                " Spend your earnings anyway you want - Cash, Gift Cards, Movie Tickets, PayPal... your choice",
                "You deserve to be rewarded - so click on your welcome email now, and start earning today!",
              ],
              smallText:
                "By clicking Select, you consent to Pureprofile sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: toluna,
              heading: "Influence your world - Join Toluna today",
              list: [
                " Your voice + our voice = the voice of change",
                "Get rewarded with: PayPal or your choice of 17 different Gift Cards!",
                " So, are you ready to begin influencing your world? Join today & earn a 500 point welcome bonus",
              ],
              smallText:
                "By clicking Select, you consent to Toluna sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: prime,
              heading: "Get paid for taking free surveys",
              list: [
                "Earn up to £4 per survey, plus a sign up bonus of £3.95!",
                "Withdraw cash via PayPal or choose from hundreds of different Gift Cards",
                " Your opinions are valuable, and businesses are willing to pay for them. Earn cash today!",
              ],
              smallText:
                "By clicking Select, you consent to Prime Insights sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: cashback,
              review: star,
              heading:
                "Complete Online tasks & Free trials. Make Money. It's that simple.",
              list: [
                "Cashback.co.uk members have now been paid over £690,000 so far and counting!",
                " Receive a £10 welcome bonus when you join today!",
                " Manik, Be sure to check your inbox / junk folder for your welcome email from Cashback.co.uk.",
              ],
              smallText:
                "By clicking Select, you consent to Cashback.co.uk sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: dosh,
              review: star,
              heading: "OhMyDosh - Earn Real Dosh Online ",
              list: [
                "Earn £20.50 in just 30 Minutes with OhMyDosh! Have the money in your account in just 3 days!",
                "Rated an Excellent 5 stars on Trustpilot!",
                "Would you like to earn Cash with OhMyDosh? Join now for free and receive a £2 INSTANT bonus!",
              ],
              smallText:
                "By clicking Select, you consent to Clickwork7 sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more",
            }}
          />
          <ListBox
            data={{
              img: view,
              review: star,
              heading:
                "ViewsBank - Earn money while you meet friends and get heard!",
              list: [
                " Get paid approximately 11p per minute of your time",
                "Receive your earnings via PayPal",
                "Sign up to ViewsBank is 100% free",
              ],
              smallText:
                "By clicking Select, you consent to Consumer Intelligence sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: maxi,
              review: star,
              heading: "Share your opinion with YouGov and get rewarded",
              list: [
                " Sign up today and collect 450 points after completing your profile",
                " Choose from over 200 rewards including electronics, homeware, beauty products, vouchers and more",
                " Redeem vouchers from iTunes, Nintendo, PlayStation, Xbox, Argos, John Lewis, M&S",
              ],
              smallText:
                "By clicking Select, you consent to Bilendi sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: isay,
              review: star,
              heading:
                "YOUR voice can make a change! Take surveys and earn rewards.",
              list: [
                "Share your valuable opinions through online surveys with Ipsos iSay",
                "Receive points that you can redeem for your favourite rewards: digital vouchers, virtual prepaid cards, charitable donations and more!",
                "Join thousands of voices who are shaping the future and earning rewards.",
              ],
              smallText:
                "By clicking Select, you consent to Ipsos Interactive Services Limited sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: inboxx,
              heading:
                "InboxPounds: Do online activities.. Earn real CASH & rewards.",
              list: [
                "Complete online activities: Taking Surveys, Watching Videos, and More!",
                " Get rewarded: PayPal Cash, Amazon Gift Cards & More!",
                "Over £2 Million Paid to our members. Join now to get a £1 signup bonus!",
              ],
              smallText:
                "By clicking Select, you consent to Cotterweb Enterprises, Inc sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: swagbucks,
              review: star,
              heading: "SwagBucks - Earn up to £25 per Survey!",
              list: [
                "Redeem points as cash via Paypal or gift cards.",
                " Excellent trustpilot score of 8.3 out of 10",
                " Get your £3 sign up bonus when you join now!",
              ],
              smallText:
                "By clicking Select, you consent to Swagbucks sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
          <ListBox
            data={{
              img: green,
              heading: "Join GreenPanthera TODAY!",
              list: [
                " Register for FREE and earn a $2 registration bonus.",
                " Earn cash for surveys, shopping, offers and more.",
                "Manik, Make sure to check your welcome email from GreenPanthera to complete your sign up",
              ],
              smallText:
                "By clicking Select, you consent to Green Panthera sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
            }}
          />
        </div>
      <div className="final">
            <p>* Estimation based on completing 2-3 surveys per day (about an hours work per day)</p>
            <button>CONTINUE TO FINAL STEP</button>
      </div>
      </section>
      <footer>
        <div>
            <a href="#" className="terms">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
        <p className="corywrite">
        Copyright Survey Spotter. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Offer;