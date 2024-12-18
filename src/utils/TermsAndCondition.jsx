import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndCondition = () => {
  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center gap-20">
      <Navbar />
      <div className="h-auto w-[80vw] flex flex-col justify-start items-left space-y-10  text-lg">
        <h1 className="text-4xl font-semibold">Terms & Conditions</h1>
        <div>
          <p>
            PLEASE READ THESE TERMS OF USE (“TERMS”) CAREFULLY BEFORE USING ANY
            Shopperzz PLATFORM.
          </p>
        </div>
        <div>
          <p>
            If you live in any of the following countries or regions, additional
            terms may apply to you and are viewable at the bottom of these
            Terms. We display the country/region within the Terms when
            applicable. These additional terms override the Terms below to the
            extent of any inconsistency.
          </p>
        </div>
        <div>
          <p>
            Argentina, Australia, Brazil, Canada, Colombia, Hong Kong, Japan,
            Korea, Philippines, all European countries (including specific terms
            for Austria, Belgium, France, Germany, Hungary, Italy, Poland and
            Switzerland).
          </p>
        </div>
        <div>
          <p>
            Welcome to the Shopperzz community! You are reading these Terms
            because you are using a Shopperzz website, digital experience,
            social media platform, mobile app, wearable technology, or one of
            our other products or services, all of which are part of Shopperzz’s
            Platform (“Platform”). You may access the Platform through a
            computer, mobile phone, tablet, console or other technology, which
            we refer to here as a “Device”. Your service provider’s normal rates
            and fees apply to your Device.
          </p>
        </div>
        <div>
          <p>
            These Terms create a legally binding agreement between you and
            Shopperzz and its affiliates regarding your use of the Platform.
            Please review our List of Local Entities for the name of the
            Shopperzz entity responsible for providing the Platform to you and
            the appropriate contact information. A few important points:
          </p>
        </div>
        <div>
          <p>
            Our Terms May Change. Some jurisdictions do not permit unilateral
            updates or changes to consumer terms, so this paragraph may not
            apply to you. We may update these Terms from time to time. If a
            material change is made, we will post a notice on the Platform or
            send you a notification. Read through any changes, and if you don’t
            agree to them, please stop using the Platform. If you continue to
            use our Platform after we notify you of changes, you will be deemed
            to have accepted the updated Terms, except to the extent prohibited
            by applicable law.
            <br />
            Terms of Sale. By making any purchase with us, you also agree to the
            Terms of Sale that apply in your country or region. Privacy Policy.
            Our Privacy Policy describes the collection and use of personal
            information on the Platform and applies to your use of the Platform.
            Important Notice for Amateur Athletes. You are responsible for
            ensuring that your participation on the Platform does not affect
            your eligibility as an amateur athlete. Please check with your
            amateur athletic association for the rules that apply to you.
            Shopprz is not responsible or liable for your use of the Platform
            resulting in your ineligibility as an amateur athlete.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsAndCondition;
