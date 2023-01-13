import { ErrorMessage, Field } from "formik";
import React from "react";
import classNames from "classnames";
type InputFieldProps = {
  name: string;
  placeholder: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"input">;

const InputField = ({
  name,
  placeholder,
  className,
  ...otherProps
}: InputFieldProps) => {
  return (
    <div className="space-y-1">
      <Field
        name={name}
        placeholder={placeholder}
        {...otherProps}
        className={classNames(
          "border-primary/[0.15] focus-within:border-secondary rounded-[5px] focus:outline-none border-[2px] w-full p-4 max-w-[447px] text-sm",
          className
        )}
      />
      <ErrorMessage
        name={name}
        render={(err) => <p className="text-red-500 text-sm">{err}</p>}
      />
    </div>
  );
};

export default InputField;
