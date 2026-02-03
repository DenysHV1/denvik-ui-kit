import * as React from "react";
import type { InputProps } from "../input.types";

type UseControllableTextValueArgs = {
  value: InputProps["value"];
  defaultValue: InputProps["defaultValue"];
  onChange: InputProps["onChange"];
};

export function useControllableTextValue({
  value,
  defaultValue,
  onChange,
}: UseControllableTextValueArgs) {
  const isControlled = value !== undefined;

  const [uncontrolled, setUncontrolled] = React.useState<string>(() => {
    if (defaultValue === undefined || defaultValue === null) return "";
    return String(defaultValue);
  });

  const resolvedValue = isControlled ? String(value ?? "") : uncontrolled;

  const handleChange = React.useCallback<NonNullable<InputProps["onChange"]>>(
    (e) => {
      onChange?.(e);
      if (!isControlled) setUncontrolled(e.currentTarget.value);
    },
    [isControlled, onChange],
  );

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolled(next);
    },
    [isControlled],
  );

  return { value: resolvedValue, onChange: handleChange, setValue, isControlled };
}
