import * as React from 'react';
import { cn } from '@/libs/cn';
import type { CheckboxProps } from './types';
import {
  checkboxBoxVariants,
  checkboxErrorVariants,
  checkboxHelperVariants,
  checkboxIconVariants,
  checkboxInputVariants,
  checkboxLabelBlockVariants,
  checkboxLabelLeftVariants,
  checkboxLabelRowVariants,
  checkboxLabelTextVariants,
  checkboxPeerBoxFocusRing,
  checkboxRequiredMarkVariants,
  checkboxRootVariants,
} from './checkbox.variants';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16.667 5.833 8.333 14.167 3.333 9.167"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 10h11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      errorText,
      size = 'md',
      status = 'default',
      indeterminate = false,
      requiredMark = false,
      labelLeftSlot,
      labelRightSlot,
      wrapperClassName,
      className,
      id,
      checked,
      disabled,
      'aria-describedby': ariaDescribedBy,
      view="circle",
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const inputId = id ?? reactId;

    const helperId = `${inputId}-help`;
    const errorId = `${inputId}-error`;

    const hasHelper = Boolean(helperText);
    const hasError = Boolean(errorText);

    const describedBy = [ariaDescribedBy, hasError ? errorId : null, !hasError && hasHelper ? helperId : null]
      .filter(Boolean)
      .join(' ') || undefined;

    const ariaInvalid = hasError || status === 'error' ? true : undefined;

    const isChecked = Boolean(checked);
    const showDash = indeterminate && !isChecked;
    const showCheck = isChecked;

    return (
      <div className={cn(checkboxRootVariants({ disabled: Boolean(disabled) }), wrapperClassName)}>
        <label htmlFor={inputId} className="inline-flex items-start gap-2">
          <span className="relative inline-flex">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              className={checkboxInputVariants()}
              disabled={disabled}
              checked={checked}
              aria-invalid={ariaInvalid}
              aria-describedby={describedBy}
              {...props}
            />

            <span
              className={cn(
                checkboxPeerBoxFocusRing,
                checkboxBoxVariants({
                  size,
                  status,
                  checked: isChecked || showDash,
                  disabled: Boolean(disabled),
                }),
                view === "circle" ? "rounded-[var(--radius-sm)]" : "rounded-[5px]",
                className
              )}
              aria-hidden="true"
            >
              {showCheck ? (
                <CheckIcon className={checkboxIconVariants({ size, tone: 'on' })} />
              ) : showDash ? (
                <DashIcon className={checkboxIconVariants({ size, tone: 'on' })} />
              ) : null}
            </span>
          </span>

          {(label || labelLeftSlot || labelRightSlot || hasHelper || hasError) && (
            <span className={checkboxLabelBlockVariants()}>
              <span className={checkboxLabelRowVariants()}>
                <span className={checkboxLabelLeftVariants()}>
                  {labelLeftSlot}
                  {label ? (
                    <span className={checkboxLabelTextVariants()}>
                      {label}
                      {requiredMark && <span className={checkboxRequiredMarkVariants()}>*</span>}
                    </span>
                  ) : null}
                </span>

                {labelRightSlot ? <span className="shrink-0">{labelRightSlot}</span> : null}
              </span>

              {hasError ? (
                <span id={errorId} className={checkboxErrorVariants()}>
                  {errorText}
                </span>
              ) : hasHelper ? (
                <span id={helperId} className={checkboxHelperVariants()}>
                  {helperText}
                </span>
              ) : null}
            </span>
          )}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
