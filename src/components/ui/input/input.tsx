import * as React from "react";
import { cn } from "@/libs/cn";
import { Button } from "@/components/ui/button";
import { FiEye, FiEyeOff, FiLoader, FiX } from "react-icons/fi";
import type { InputProps } from "./input.types";
import { inputClasses } from "./input.variants";
import { typeIconMap } from "./utils/type-icons";
import { useControllableTextValue } from "./hooks/use-controllable-text-value";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
	{
		className,
		variant = "solid",
		size = "md",
		tone = "default",
		disabled = false,
		loading = false,
		label,
		helperText,
		message,
		leftIcon,
		rightIcon,
		showTypeIcon = true,
		allowPasswordToggle = true,
		clearable = false,
		onClear,
		slots,
		type = "text",
		readOnly = false,
		"aria-invalid": ariaInvalid,
		...props
	},
	ref,
) {
	const isPassword = type === "password";
	const [passwordVisible, setPasswordVisible] = React.useState(false);

	const actualType: React.HTMLInputTypeAttribute = isPassword
		? (passwordVisible ? "text" : "password")
		: type;

	const hasError = Boolean(ariaInvalid) || tone === "danger";

	const IconFromType = showTypeIcon ? typeIconMap[actualType] : undefined;

	const { value, onChange, setValue } = useControllableTextValue({
		value: props.value,
		defaultValue: props.defaultValue,
		onChange: props.onChange,
	});

	const canClear = clearable && !disabled && !readOnly && value.length > 0;

	const handleClear = React.useCallback(() => {
		onClear?.();
		setValue("");
	}, [onClear, setValue]);

	const hasLeft = Boolean(leftIcon) || Boolean(IconFromType);
	const hasRight =
		Boolean(rightIcon) || loading || canClear || (isPassword && allowPasswordToggle);

	const classes = inputClasses({
		variant,
		size,
		tone,
		disabled,
		readOnly,
		hasError,
		hasLeft,
		hasRight,
		loading,
		className,
		slots,
	});

	return (
		<div className={classes.root}>
			{label != null && (
				<label className={classes.label}>
					{label}
					{props.required && <span className="text-[var(--color-danger)]">*</span>}
				</label>
			)}

			<div className={classes.field} data-disabled={disabled ? "" : undefined} data-tone={tone}>
				{hasLeft && (
					<div className={classes.left} aria-hidden="true">
						{leftIcon ?? (IconFromType ? <IconFromType /> : null)}
					</div>
				)}

				<input
					ref={ref}
					type={actualType}
					className={classes.input}
					disabled={disabled}
					readOnly={readOnly}
					aria-invalid={ariaInvalid}
					value={props.value !== undefined ? (props.value as string | number | readonly string[] | undefined) : value}
					onChange={props.value !== undefined ? props.onChange : onChange}
					{...props}
				/>

				{hasRight && (
					<div className={classes.right}>
						{loading && (
							<span className="inline-flex items-center justify-center" aria-hidden="true">
								<FiLoader
									className={cn(
										"animate-spin text-[var(--color-text-soft)]",
										size === "sm" ? "text-[16px]" : "text-[18px]",
									)}
								/>
							</span>
						)}

						{rightIcon}

						{canClear && (
							<Button
								type="button"
								variant="ghost"
								size="icon"
								disabled={disabled}
								aria-label="Clear input"
								onClick={handleClear}
								className="no-bg-no-shadow"
							>
								<FiX />
							</Button>
						)}

						{isPassword && allowPasswordToggle && (
							<Button
								type="button"
								variant="ghost"
								size="icon"
								disabled={disabled}
								aria-label={passwordVisible ? "Hide password" : "Show password"}
								onClick={() => setPasswordVisible((v) => !v)}
								className="no-bg-no-shadow"
							>
								{passwordVisible ? <FiEyeOff /> : <FiEye />}
							</Button>
						)}
					</div>
				)}
			</div>

			{helperText != null && <div className={classes.helper}>{helperText}</div>}
			{message != null && <div className={classes.message}>{message}</div>}
		</div>
	);
});
