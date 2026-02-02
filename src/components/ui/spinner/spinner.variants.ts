import { cva, type VariantProps } from "class-variance-authority";

export const spinnerVariants = cva(
  [
    "relative inline-block align-[-0.125em]",
    "animate-spin",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      speed: {
        slow: "[animation-duration:900ms]",
        normal: "[animation-duration:700ms]",
        fast: "[animation-duration:500ms]",
      },
      tone: {
        neutral: "[--spinner-color:var(--color-text)]",
        muted: "[--spinner-color:var(--color-text-muted)]",
        accent: "[--spinner-color:var(--color-accent)]",
      },
    },
    defaultVariants: {
      size: "md",
      speed: "normal",
      tone: "neutral",
    },
  }
);

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;
