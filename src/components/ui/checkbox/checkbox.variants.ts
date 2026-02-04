import { cva, type VariantProps } from 'class-variance-authority';

export const checkboxRootVariants = cva('flex items-start gap-2', {
  variants: {
    disabled: {
      true: 'opacity-[var(--opacity-disabled)]',
      false: '',
    },
  },
});

export const checkboxLabelBlockVariants = cva('min-w-0 flex-1');

export const checkboxLabelRowVariants = cva('flex items-start justify-between gap-2');

export const checkboxLabelLeftVariants = cva('flex min-w-0 items-start gap-2');

export const checkboxLabelTextVariants = cva('min-w-0 text-sm font-medium text-[var(--color-text)]');

export const checkboxRequiredMarkVariants = cva('ml-1 text-[var(--color-danger)]');

export const checkboxHelperVariants = cva('mt-0.5 text-xs leading-5 text-[var(--color-text-muted)]');

export const checkboxErrorVariants = cva('mt-0.5 text-xs leading-5 text-[var(--color-danger)]');

export const checkboxBoxVariants = cva(
  [
    // layout
    'relative inline-flex shrink-0 items-center justify-center',
    // border & bg
    'border border-[var(--color-border)] bg-[var(--color-surface)]',
    // focus
    'transition-[box-shadow,border-color,background-color,color] duration-150',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      status: {
        default: '',
        success: 'border-[var(--color-success)]',
        warning: 'border-[var(--color-warning)]',
        error: 'border-[var(--color-danger)]',
      },
      checked: {
        true: 'border-[var(--color-primary)] bg-[var(--color-primary)]',
        false: '',
      },
      disabled: {
        true: 'bg-[var(--color-disabled-bg)] border-[var(--color-border)]',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      status: 'default',
      checked: false,
      disabled: false,
    },
  }
);

export const checkboxIconVariants = cva('pointer-events-none absolute', {
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
    },
    tone: {
      on: 'text-[var(--color-on-primary)]',
      off: 'text-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    tone: 'on',
  },
});

export const checkboxInputVariants = cva(
  [
    'sr-only',
    'peer',
  ].join(' ')
);

export const checkboxPeerBoxFocusRing = 'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[var(--color-ring)] peer-focus-visible:ring-offset-[var(--ring-offset-color)]';

export type CheckboxBoxVariants = VariantProps<typeof checkboxBoxVariants>;
