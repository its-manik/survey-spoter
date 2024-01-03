import { useState } from "react";
import "./FAQs.css";
import Accordian, { AccordianItem } from "./Accordian";

const FAQs = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section id="">
      <div className="sectionHeading">
        <h2>FAQs</h2>
        <p>Frequently Asked Questions</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Accordian className="">
          <AccordianItem value="1" trigger="How does it work?">
            We have searched the internet for companies who are looking for
            customer feedback and opinions, and want to reward people for
            completing surveys. Survey Spotter has collected these survey
            opportunities and put them in one easily accessible place. Once you
            have signed up to Survey Spotter you will be able to start selecting
            surveys to run.The survey companies will send you an email to
            confirm you selected them, make sure you verify your interest with
            them! Once you have completed the surveys you will be able to claim
            your rewards! Remember to keep checking back in for new survey
            opportunities.
          </AccordianItem>
          <AccordianItem value="2" trigger="How much does it cost?">
            It will not cost you anything! This service is free and there are no
            hidden fees. Signing up and browsing through survey opportunities on
            Survey Spotter is free and all the surveys we promote will be free
            to sign up to.
          </AccordianItem>
          <AccordianItem value="3" trigger="How do I start earning?">
            How do I start earning? Sign up to Survey Spotter through our form
            and you will be directed to our survey opportunities. Select which
            surveys you would like to sign up to and hit YES! Look out for
            emails coming from your selected companies, click on the
            confirmation link so they know you want to earn money with their
            surveys. Make sure to check your spam or junk folders, as on the odd
            occasion the activation email might end up in there. Once you have
            activated you will be sent surveys from the selected companies for
            you to complete and start earning!
          </AccordianItem>
        </Accordian>
      </div>
    </section>
  );
};

export default FAQs;
