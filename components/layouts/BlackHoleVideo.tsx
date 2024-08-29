"use client";

import React from "react";

const BlackHoleVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>
  );
};

export default BlackHoleVideo;
