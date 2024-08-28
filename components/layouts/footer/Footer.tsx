"use client";

import React from "react";
import FooterContainer from "./FooterContainer";
import FooterCopyRight from "./FooterCopyRight";
import SocialLinks from "./SocialLinks";
import Version from "./Version";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
        <SocialLinks />
      </div>
      <FooterCopyRight />
      <Version text="1.1.0" />
    </FooterContainer>
  );
};

export default Footer;
