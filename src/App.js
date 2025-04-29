import React from "react";
import { useState } from "react";
import "./App.css";
import "./assets/fonts/Paalalabas.otf";
import bgAlter1 from "./assets/images/Gambar-2.gif";
import Background1 from "./assets/images/Background-1.mp4";
import Background2 from "./assets/images/Background-2.png";
import Background3 from "./assets/images/Background-3.png";
import Background4 from "./assets/images/Background-4.png";
import Background5 from "./assets/images/Background-5.mp4";
import Background6 from "./assets/images/Background-6.png";
import Background7 from "./assets/images/Background-7.png";
import lokasi from "./assets/images/lokasi.png";
import Gambar1 from "./assets/images/Gambar1.gif";
import LogoS1 from "./assets/images/LogoS1.png";
import LogoS2 from "./assets/images/LogoS2.png";
import HouseIcon from "./assets/images/house-icon.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logoPump from "./assets/images/pump_black.png";
import logoDex from "./assets/images/logo_dex1.png";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex items-center justify-center px-4 md:px-12 lg:px-24 text-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        >
          <source src={Background1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 z-10 mt-10 sm:mt-16 md:mt-24">
          {/* Gambar tengah */}
          <img
            src={LogoS1}
            alt="Logo"
            className="w-[100px] sm:w-[100px] md:w-[200px] lg:w-[300px] h-auto"
          />
          <img
            src={LogoS2}
            alt="Logo"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto"
          />

          {/* Judul besar */}
          <h1 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 sm:px-4 md:px-8 py-4 sm:py-6 font-boldoa text-center leading-tight">
            WELCOME LANDOWNERS!
          </h1>

          {/* CA Address */}
          {/* <h2 className="text-sm sm:text-md md:text-lg lg:text-xl bg-yellow-500 text-center rounded-xl font-bold text-black px-3 py-2">
            CA : 4Xkqadk6JJg47sc297Gt76BimyXBYJo87dWUKcYFpump
          </h2> */}
        </div>
      </section>

      <div className="overflow-hidden bg-yellow-900">
        <div className="whitespace-nowrap animate-marquee text-white font-bold text-5xl py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="inline-block mx-4">
              BE YOUR VERY OWN LANDOWNER
            </span>
          ))}
        </div>
      </div>

      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20"
        style={{
          backgroundImage: `url(${Background7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
            <h1 className="font-bold text-3xl md:text-5xl leading-tight flex flex-col">
              <span className="text-yellow-800">
                WHAT'S <span className="text-white">YOUR MOVE?</span>
              </span>
              <span>CRY OVER LAND PRICES</span>
              <span>OR STACK LANDCOINS</span>
              <span>AND GROOVE?</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              Clitoris Coin isn’t your average digital experience — it’s
              foreplay with Wi-Fi. Link up with adventurous souls who know their
              way around buttons, boundaries, and browser history. We celebrate
              fast fingers, mutual respect, and safe exploration (wink). Whether
              you're here to tap gently or go full throttle, just remember: lube
              your thumbs and hydrate — it's gonna get slippery.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              src={Gambar1}
              alt="Logo"
              className="w-40 sm:w-48 md:w-64 lg:w-80 xl:w-[350px] h-auto"
            />
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-yellow-900">
        <div className="whitespace-nowrap animate-marquee text-white font-bold text-5xl py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="inline-block mx-4">
              BE YOUR VERY OWN LANDOWNER
            </span>
          ))}
        </div>
      </div>

      <section
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-[200px]"
      >
        <div className="flex flex-col lg:flex-col items-center gap-5 justify-center text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <div className="flex items-center gap-4 text-white font-bold">
            <span className="font-boldoa">1$LANDCOIN = 1 LAND</span>
          </div>

          <div className="text-white font-bold flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm py-7 px-[80px] rounded-xl font-boldoa">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
              $0.00000 USD
            </span>
            <span className="text-md sm:text-lg md:text-xl lg:text-2xl">
              OUR LAND COST
            </span>
          </div>

          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm py-4 px-8 rounded-xl">
            <input
              type="text"
              placeholder="search wheres your dream land (1$landcoin = 1 land)"
              className="flex-1 bg-transparent backdrop-blur-sm border border-gray-500 outline-none text-white placeholder-white text-lg py-2 px-4 rounded-lg w-full max-w-lg"
            />
            <button className="bg-white text-black font-bold py-2 px-6 rounded-lg text-md sm:text-lg md:text-xl lg:text-2xl font-boldoa">
              SEARCH
            </button>
          </div>
          <input
            type="text"
            placeholder="code"
            className="flex-1 bg-transparent backdrop-blur-sm border border-gray-500 outline-none text-white placeholder-white text-lg py-2 px-4 rounded-lg w-full max-w-lg"
          />
        </div>
      </section>

      <div className="overflow-hidden bg-yellow-900">
        <div className="whitespace-nowrap animate-marquee text-white font-bold text-5xl py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="inline-block mx-4">
              BE YOUR VERY OWN LANDOWNER
            </span>
          ))}
        </div>
      </div>

      <section className="relative">
        {/* Video Background */}
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={Background5}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay hitam semi-transparan */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Konten teks */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-32 rajdhani text-white">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
                REAL ESTATE'S <span className="text-yellow-800">A MESS</span>{" "}
                RIGHT NOW.
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                LANDCOIN? A SIMPLE, SMARTER INVESTMENT WITH NO BS
              </h2>
              <br></br>
              <p className="mt-6 text-sm sm:text-base md:text-lg max-w-5xl mx-auto text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at diam sapien. Suspendisse eu interdum eros. Sed scelerisque
                dolor in massa fermentum finibus. Vestibulum tempor sit amet
                tellus eget imperdiet. Duis quis gravida massa. Sed blandit
                accumsan accumsan. Quisque suscipit facilisis ornare. Vivamus in
                lacinia dolor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${Background4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-[150px]"
      >
        <div className="flex flex-col items-center gap-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {/* Judul */}
          <div className="text-white font-bold">
            <span className="font-boldoa">OUR LAND PORTOFOLIO</span>
          </div>

          {/* Box Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            {[
              { number: "1000", label: "TOTAL SUPPLY" },
              { number: "1000", label: "LP BURN" },
              { number: "1000", label: "Total Holders" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-white font-bold flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm py-6 px-10 rounded-xl font-boldoa border border-gray-500 min-w-[250px]"
              >
                <span className="text-4xl md:text-5xl">{item.number}</span>
                <span className="text-lg md:text-xl">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <div className="text-white font-bold text-md sm:text-lg md:text-xl lg:text-2xl">
            <span className="font-boldoa">
              NO BANKS, NO FORMS, NO MESS. JUST YOU, YOUR WALLET, AND LANDCOIN
            </span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-yellow-900">
        <div className="whitespace-nowrap animate-marquee text-white font-bold text-5xl py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="inline-block mx-4">
              BE YOUR VERY OWN LANDOWNER
            </span>
          ))}
        </div>
      </div>

      <section
        style={{
          backgroundImage: `url(${Background6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#111111] text-white px-6 md:px-16 lg:px-32 py-20"
      >
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Kiri */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={lokasi}
                alt="Marker"
                className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-auto"
              />
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                BE YOUR VERY OWN <br /> LANDOWNER TODAY
              </h2>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nibh, egestas eget quam a, ultricies euismod turpis. Nam molestie
              quam eget nulla feugiat viverra at commodo ex. Duis at metus nec
              sem iaculis rutrum. Pellentesque ultricies iaculis dolor id
              ullamcorper. Vivamus condimentum at orci id faucibus. Sed et mi
              arcu. Donec molestie congue lectus id vulputate.
            </p>
          </div>

          {/* Kanan */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {/* Tombol X */}
            <a
              href="#"
              className="flex items-center justify-between border border-yellow-800 px-6 py-4 rounded-md hover:bg-orange-500/10 transition"
            >
              <div className="flex items-center gap-4">
                <div className="min-w-[50px] min-h-[40px] text-lg flex items-center justify-center text-yellow-800">
                  <FaXTwitter size={30} className="text-inherit" />
                </div>
                <span className="font-bold text-white">JOIN X</span>
              </div>
            </a>

            {/* Tombol Telegram */}
            <a
              href="#"
              className="flex items-center justify-between border border-yellow-800 px-6 py-4 rounded-md hover:bg-orange-500/10 transition"
            >
              <div className="flex items-center gap-4">
                <div className="min-w-[50px] min-h-[40px] text-lg flex items-center justify-center text-yellow-800">
                  <FaTelegramPlane size={30} className="text-inherit" />
                </div>
                <span className="font-bold text-white">JOIN TELEGRAM</span>
              </div>
            </a>

            {/* Tombol DexScreener */}
            <a
              href="#"
              className="flex items-center justify-between border border-yellow-800 px-6 py-4 rounded-md hover:bg-orange-500/10 transition"
            >
              <div className="flex items-center gap-4">
                <div className="min-w-[50px] min-h-[40px] text-lg flex items-center justify-center text-yellow-800">
                  <img src={logoDex} width={30} height={24} />
                </div>
                <span className="font-bold text-white">DEXSCREENER</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
