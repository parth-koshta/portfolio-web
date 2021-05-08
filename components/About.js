import React from "react";
import { DiJsBadge, DiNodejs } from "react-icons/di";
import { SiPython, SiDjango, SiGraphql, SiMongodb } from "react-icons/si";
import { FaReact, FaAws, FaDocker } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

const Tech = ({ icon, name }) => {
  return (
    <div className="flex flex-col justify-center items-center w-16 m-4">
      {icon()}
      <p className="font-manrope font-light text-xs text-darkpink text-center pt-2">
        {name}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <p className="font-manrope text-xl text-darkpink text-center py-12 px-4 font-bold md:text-4xl md:mt-10">
        I enjoy building apps for Web and Mobile
      </p>
      <p className="font-manrope font-light text-sm text-darkpink underline text-center pt-4 pb-8 md:text-2xl">
        Some tools and technologies I use:
      </p>
      <div className="flex flex-row justify-center items-start flex-wrap px-4 sm:px-20 md:px-40 xl:px-80">
        <Tech
          icon={() => <DiJsBadge fontSize={30} style={{ color: "#61045F" }} />}
          name="JavaScript"
        />
        <Tech
          icon={() => <SiPython fontSize={30} style={{ color: "#61045F" }} />}
          name="Python"
        />
        <Tech
          icon={() => <FaReact fontSize={30} style={{ color: "#61045F" }} />}
          name="React Native"
        />
        <Tech
          icon={() => <FaReact fontSize={30} style={{ color: "#61045F" }} />}
          name="React.js"
        />
        <Tech
          icon={() => <DiNodejs fontSize={30} style={{ color: "#61045F" }} />}
          name="Node.js"
        />
        <Tech
          icon={() => (
            <IoLogoNodejs fontSize={30} style={{ color: "#61045F" }} />
          )}
          name="Express.js"
        />
        <Tech
          icon={() => <SiDjango fontSize={30} style={{ color: "#61045F" }} />}
          name="Django"
        />
        <Tech
          icon={() => <SiGraphql fontSize={30} style={{ color: "#61045F" }} />}
          name="GraphQL"
        />
        <Tech
          icon={() => <FaAws fontSize={30} style={{ color: "#61045F" }} />}
          name="AWS"
        />
        <Tech
          icon={() => <FaDocker fontSize={30} style={{ color: "#61045F" }} />}
          name="Docker"
        />
        <Tech
          icon={() => <GrMysql fontSize={30} style={{ color: "#61045F" }} />}
          name="MySQL"
        />
        <Tech
          icon={() => <SiMongodb fontSize={30} style={{ color: "#61045F" }} />}
          name="MongoDB"
        />
      </div>
      <div style={{clipPath: 'polygon(0 50%, 100% 0%, 100% 100%, 0% 100%)', background: 'linear-gradient(90deg, rgba(247,141,167,.7) 0%, rgba(97,4,95,.7) 100%)'}} className='h-80 w-full mt-16' />
    </div>
  );
};

export default About;
