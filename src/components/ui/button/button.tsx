import * as React from "react";
import { cn } from "@/libs/cn";
import { buttonVariants, type ButtonVariantProps } from "./button.variants";
import type { ButtonProps } from "./button.types";
import { Spinner } from "../spinner";

export const Button = React.forwardRef<
	HTMLButtonElement,
	ButtonProps & ButtonVariantProps
>(
	(
		{
			variant,
			size,
			fullWidth,
			className,
			loading = false,
			disabled = false,
			hideSpinner = false,
			leftIcon,
			rightIcon,
			children,
			type = "button",
			...props
		},
		ref
	) => {
		const isDisabled = disabled || loading;

		const classes = cn(
			buttonVariants({ variant, size, fullWidth }),
			loading && "cursor-wait",
			className
		);

		const left = loading && !hideSpinner ? (
			<Spinner className="mr-1" />
		) : leftIcon ? (
			<span className="mr-1">{leftIcon}</span>
		) : null;

		const right = rightIcon ? <span className="ml-1">{rightIcon}</span> : null;

		return (
			<button
				ref={ref}
				type={type}
				className={classes}
				disabled={isDisabled}
				aria-busy={loading || undefined}
				{...props}
			>
				{left}
				<span className={cn(loading && "opacity-90")}>{children}</span>
				{right}
			</button>
		);
	}
);

Button.displayName = "Button";
