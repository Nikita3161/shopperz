import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cookies = () => {
  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center gap-20">
      <Navbar />
      <div className="h-auto w-[80vw] flex flex-col justify-start items-left space-y-10 text-justify text-lg">
        <h1 className="text-4xl font-semibold">Cookies Policy</h1>
        <div>
          <p>
            This Cookies Policy explains how Shopperzz(“us”, “we” or “our”)
            collects, uses, stores, shares and uses cookies on its website. We
            provide information on how cookies and similar technologies work,
            their purpose, use, and duration, how We process and store them, and
            how you can control them. You can also find all the necessary
            information regarding your rights on the use of Cookies on this
            website and how you can exercise them.
          </p>
        </div>
        <div>
            <p>COOKIES AND SIMILAR TECHNOLOGIES</p>
        </div>
        <div>
            <p>Cookies are small files of data that are stored on a user’s device by the browser when visiting a website or application. Cookies are used for various reasons and can be very useful in many cases. They can be necessary for the proper functionality of the website and efficient page navigation, or they can be used to customize and enhance the user’s experience by remembering language preferences, login credentials, and many more. They can also be used to provide anonymous statistical data about the usage of the website or targeted advertisements to the visitor.</p>
        </div>
        <div>
            <p>Some sites might also use other similar technologies like web beacons, clear GIFs, page tags, and web bugs to understand how people are using them and to target advertising to them. They usually take the form of a small, transparent image that is embedded in a web page or email. They work with cookies and capture data like your IP address, when you viewed the page or email, what device you were using and where you were.</p>
        </div>
        <div>
            <p>COOKIES CATEGORIES</p>
        </div>
        <div>
            <p>Cookies are usually categorized into one of the following categories, depending on their purpose</p>
        </div>
        <div>
            <p>Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies and for these cookies, consent is not required</p>
        </div>
        <div>
            <p>Preference or Functionality cookies enable a website to remember information about the user’s choice in the past that changes the way the website behaves or looks, like the preferred language or the region.</p>
        </div>
        <div>
            <p>Statistics or Performance cookies help website owners to understand how visitors use and interact with their website by collecting and reporting information anonymously, such as which pages are visited most frequently, or which links are clicked on.</p>
        </div>
        <div>
            <p>Marketing cookies, also known as Advertising or Targeting cookies, are used to track visitors' online activity across websites. The intention is to display ads that are relevant and engaging for the individual user or limit the times an ad is displayed and thereby are more valuable for publishers and third-party advertisers</p>
        </div>
        <div>
            <p>HOW LONG DO COOKIES LAST?</p>
        </div>
        <div>
            <p>Depending on the duration that a cookie is stored on the user’s device, cookies can be classified as Session or Persistent.

Session cookies are temporary cookies and are automatically deleted when the user closes his browser, while Persistent cookies are cookies that remain for a specific amount of time (their expiration date can vary from minutes to days or even years)</p>
        </div>
        <div>
            <p>HOW TO CONTROL COOKIES ON THIS WEBSITE</p>
        </div>
<div>
    <p>Shopperzz will only set cookies after you have provided your consent to the use of cookies through the cookies banner upon your visit to our website. For Necessary cookies, we do not need your consent.</p>
</div>
<div>
    <p>You have the right to withdraw your consent or change your preferences regarding the use of cookies at any time. You can do this by accessing our Cookies banner through the “Cookie Settings” button.</p>
</div>
<div>
<p>YOUR RIGHTS</p>
</div>
<div>
    <p>If you have a concern about the way we are collecting or using cookies, you should raise your concern with us in the first instance or directly to the office of the Commissioner for the Protection of Private Data.</p>
</div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cookies;
