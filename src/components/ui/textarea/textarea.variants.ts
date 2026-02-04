import { cva, type VariantProps } from 'class-variance-authority';

export const textareaWrapperVariants = cva('flex flex-col', {
  variants: {
    gap: {
      sm: 'gap-1',
      md: 'gap-1.5',
      lg: 'gap-2',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    gap: 'md',
    fullWidth: true,
  },
});

export const labelRowVariants = cva('flex items-center justify-between gap-2');
export const labelLeftVariants = cva('flex min-w-0 items-center gap-2');
export const labelTextVariants = cva('min-w-0 text-sm font-medium text-[var(--color-text)]');
export const labelHintVariants = cva('text-xs text-[var(--color-text-soft)]');
export const requiredMarkVariants = cva('ml-1 text-[var(--color-danger)]');

export const textareaVariants = cva(
  [
    'block w-full min-w-0',
    'rounded-[var(--radius-md)]',
    'border border-[var(--color-field-border)]',
    'bg-[var(--color-field-bg)] text-[var(--color-field-fg)]',
    'placeholder:text-[var(--color-field-placeholder)]',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-[var(--ring-offset-color)]',
    'transition-[box-shadow,border-color,background-color,color] duration-150',
    'disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]',
    'disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-fg)]',
    'selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)]',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-[0.875rem] leading-5',
        md: 'px-3.5 py-2.5 text-[0.9375rem] leading-6',
        lg: 'px-4 py-3 text-[1rem] leading-6',
      },
      variant: {
        default: '',
        soft: 'bg-[var(--color-surface-2)]',
      },
      status: {
        default: '',
        success: 'border-[var(--color-success)] focus-visible:ring-[var(--color-success)]',
        warning: 'border-[var(--color-warning)] focus-visible:ring-[var(--color-warning)]',
        error: 'border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)]',
      },
      noResize: {
        true: 'resize-none',
        false: 'resize-y',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      status: 'default',
      noResize: false,
    },
  }
);

export const messageVariants = cva('text-xs leading-5', {
  variants: {
    tone: {
      helper: 'text-[var(--color-text-muted)]',
      error: 'text-[var(--color-danger)]',
    },
  },
  defaultVariants: {
    tone: 'helper',
  },
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
export type TextareaWrapperVariants = VariantProps<typeof textareaWrapperVariants>;

export function getAriaInvalid(status: TextareaVariants['status'], hasErrorText: boolean): boolean | undefined {
  if (status === 'error') return true;
  if (hasErrorText) return true;
  return undefined;
}
