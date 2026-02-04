import type * as React from 'react';

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaVariant = 'default' | 'soft';
export type TextareaStatus = 'default' | 'success' | 'warning' | 'error';

export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & {
  label?: string;

  /**
   * Optional hint rendered next to the label (e.g., "(optional)").
   */
  labelHint?: string;

  /**
   * Mark label as required (visual asterisk). Does not add HTML required automatically.
   */
  requiredMark?: boolean;
  helperText?: string;
  errorText?: string;
  size?: TextareaSize;
  variant?: TextareaVariant;
  status?: TextareaStatus;
  fullWidth?: boolean;
  noResize?: boolean;

  /**
   * Optional left-side element inside label row (e.g., badge).
   */
  labelLeftSlot?: React.ReactNode;

  /**
   * Optional right-side element inside label row (e.g., counter).
   */
  labelRightSlot?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
};
