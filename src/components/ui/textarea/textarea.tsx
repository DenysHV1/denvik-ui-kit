import * as React from 'react';
import { cn } from '@/libs/cn';
import type { TextareaProps } from './types';
import {
  getAriaInvalid,
  labelHintVariants,
  labelLeftVariants,
  labelRowVariants,
  labelTextVariants,
  messageVariants,
  requiredMarkVariants,
  textareaVariants,
  textareaWrapperVariants,
} from './textarea.variants';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      labelHint,
      requiredMark = false,
      labelLeftSlot,
      labelRightSlot,
      helperText,
      errorText,
      size = 'md',
      variant = 'default',
      status = 'default',
      fullWidth = true,
      noResize = false,
      wrapperClassName,
      className,
      id,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const reactId = React.useId();
    const textareaId = id ?? reactId;
	
    const helperId = `${textareaId}-help`;
    const errorId = `${textareaId}-error`;

    const hasHelper = Boolean(helperText);
    const hasError = Boolean(errorText);

    const describedBy = [ariaDescribedBy, hasError ? errorId : null, !hasError && hasHelper ? helperId : null]
      .filter(Boolean)
      .join(' ') || undefined;

    const ariaInvalid = getAriaInvalid(status, hasError);

    const gap = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

    return (
      <div className={cn(textareaWrapperVariants({ gap, fullWidth }), wrapperClassName)}>
        {(label || labelLeftSlot || labelRightSlot) && (
          <div className={labelRowVariants()}>
            <div className={labelLeftVariants()}>
              {labelLeftSlot}
              {label && (
                <label htmlFor={textareaId} className={labelTextVariants()}>
                  {label}
                  {requiredMark && <span className={requiredMarkVariants()}>*</span>}
                </label>
              )}
              {labelHint && <span className={labelHintVariants()}>{labelHint}</span>}
            </div>

            {labelRightSlot ? <div className="shrink-0">{labelRightSlot}</div> : null}
          </div>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(textareaVariants({ size, variant, status, noResize }), className)}
          aria-invalid={ariaInvalid}
          aria-describedby={describedBy}
          {...props}
        />

        {hasError ? (
          <p id={errorId} className={messageVariants({ tone: 'error' })}>
            {errorText}
          </p>
        ) : hasHelper ? (
          <p id={helperId} className={messageVariants({ tone: 'helper' })}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
