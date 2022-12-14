import React from "react";
import f1 from "../images/f1.svg";
import f2 from "../images/f2.svg";
import f3 from "../images/f3.svg";
import f3m from "../images/f3m.svg";

function Features() {
  return (
    <div id="features">

      <div className="flex place-content-center mb-2 mt-2 md:mb-16 font-CirculaMedium">
        <div className="md:text-6xl text-4xl text-center px-2 ">

          Features
        </div>
        <div className="md:text-6xl text-4xl text-purple-600">101</div>
      </div>
      <div className="flex flex-col pt-2 md:pt-8 font-CirculaBook ">
        <div className="flex flex-wrap place-content-evenly pt-4  ">
          <div className="flex flex-col mx-20 md:mx-4 md:basis-1/4">
            <div className=" text-3xl md:text-5xl py-1 ">
            Get verified for your work 
            </div>
            <div className="text-1xl md:text-3xl py-4">
            Get acknowledged by creators for your work and make a kick ass
              portfolio
            </div>
          </div>

          <div className="">
            <img
              className="object-scale-down h-96 p-auto items "
              src={f1}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-wrap-reverse place-content-evenly p-6 pb-0  md:pt-16 md:pb-0 md:px-12 bg-[#E9E9E9]">
          <div className="">
            <img
              className="object-scale-down h-96 p-auto items "
              src={f2}
              alt=""
            />
          </div>

          <div className="flex flex-col mx-12 md:mx-4  md:basis-1/4">
            <div className=" text-3xl md:text-5xl py-1 ">
    
            Share via DM 
            </div>
            <div className="text-1xl md:text-3xl py-4">
              Share your media kits, epks and resumes within seconds as a link
              or pdf.
              
            </div>
          </div>
        </div>

        <div className="flex flex-wrap place-content-evenly pt-3 px-3 md:py-16 md:px-12 ">
          <div className="flex flex-col mx-3 md:mx-2 md:basis-1/4">
            <div className=" text-3xl md:text-5xl inline-flex  pb-2">
              Showcase your Metrics
            </div>
            <div className="text-1xl md:text-3xl ">
  
            Get deals done instantly by showing key metrics.<br className="pb-1"></br> Focus
              on creation while we do the best for you.
            </div>
          </div>

          <div className="">
            <img
              className="object-scale-down h-80 p-auto items  "
              src={f3}
              alt=""
            />
          </div>
        </div>


      
      </div>
      </div>
 
  );
}

export default Features;
