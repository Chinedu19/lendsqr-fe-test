import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useState } from "react";
import classNames from "classnames";

type PasswordFieldProps = {
  name: string;
  placeholder: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"input">;

const PasswordField = ({
  name,
  placeholder,
  className,
  ...otherProps
}: PasswordFieldProps) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="space-y-1">
      <div
        className={classNames(
          "focus-within:border-secondary rounded-[5px] overflow-hidden flex border-primary/[0.15] border-[2px] items-center max-w-[447px] bg-white pr-4"
        )}
      >
        <Field
          name={name}
          placeholder={placeholder}
          type={!isShowing ? "password" : "text"}
          {...otherProps}
          className={classNames(
            " w-full p-4 text-sm focus:outline-none",
            className
          )}
        />
        <span
          onClick={() => setIsShowing(!isShowing)}
          className="text-xs text-secondary cursor-pointer"
        >
          {isShowing ? "HIDE" : "SHOW"}
        </span>
      </div>
      <ErrorMessage
        name={name}
        render={(err) => <p className="text-red-500 text-sm">{err}</p>}
      />
    </div>
  );
};

export default PasswordField;
