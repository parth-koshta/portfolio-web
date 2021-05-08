import React from "react";
import { motion } from "framer-motion";
import Logo from "../public/p.svg";
import HomeWave from "../public/home_wave.svg";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="pl-12 pt-12">
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: 500,
              bottom: 200,
            }}
            animate={{ scale: 3.5 }}
            whileHover={{ scale: 4.5 }}
            whileTap={{ scale: 3 }}
            transition={{ duration: 0.5 }}
            style={{ height: 20, width: 20 }}
            className="cursor-pointer"
          >
            <img
              src={Logo}
              style={{ height: "100%", width: "100%" }}
              alt="website logo"
              draggable="false"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center mt-40 md:mt-20">
          <p className="font-poppins text-sm text-darkpink sm:text-xl">
            Hi, my name is
          </p>
          <div>
            <p className="font-poppins font-semibold text-3xl mt-1 text-darkpink sm:text-6xl xs:text-4xl">
              Parth N Koshta
            </p>
          </div>
          <p className="font-manrope text-base font-light mx-4 mt-8 text-center text-darkpink sm:w-1/2 sm:mt-10">
            I'm a Software Engineer based in Bangalore, India. I specialize in
            building websites and cross platform mobile apps and everything
            around it.
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <img
          src={HomeWave}
          style={{ height: "100%", width: "100%" }}
          alt="home wave"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Home;
