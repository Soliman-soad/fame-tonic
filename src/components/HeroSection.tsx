import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
      <div>
        <h1 className="font-extrabold md:font-bold text-[25px] md:text-[35px]">
          Want to Turn Social Media Into a Profitable Career?{" "}
        </h1>
        <h1 className="font-urbanist font-extrabold md:font-bold text-[25px] md:text-[35px] text-[#00BCD4] text-shadow-lg/40  text-shadow-[#FC004E]">
          Discover your way to success with Fametonic:
        </h1>
        <div className="text-base font-normal md:font-semibold my-4 space-y-4">
          <p>
            {" "}
            <span>✨</span> Start growing your influence right away—no waiting
            required!
          </p>
          <p>
            {" "}
            <span>✨</span> Create viral TikToks and Reels step by step with
            easy-to-follow lessons
          </p>
          <p>
            {" "}
            <span>✨</span> Use a Personal AI Worker to boost your content
          </p>
          <p>
            {" "}
            <span>✨</span> Learn from expert-led courses designed for aspiring
            influencers
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-col items-center justify-between gap-4 py-4">
          <div className="text-center space-y-4">
            <button className="font-Urbanist font-bold max-w-[344px] w-full py-4 rounded-[10px] text-xl bg-[#FC004E] shadow-md shadow-[#00E7F9]">
              GET STARTED {">"}
            </button>
            <p className="text-sm">
            1-minute quiz for personalized Insights
            </p>
          </div>

          <div className="font-regular space-y-3 text-[#ABABAB] text-center md:text-left mt-6">
            <p>
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p>Fametonic 2025 ©All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={"/hero.png"} alt="hero-image" width={666} height={679} />
      </div>
    </div>
  );
};

export default HeroSection;
