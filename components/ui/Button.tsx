import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

interface ButtonBaseProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const buttonStyles = cva(
  "inline-flex items-center font-medium py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-cyan-500 hover:to-green-500",
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

const Button: React.FC<ButtonProps> = ({
  href,
  icon,
  children,
  variant,
  size,
  className,
  ...props
}) => {
  const combinedClasses = clsx(buttonStyles({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon && <span className="ms-2">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {icon && <span className="ms-2">{icon}</span>}
    </button>
  );
};

export default Button;
