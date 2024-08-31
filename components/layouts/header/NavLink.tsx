"use client";

import React from "react";
import Link from "./../../ui/Link";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return <Link href={href}>{label}</Link>;
};

export default NavLink;
