import { cn } from "@/libs/cn";
import type { InputSize, InputTone, InputVariant, InputSlotsClassNames } from "./input.types";

type BuildArgs = {
  variant: InputVariant;
  size: InputSize;
  tone: InputTone;
  disabled: boolean;
  readOnly: boolean;
  hasError: boolean;
  hasLeft: boolean;
  hasRight: boolean;
  loading: boolean;
  className?: string;
  slots?: InputSlotsClassNames;
};

const sizeMap: Record<InputSize, { field: string; input: string; icon: string; padX: string }> = {
  sm: { field: "h-9 rounded-[var(--radius-sm)]", input: "text-sm", icon: "text-[16px]", padX: "px-3" },
  md: { field: "h-11 rounded-[var(--radius-md)]", input: "text-[15px]", icon: "text-[18px]", padX: "px-3.5" },
  lg: { field: "h-12 rounded-[var(--radius-lg)]", input: "text-base", icon: "text-[20px]", padX: "px-4" },
};

const toneTokens = (tone: InputTone, hasError: boolean) => {
  const resolved: InputTone = hasError ? "danger" : tone;

  switch (resolved) {
    case "success":
      return {
        border: "border-[var(--color-success)]/45",
        ring: "focus-within:shadow-[0_0_0_3px_rgba(16,185,129,0.25)]",
        icon: "text-[var(--color-success)]",
        message: "text-[var(--color-success)]",
      };
    case "warning":
      return {
        border: "border-[var(--color-warning)]/45",
        ring: "focus-within:shadow-[0_0_0_3px_rgba(245,158,11,0.25)]",
        icon: "text-[var(--color-warning)]",
        message: "text-[var(--color-warning)]",
      };
    case "danger":
      return {
        border: "border-[var(--color-danger)]/50",
        ring: "focus-within:shadow-[0_0_0_3px_rgba(239,68,68,0.22)]",
        icon: "text-[var(--color-danger)]",
        message: "text-[var(--color-danger)]",
      };
    default:
      return {
        border: "border-[var(--color-field-border)]",
        ring: "focus-within:shadow-[var(--shadow-focus)]",
        icon: "text-[var(--color-text-soft)]",
        message: "text-[var(--color-text-muted)]",
      };
  }
};

const variantMap: Record<InputVariant, { field: string; input: string }> = {
  solid: {
    field:
      "bg-[var(--color-field-bg)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-surface-2)]/70",
    input: "bg-transparent",
  },
  soft: {
    field:
      "bg-[var(--color-surface-2)]/70 hover:bg-[var(--color-surface-2)] border-transparent",
    input: "bg-transparent",
  },
  ghost: {
    field: "bg-transparent hover:bg-[var(--color-surface-2)]/45 border-transparent",
    input: "bg-transparent",
  },
};

export function inputClasses(args: BuildArgs) {
  const s = sizeMap[args.size];
  const t = toneTokens(args.tone, args.hasError);

  const root = cn("w-full", args.className, args.slots?.root);

  const label = cn(
    "mb-1.5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)]",
    args.disabled && "opacity-[var(--opacity-disabled)]",
    args.slots?.label,
  );

  const field = cn(
    "relative flex w-full items-stretch",
    "border transition-colors duration-150",
    "ring-offset-2 ring-offset-[var(--ring-offset-color)]",
    "outline-none",
    s.field,
    s.padX,
    variantMap[args.variant].field,
    t.border,
    t.ring,
    args.disabled && "opacity-[var(--opacity-disabled)] bg-[var(--color-disabled-bg)]",
    args.readOnly && "cursor-default",
    args.readOnly && "bg-[var(--color-surface-2)]/55",
    args.slots?.field,
  );

  const left = cn(
    "pointer-events-none absolute left-0 top-0 flex h-full items-center justify-center",
    s.padX,
    s.icon,
    t.icon,
    args.disabled && "text-[var(--color-disabled-fg)]",
    args.slots?.left,
  );

  const right = cn(
    "absolute right-0 top-0 flex h-full items-center justify-center gap-1",
    s.padX,
    args.slots?.right,
  );

  const input = cn(
    "peer w-full appearance-none outline-none",
    "text-[var(--color-field-fg)] placeholder:text-[var(--color-field-placeholder)]",
    "disabled:cursor-not-allowed",
    "autofill:shadow-[0_0_0_999px_var(--color-field-bg)_inset]",
    "autofill:[-webkit-text-fill-color:var(--color-field-fg)]",
    variantMap[args.variant].input,
    s.input,
    args.hasLeft ? "pl-9" : "pl-0",
    args.hasRight ? "pr-10" : "pr-0",
    args.disabled && "text-[var(--color-disabled-fg)] placeholder:text-[var(--color-disabled-fg)]",
    args.readOnly && "text-[var(--color-text-muted)]",
    args.loading && "pr-12",
    args.slots?.input,
  );

  const helper = cn(
    "mt-1 text-xs leading-5 text-[var(--color-text-muted)]",
    args.disabled && "opacity-[var(--opacity-disabled)]",
    args.slots?.helper,
  );

  const message = cn(
    "mt-1 text-xs leading-5",
    t.message,
    args.disabled && "opacity-[var(--opacity-disabled)]",
    args.slots?.message,
  );

  return { root, label, field, left, right, input, helper, message };
}
