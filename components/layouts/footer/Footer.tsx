"use client";

import React from "react";
import FooterContainer from "./FooterContainer";
import FooterCopyRight from "./FooterCopyRight";
import SocialLinks from "./SocialLinks";
import Version from "./Version";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks />
      <FooterCopyRight />
      <Version text="1.2.0" />
    </FooterContainer>
  );
};

export default Footer;
