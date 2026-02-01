import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hideSpinner?: boolean;
};

export type SlottableElement = React.ReactElement<{ className?: string }>;

export type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children: SlottableElement;
};
