import type { CheckboxProps } from '../types';

export type CheckboxStoryArgs = Pick<
  CheckboxProps,
  | 'label'
  | 'helperText'
  | 'errorText'
  | 'size'
  | 'status'
  | 'disabled'
  | 'readOnly'
  | 'indeterminate'
  | 'requiredMark'
  | 'view'
> & {

  controlled?: boolean;
  initialChecked?: boolean;
};
