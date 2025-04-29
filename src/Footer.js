import React from "react";
import { useState } from "react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logoPump from "./assets/images/pump_black.png";
import logoDex from "./assets/images/logo_dex2.png";

const Footer = () => {
  return (
    <footer className="w-full py-[50px] flex items-center justify-center rajdhani text-white bg-white">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2 items-center">
          <a
            href="https://x.com/housingcoinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="min-w-[40px] min-h-[40px] text-lg flex items-center justify-center rounded-full bg-black">
              <FaXTwitter size={25} color="white" />
            </div>
          </a>
          <div className="min-w-[40px] min-h-[40px] flex items-center justify-center overflow-hidden">
            <img src={logoPump} alt="DEX" width={35} height={24} />
          </div>
          <a
            href="https://t.me/housing_coin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="min-w-[40px] min-h-[40px] rounded-full text-lg flex items-center justify-center rounded-full bg-black">
              <FaTelegramPlane size={25} color="white" />
            </div>
          </a>
          <div className="min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center overflow-hidden rounded-full bg-black">
            <img src={logoDex} width={30} height={24} />
          </div>
        </div>
        <span className="text-xl reguler text-black">
          ©Landcoin All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
