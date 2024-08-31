"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

interface MessageBoxProps extends VariantProps<typeof messageBoxStyles> {
  icon?: React.ReactNode;
  message: string;
  animation?: Variants;
  className?: string;
}

const messageBoxStyles = cva(
  "overflow-hidden flex items-center py-[4px] lg:py-[8px] px-[2px] lg:px-[7px] border border-cyan-500 opacity-[0.9] rounded-[32px] shadow-[inset_0_-7px_11px_rgba(164,143,255,0.12)] transition-[box-shadow_0.45s_cubic-bezier(0.6,0.6,0,1)] backdrop-blur-[6px] w-max",
  {
    variants: {
      size: {
        xs: "text-xs sm:text-sm md:text-base lg:text-sm xl:text-base",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

const MessageBox: React.FC<MessageBoxProps> = ({
  icon,
  message,
  animation,
  size,
  className,
  ...props
}) => {
  const combinedClasses = clsx(messageBoxStyles({ size }), className);

  return (
    <motion.div variants={animation} className={combinedClasses}>
      {icon && <div className="mr-2">{icon}</div>}
      <h1
        className="bg-gradient-to-r from-cyan-400 via-green-400 to-green-500 bg-clip-text text-transparent"
        style={{
          backgroundBlendMode: "normal, screen",
          WebkitTextFillColor: "transparent",
        }}
        {...props}
      >
        {message}
      </h1>
    </motion.div>
  );
};

export default MessageBox;
