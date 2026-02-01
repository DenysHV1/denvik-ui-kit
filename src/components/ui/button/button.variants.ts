import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 select-none",
    "rounded-xl font-semibold",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "ring-offset-white dark:ring-offset-zinc-950",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-y-[1px]",
    "whitespace-nowrap",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:ring-zinc-900 " +
          "dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-50",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus-visible:ring-zinc-400 " +
          "dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-600",
        outline:
          "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:ring-zinc-400 " +
          "dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-600",
        ghost:
          "bg-transparent text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400 " +
          "dark:text-zinc-50 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-600",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600 " +
          "dark:bg-red-500 dark:hover:bg-red-600 dark:focus-visible:ring-red-500",
        link:
          "bg-transparent text-zinc-900 underline underline-offset-4 hover:text-zinc-700 " +
          "dark:text-zinc-50 dark:hover:text-zinc-200 focus-visible:ring-zinc-400",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
        icon: "h-10 w-10 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
