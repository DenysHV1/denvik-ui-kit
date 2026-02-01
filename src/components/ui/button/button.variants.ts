import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap select-none",
    "[&>svg]:shrink-0",
    "rounded-xl font-semibold leading-none",
    "shadow-sm",
    "transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-200 ease-out",
    "will-change-transform",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "ring-offset-white dark:ring-offset-zinc-950",
    "active:translate-y-[1px]",
    "cursor-pointer",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "touch-manipulation",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-zinc-900 text-white",
          "hover:bg-zinc-800",
          "active:bg-zinc-900",
          "hover:shadow-md active:shadow-sm",
          "focus-visible:ring-zinc-900",

          "dark:bg-zinc-50 dark:text-zinc-900",
          "dark:hover:bg-zinc-200",
          "dark:focus-visible:ring-zinc-50",
        ].join(" "),

        secondary: [
          "bg-zinc-100 text-zinc-900",
          "hover:bg-zinc-200",
          "active:bg-zinc-200",
          "hover:shadow-md active:shadow-sm",
          "focus-visible:ring-zinc-400",

          "dark:bg-zinc-800 dark:text-zinc-50",
          "dark:hover:bg-zinc-700",
          "dark:focus-visible:ring-zinc-600",
        ].join(" "),

        outline: [
          "bg-white text-zinc-900",
          "border border-zinc-200",
          "hover:bg-zinc-50",
          "active:bg-zinc-100",
          "hover:shadow-md active:shadow-sm",
          "focus-visible:ring-zinc-400",

          "dark:bg-zinc-950 dark:text-zinc-50",
          "dark:border-zinc-700",
          "dark:hover:bg-zinc-900",
          "dark:focus-visible:ring-zinc-600",
        ].join(" "),

        ghost: [
          "bg-transparent text-zinc-900",
          "hover:bg-zinc-100",
          "active:bg-zinc-200",
          "hover:shadow-sm",
          "focus-visible:ring-zinc-400",

          "dark:text-zinc-50",
          "dark:hover:bg-zinc-800",
          "dark:active:bg-zinc-700",
          "dark:focus-visible:ring-zinc-600",
        ].join(" "),

        destructive: [
          "bg-red-600 text-white",
          "hover:bg-red-700",
          "active:bg-red-700",
          "hover:shadow-md active:shadow-sm",
          "focus-visible:ring-red-600",

          "dark:bg-red-500",
          "dark:hover:bg-red-600",
          "dark:focus-visible:ring-red-500",
        ].join(" "),

        link: [
          "bg-transparent text-zinc-900",
          "underline underline-offset-4",
          "decoration-zinc-400 hover:decoration-zinc-500",
          "hover:text-zinc-700 active:text-zinc-800",
          "shadow-none",
          "focus-visible:ring-zinc-400",

          "dark:text-zinc-50",
          "dark:decoration-zinc-500 dark:hover:decoration-zinc-300",
          "dark:hover:text-zinc-200 dark:active:text-zinc-100",
        ].join(" "),
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

      loading: {
        true: "cursor-wait",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      loading: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
