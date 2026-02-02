import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap select-none",
    "[&>svg]:shrink-0",
    "rounded-xl font-semibold leading-none",
    "shadow-sm",
    "tracking-[-0.01em] antialiased",
    "transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-200 ease-out",
    "will-change-transform",
    "hover:shadow-md active:shadow-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "border border-transparent",
    "ring-1 ring-inset ring-white/10",
    "cursor-pointer",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "touch-manipulation",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--color-accent)] text-[var(--color-on-accent)]",
          "hover:bg-[var(--color-accent-hover)]",
          "active:bg-[var(--color-accent-active)]",
          "focus-visible:ring-[var(--color-ring)]",
          "focus-visible:ring-offset-[var(--color-accent)]",
        ].join(" "),

        secondary: [
          "bg-[var(--color-neutral)] text-[var(--color-on-neutral)]",
          "hover:bg-[var(--color-neutral-hover)]",
          "active:bg-[var(--color-neutral-active)]",
          "focus-visible:ring-[var(--color-ring)]",
          "focus-visible:ring-offset-[var(--color-neutral)]",
        ].join(" "),

        outline: [
          "bg-[var(--color-surface)] text-[var(--color-text)]",
          "border-[var(--color-border)]",
          "ring-0",
          "hover:bg-[var(--color-bg-subtle)]",
          "active:bg-[var(--color-surface-3)]",
          "focus-visible:ring-[var(--color-ring)]",
          "focus-visible:ring-offset-[var(--color-bg)]",
        ].join(" "),

        ghost: [
          "bg-transparent text-[var(--color-text)]",
          "border-transparent ring-0",
          "hover:bg-[var(--color-neutral)]",
          "active:bg-[var(--color-neutral-hover)]",
          "focus-visible:ring-[var(--color-ring)]",
          "focus-visible:ring-offset-[var(--color-bg)]",
        ].join(" "),

        destructive: [
          "bg-[var(--color-danger)] text-[var(--color-text-invert)]",
          "hover:bg-[var(--red-7)]",
          "active:bg-[var(--red-7)]",
          "focus-visible:ring-[var(--color-danger)]",
          "focus-visible:ring-offset-[var(--color-danger)]",
        ].join(" "),

        link: [
          "bg-transparent text-[var(--color-link)]",
          "border-transparent ring-0 shadow-none",
          "underline underline-offset-4",
          "decoration-[var(--color-text-soft)] hover:decoration-[var(--color-text-muted)]",
          "hover:text-[var(--color-link-hover)] active:text-[var(--color-link-hover)]",
          "focus-visible:ring-[var(--color-ring)]",
          "focus-visible:ring-offset-[var(--color-bg)]",
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
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
