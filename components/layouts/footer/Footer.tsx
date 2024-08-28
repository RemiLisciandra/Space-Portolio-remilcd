import React from "react";
import FooterCopyRight from "./FooterCopyRight";
import SocialLinks from "./SocialLinks";
import Version from "./Version";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <SocialLinks />
        </div>
        <FooterCopyRight />
        <Version text="1.0.0" />
      </div>
    </div>
  );
};

export default Footer;
