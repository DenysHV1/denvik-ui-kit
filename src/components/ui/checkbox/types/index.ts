import type * as React from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxStatus = 'default' | 'success' | 'warning' | 'error';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  label?: string;

  /**
   * Optional helper text under the label (shown when no errorText).
   */
  helperText?: string;
  errorText?: string;
  size?: CheckboxSize;
  status?: CheckboxStatus;
  /**
   * If true - shows indeterminate state (dash).
   * Note: indeterminate is visual-only; control it via this prop.
   */
  indeterminate?: boolean;
  /**
   * If true - shows asterisk next to label. Does not set HTML required automatically.
   */
  requiredMark?: boolean;
  /**
   * Slots near label.
   */
  labelLeftSlot?: React.ReactNode;
  labelRightSlot?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  view: "circle" | "square";
};
