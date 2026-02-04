// types.ts
import type { TextareaProps } from '../types';

export type TextareaStoryArgs = Pick<
  TextareaProps,
  | 'label'
  | 'labelHint'
  | 'requiredMark'
  | 'helperText'
  | 'errorText'
  | 'status'
  | 'size'
  | 'variant'
  | 'disabled'
  | 'readOnly'
  | 'noResize'
  | 'placeholder'
  | 'rows'
> & {

  controlled?: boolean;
  initialValue?: string;
};
