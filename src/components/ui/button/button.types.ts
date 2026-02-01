import * as React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;

  /**
   * Loading state:
   * - sets aria-busy
   * - disables clicks
   * - shows spinner (optional)
   */
  loading?: boolean;

  /**
   * Explicit disabled flag.
   * Note: actual disabled state = disabled || loading
   */
  disabled?: boolean;

  /**
   * Render as a different element via Slot-like pattern.
   * If true, consumer passes child element (e.g. <a />) and classes are applied to it.
   */
  asChild?: boolean;

  /**
   * Optional icons
   */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  /**
   * Hide spinner visually, keep disabled behavior
   */
  hideSpinner?: boolean;
};

export type SlottableElement = React.ReactElement<{ className?: string }>;

export type SlotProps = React.HTMLAttributes<HTMLElement> & {
	children: SlottableElement;
};