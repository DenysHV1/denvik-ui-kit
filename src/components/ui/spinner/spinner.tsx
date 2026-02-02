import * as React from "react";
import { cn } from "@/libs/cn";
import { spinnerVariants, type SpinnerVariantProps } from "./spinner.variants";

type SpinnerProps = {
  className?: string;
} & SpinnerVariantProps;

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  speed,
  tone,
}) => {
  return (
    <span
      aria-hidden="true"
      className={cn(
        spinnerVariants({ size, speed, tone }),
        "text-[var(--spinner-color)]",
        className
      )}
    >
      <span className="block h-full w-full rounded-full border-2 border-current/25 border-t-current/90" />
      <span className="pointer-events-none absolute inset-0 rounded-full blur-[1px] opacity-20" />
    </span>
  );
};
