import { cva, type VariantProps } from "class-variance-authority";

export const spinnerVariants = cva(
  [
    "inline-block align-[-0.125em]",
    "rounded-full",
    "text-current",
    "select-none",
    "pointer-events-none",
    "will-change-transform",
  ].join(" "),
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      speed: {
        normal: "animate-spin",
        slow: "animate-[spin_1.2s_linear_infinite]",
        fast: "animate-[spin_.6s_linear_infinite]",
      },
      tone: {
        solid: "",
        soft: "opacity-50",
      },
    },
    defaultVariants: {
      size: "sm",
      speed: "normal",
      tone: "solid",
    },
  }
);

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;
