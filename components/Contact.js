import React from 'react'
import Dp from '../public/dp.png';
import { FaMediumM, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

const Contact = () => {

    const openLink = (link) => {
        window.open(link);
    }
    return (
        <div>
            <p className="font-poppins text-3xl text-titlegrey text-center mt-20 py-12 px-4 font-bold md:text-4xl md:mt-20">
                Talk to me
            </p>
            <div className="flex flex-col justify-center items-center">
                <img src={Dp} style={{ width: "10rem" }} />

             
                <div className="flex mt-8 mb-8 w-40 flex flex-row justify-between">
                    <MdEmail fontSize={20} className='cursor-pointer' onClick={() => openLink("mailto:parthkoshta3@gmail.com")} style={{ color: "#363636" }} />
                    <FaLinkedinIn fontSize={20} className='cursor-pointer' onClick={() => openLink('https://www.linkedin.com/in/parthkoshta')} style={{ color: "#363636" }} />
                    <VscGithub fontSize={20} className="cursor-pointer" onClick={() => openLink('https://github.com/parth-koshta')} style={{ color: "#363636" }} />
                    <FaMediumM fontSize={20} className='cursor-pointer' onClick={() => openLink('https://parthkoshta.medium.com/')} style={{ color: "#363636" }} />
                </div>

                <p className="font-poppins mt-2 mb-8 font-light text-xs text-titlegrey">
                    Designed & Built by Parth N Koshta
                </p>

            </div>
        </div>
    )
}

export default Contact
