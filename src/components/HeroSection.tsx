import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between my-4">
      <div className="relative z-10 md:max-w-6/12 w-full px-4">
        <h1 className="font-extrabold md:font-bold text-[25px] md:text-[35px]">
          Want to Turn Social Media Into a Profitable Career?{" "}
        </h1>
        <h1 className="font-urbanist font-extrabold md:font-bold text-[25px] md:text-[35px] text-[#00BCD4] text-shadow-lg/40  text-shadow-[#FC004E]">
          Discover your way to success with Fametonic:
        </h1>

        <div className="text-base font-normal md:font-semibold my-4 space-y-4">
          <p>✨ Start growing your influence right away—no waiting required!</p>
          <p>
            ✨ Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </p>
          <p>✨ Use a Personal AI Worker to boost your content</p>
          <p>
            ✨ Learn from expert-led courses designed for aspiring influencers
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-col items-center md:items-start justify-between gap-4 py-4">
          <div className="text-center md:text-left space-y-4 w-full max-w-[344px]">
            <button
              className="font-Urbanist font-bold max-w-[344px] w-full py-4 rounded-[10px] text-xl bg-[#FC004E]
  shadow-[4px_4px_4px_rgba(0,231,249,0.7)]"
            >
              GET STARTED {">"}
            </button>

            <p className="text-sm text-center">
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

      <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0">
        <Image
          src="/hero.png"
          alt="hero-image"
          fill
          className="object-contain w-full"
          priority
        />
      </div>
      <div className="lg:hidden">
        <Image src="/hero.png" alt="hero-image" width={666} height={679} />
      </div>
    </div>
  );
};

export default HeroSection;
