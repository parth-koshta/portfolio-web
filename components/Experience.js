import React from "react";
import UPLogo from "../public/up.svg";
import { BsCaretRight, BsCodeSlash } from "react-icons/bs";
import UpViolet from "../public/upviolet.svg";
import EwarRed from "../public/ewarred.svg";
import EwarLogo from "../public/ewar.svg";
import ShopayLogo from "../public/shopay.png";
import ShopayBlue from "../public/shopayblue.svg";

const Point = ({ text }) => (
  <div className="flex flex-row items-start mt-2">
    <div className="w-4 h-4">
      <BsCaretRight color="#61045F" />
    </div>
    <p className="ml-2 font-manrope font-light text-sm text-titlegrey">
      {text}
    </p>
  </div>
);

const Experience = () => {
  return (
    <div>
      <p className="font-poppins text-3xl text-titlegrey text-center mt-20 py-12 px-4 font-bold md:text-4xl md:mt-40">
        Where I've Worked
      </p>
      {/* UrbanPiper */}
      <div className="relative flex md:justify-center">
        <div className="px-8 z-10 py-4 xs:px-16 sm:px-24">
          <img src={UPLogo} style={{ width: "6rem" }} />
          <p
            style={{ color: "#363636" }}
            className="font-manrope text-xl font-bold mt-4 md:text-2xl lg:text-3xl"
          >
            UrbanPiper Technology Pvt. Ltd.
          </p>
          <p className="font-manrope text-base font-light">
            Senior Product Engineer
          </p>
          <p className="font-manrope text-sm font-extralight">
            September 2020 - Present
          </p>
          <div className="mt-8">
            <Point text="Built Prime Mobile App from scratch." />
            <Point text="Maintaining and scaling Prime Mobile App." />
            <Point text="Adding new features on Prime Web App." />
            <Point text="Built the backend of Prime self-serve App." />
            <div className="mt-8 flex flex-row items-center">
              <BsCodeSlash color="#61045F" />
              <p className="font-manrope text-sm font-extralight ml-2 text-darkpink">
                Tech Stack
              </p>
            </div>
            <p className="font-manrope text-sm font-light ml-6 mt-1 text-titlegrey">
              JavaScript, Python, React Native, React.js, Django, MySQL, Docker,
              AWS
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full left-0">
          <img
            src={UpViolet}
            style={{ height: "100%", width: "100%" }}
            alt="up wave"
            draggable="false"
          />
        </div>
      </div>

      {/* Ewar Games */}
      <div className="relative flex mt-16 md:justify-center">
        <div className="px-8 z-10 py-4 xs:px-16 sm:px-24">
          <img src={EwarLogo} style={{ width: "4rem" }} />
          <p
            style={{ color: "#363636" }}
            className="font-manrope text-xl font-bold mt-4 md:text-2xl lg:text-3xl"
          >
            Ewar Games
          </p>
          <p className="font-manrope text-base font-light">Software Engineer</p>
          <p className="font-manrope text-sm font-extralight">
            April 2019 - September 2020
          </p>
          <div className="mt-8">
            <Point text="Responsible for the Development of end-to-end features including Front-End and Back-End for EWar Games Platform." />
            <Point text="Integrated Payment Gateway Razorpay & Paytm for Deposits and Payouts." />
            <Point text="Lead the development of GHack Bat Sensor Mobile App in React Native." />
            <div className="mt-8 flex flex-row items-center">
              <BsCodeSlash color="#61045F" />
              <p className="font-manrope text-sm font-extralight ml-2 text-darkpink">
                Tech Stack
              </p>
            </div>
            <p className="font-manrope text-sm font-light ml-6 mt-1 text-titlegrey">
              JavaScript, React Native, React.js, Node.js, Express.js, MySQL,
              AWS
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full left-0">
          <img
            src={EwarRed}
            style={{ height: "100%", width: "100%" }}
            alt="ewar wave"
            draggable="false"
          />
        </div>
      </div>

      {/* Shopay */}
      <div className="relative flex mt-16 md:justify-center">
        <div className="px-8 z-10 py-4 xs:px-16 sm:px-24">
          <img src={ShopayLogo} style={{ width: "4rem" }} />
          <p
            style={{ color: "#363636" }}
            className="font-manrope text-xl font-bold mt-4 md:text-2xl lg:text-3xl"
          >
            Shopay Online Services
          </p>
          <p className="font-manrope text-base font-light">Software Engineer</p>
          <p className="font-manrope text-sm font-extralight">
            September 2018 - March 2019
          </p>
          <div className="mt-8">
            <Point text="Developed the Mobile App UI of Shopay Harbor Application in Apache Cordova Framework." />
            <Point text="Worked on the UI of shopay.in website." />
            <div className="mt-8 flex flex-row items-center">
              <BsCodeSlash color="#61045F" />
              <p className="font-manrope text-sm font-extralight ml-2 text-darkpink">
                Tech Stack
              </p>
            </div>
            <p className="font-manrope text-sm font-light ml-6 mt-1 text-titlegrey">
              HTML, CSS, JavaScript, jQuery, Apache Cordova
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full left-0">
          <img
            src={ShopayBlue}
            style={{ height: "100%", width: "100%" }}
            alt="ewar wave"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
