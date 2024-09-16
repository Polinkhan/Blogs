import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  if (!label) {
    return <BaseInput ref={ref} {...props} />;
  }

  return (
    <div className="space-y-1">
      <label htmlFor={props.name} className="px-1.5 text-sm text-muted-foreground font-medium">
        {label}
      </label>
      <BaseInput id={props.name} ref={ref} {...props} />
    </div>
  );
});

const BaseInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
BaseInput.displayName = "BaseInput";

export { Input };
