import * as React from "react";

export type InputTone = "default" | "success" | "warning" | "danger";
export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "solid" | "soft" | "ghost";

export type InputSlotsClassNames = Partial<{
  root: string;
  label: string;
  field: string;
  left: string;
  right: string;
  input: string;
  helper: string;
  message: string;
}>;

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "disabled"
> & {
  className?: string;

  /** Visual */
  variant?: InputVariant;
  size?: InputSize;
  tone?: InputTone;

  /** State */
  disabled?: boolean;
  loading?: boolean;

  /** Content */
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  message?: React.ReactNode;

  /** Icons */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Show default icon for input type (email, search, tel, url, etc.) */
  showTypeIcon?: boolean;

  /** Password */
  allowPasswordToggle?: boolean;

  /** Clear */
  clearable?: boolean;
  onClear?: () => void;

  /** Fine-grained styling (optional) */
  slots?: InputSlotsClassNames;
};
