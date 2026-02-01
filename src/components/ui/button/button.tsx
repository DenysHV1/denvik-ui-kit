import * as React from "react";
import { cn } from "@/libs/cn";
import { buttonVariants, type ButtonVariantProps } from "./button.variants";
import type { ButtonProps, SlotProps, SlottableElement } from "./button.types";
import { Spinner } from "../spinner";



function Slot({ className, children, ...rest }: SlotProps) {
	const merged = cn(children.props.className, className);
	return React.cloneElement(
		children,
		{
			...(rest as Record<string, unknown>),
			className: merged,
		} as Partial<SlottableElement["props"]>
	);
}


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
			asChild = false,
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

		if (asChild) {
			if (!React.isValidElement(children)) {
				if (process.env.NODE_ENV !== "production") {
					throw new Error(
						"Button with asChild expects a single React element as a child."
					);
				}
				return null;
			}

			return (
				<Slot
					className={classes}
					aria-busy={loading || undefined}
					aria-disabled={isDisabled || undefined}
					{...(props as React.HTMLAttributes<HTMLElement>)}
				>
					{children as React.ReactElement<{ className?: string }>}
				</Slot>
			);
		}

		return (
			<button
				ref={ref}
				type={type}
				className={classes}
				disabled={isDisabled}
				aria-busy={loading || undefined}
				{...props}
			>
				{loading && !hideSpinner ? (
					<Spinner className="mr-1" />
				) : leftIcon ? (
					<span className="mr-1">{leftIcon}</span>
				) : null}
				<span className={cn(loading && "opacity-90")}>{children}</span>
				{rightIcon ? <span className="ml-1">{rightIcon}</span> : null}
			</button>
		);
	}
);

Button.displayName = "Button";
