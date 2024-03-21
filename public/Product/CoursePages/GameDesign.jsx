import React, { useEffect, useState } from "react";
import game from "/course/gamepng.webp";
import Gamer from "/course/game-design1.webp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GamePage from "/course/GamePage.webp";
// import modelGame from "/course/game-design-model.webp";
import Job from "/course/placement-guarantee.webp";
import certificate from "/course/certificate-medal.webp";
import Like from "/course/eligibility.webp";
import Time from "/course/course-duration.webp";
import WUL from "/course/WhatULearn.webp";
import AOS from "aos";
import VerticalCarousel from "../../../components/slider/VerticalCarousel";
import ContactForm from "../../../components/ContactForm/ContactForm";
import Button from "../../../components/Button/Button";
import FAQSection from "../../../components/Faq/Faq";
import { useNavigate } from "react-router-dom";

function GameDesign() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const CourseHighlights = [
    "Job-oriented, industry-centric curriculum",
    "Hands-on practical training using the latest tools and software",
    "Certified faculty ensuring quality education",
    "Exposure to industry interaction and engaging workshops",
    "Placement assistance for a successful career launch",
    "Knowledge of AI",
  ];
  const toNavigate = useNavigate();
  const whatULearn = [
    "3D Modeling",
    "Texturing and Materials",
    "Lighting and Rendering",
    "Visualization Techniques",
    "Level Design",
    "Design Visualization",
    "Understand Game Design",
    "3D Environment",
  ];

  const backgroundStyles = {
    backgroundImage: `url(${GamePage})`, // Use backticks for string interpolation
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    // background:"blue "
  };
  const bgOverlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
    opacity: 0.74,
    height: "100vh",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  const calculateRotation = (axis) => {
    const maxRotation = -25;
    const rotation =
      (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
    return rotation;
  };

  return (
    <div className=" font-poppins overflow-hidden mx-auto">
      <div className="" style={backgroundStyles}>
        <div style={bgOverlayStyle}></div>
        <div className="mb-8y h-[100vh] flex md:flex-row flex-col-reverse justify-center items-center">
          <div
            style={{
              transform: `rotateX(${calculateRotation(
                "y"
              )}deg) rotateY(${-calculateRotation("x")}deg)`,
            }}
            className="flex-1"
          >
            <img data-aos="fade-down-right" src={game} className=" " alt="" />
          </div>

          <div
            data-aos="fade-down-left"
            className="flex-1 flex justify-end mt-24 flex-col items-center  text-center"
          >
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "white" }}
            >
              GAME DESIGN
            </h1>
            <p
              className="text-md md:text-xl w-[90%]"
              style={{ color: "white" }}
            >
              Game design is the process of creating and designing the rules,
              mechanics, gameplay, and overall experience of a video game or any
              interactive entertainment product.
            </p>{" "}
            <p
              className="invisible md:visible text-md md:text-xl w-[90%]"
              style={{ color: "white" }}
            >
              {" "}
              It is a multidisciplinary field that combines elements of art,
              storytelling, psychology, programming, and more to craft engaging
              and enjoyable player experiences.
            </p>
          </div>
        </div>
      </div>

      {/* COURSE HIGHLIGHTS section */}

      <div className="flex md:h-[80vh] flex-col md:flex-row items-center justify-center">
        <div
          data-aos="zoom-in-up"
          className="m-10 flex-1 flex justify-between flex-col"
        >
          <h1 className="md:text-5xl text-3xl text-center font-bold mb-4">
            COURSE HIGHLIGHTS
          </h1>
          <ul className="list-disc pl-6">
            {CourseHighlights.map((highlight, index) => (
              <li key={index} className="mb-2 md:text-2xl text-xl">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-aos="zoom-in-up"
          className="flex-1 flex items-center justify-center"
        >
          <img src={Gamer} className=" p-5" width="600" alt="" />
        </div>
      </div>
      {/* WHAT YOU'LL LEARN */}
      <div className="flex  gap-5 md:flex-row flex-col-reverse justify-center items-center  bg-[#001321]">
        <div data-aos="fade-left" className="flex md:w-[60%] w-full">
          <img src={WUL} className="w-full md:h-[100vh] h-[40vh]" alt="" />
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-1 flex-col gap-10 justify-center "
          style={{ color: "white" }}
        >
          <h1 className="md:text-5xl text-3xl text-center">
            WHAT YOU'LL LEARN HERE
          </h1>
          <ul className=" items-start md:text-3xl text-xl">
            {whatULearn.map((learn, index) => (
              <li className="mt-1 flex items-center gap-2" key={index}>
                <ArrowRightIcon />
                {learn}
              </li>
            ))}
          </ul>
          <div className="mx-auto">
            <Button
              className="btn"
              onClick={() => toNavigate("/contact")}
              value={"Explore Now"}
            />
          </div>
        </div>
      </div>

      {/* Vertical Caorousel */}
      <div className=" p-4 flex flex-col md:flex-row h-[100vh] md:h-[60vh] justify-center items-center">
        <div
          data-aos="flip-up"
          className="flex-1 items-center flex justify-end flex-col"
        >
          <h1 className="md:text-5xl font-poppins text-2xl">
            TOOLS & SOFTWARE
          </h1>
          <VerticalCarousel />
        </div>
        <div
          data-aos="flip-down"
          className="flex-1 items-center flex gap-2 justify-center flex-col font-poppins"
        >
          <h1 className="md:text-5xl font-poppins text-2xl">CERTIFICATIONS</h1>
          <img
            src={certificate}
            width={209}
            alt="Certifiacte image from Harikrushnamultimedia.com"
          />
          <p className="text-lg md:text-2xl text-center">
            Harikrushna Multimedia Certified Expert in Game Design
          </p>
        </div>
      </div>

      {/* critera */}

      <div className="grid md:grid-cols-3 px-8 justify-center md:flex-row flex-col md:gap-1 gap-14 items-start my-20">
        {/* <!-- ELIGIBILITY CRITERIA --> */}
        <div
          data-aos="flip-left"
          className="md:col-span-1 flex gap-5 justify-center items-center flex-col animate-fadeIn"
        >
          <h1 className="text-3xl text-center font-poppins">
            ELIGIBILITY CRITERIA
          </h1>
          <img
            className="h-[14rem] transition-transform transform duration-500 hover:scale-110"
            width={400}
            src={Like}
            alt=""
          />
          <p className="w-full md:w-[60%] text-md md:text-xl text-center">
            Graduates and undergraduates are welcome to apply after successfully
            completing their 10 + 2 education.
          </p>
        </div>

        {/* <!-- COURSE DURATION --> */}
        <div
          data-aos="flip-right"
          className="md:col-span-1 flex gap-5 justify-center items-center flex-col animate-fadeIn"
        >
          <h1 className="text-3xl text-center font-poppins ">
            COURSE DURATION
          </h1>
          <img
            className="h-[14rem] transition-transform duration-500 transform hover:scale-110"
            width={400}
            src={Time}
            alt=""
          />
          <p className="w-full md:w-[60%] text-md md:text-xl text-center">
            Experience a 12-months program with 2 hours of daily classes for 6
            days a week, providing practical assignments in every session.
          </p>
        </div>

        {/* <!-- PLACEMENT GUARANTEE --> */}
        <div
          data-aos="flip-left"
          className="md:col-span-1 flex gap-5 justify-center items-center flex-col animate-fadeIn"
        >
          <h1 className="text-3xl text-center font-poppins">
            PLACEMENT GUARANTEE
          </h1>
          <img
            className="h-[14rem] transition-transform transform  duration-500 hover:scale-110"
            width={400}
            src={Job}
            alt=""
          />
          <p className="w-full md:w-[60%] text-md md:text-xl text-center">
            Secure your future with our Placement Guarantee, connecting you with
            industry leaders for exciting career opportunities after program.
          </p>
        </div>
      </div>
      {/* Contact Form */}
      <div className="flex justify-center ">
        <ContactForm />
      </div>
      {/* SIMILAR COURSE  */}
      <FAQSection />
    </div>
  );
}

export default GameDesign;
