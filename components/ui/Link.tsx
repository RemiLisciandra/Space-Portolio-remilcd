import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const linkStyles = cva(
  "relative flex items-center cursor-pointer transition-all duration-500 z-[20]",
  {
    variants: {
      variant: {
        primary: "bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500",
        secondary:
          "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 hover:from-green-500 hover:to-cyan-500",
      },
      size: {
        sm: "py-1 px-2 text-xs",
        md: "py-2 px-3 sm:px-4 text-sm sm:text-base",
        lg: "py-3 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkStyles> {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  label,
  icon,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <a
      href={href}
      className={linkStyles({ variant, size, className })}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative">
        {label}
        {variant === "primary" && (
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-500 group-hover:w-full"></span>
        )}
      </span>
    </a>
  );
};

export default Link;
