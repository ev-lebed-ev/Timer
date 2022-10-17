import { InputHTMLAttributes, memo, useCallback } from "react";
import { ExplicitAny } from "../../../Utils/ExplicitAny";
import { Nilable } from "../../../Utils/Nilable";
import { isNil } from "../../../Utils/IsNil";
import classes from "./Input.css";

type InputOnChange<V extends ExplicitAny> = (value: Nilable<V>) => void;

type InputProps<V extends ExplicitAny> = {
  value: Nilable<V>;
  onChange: InputOnChange<V>
};

const Input = memo<InputProps<ExplicitAny>>(({
                                               value,
                                               onChange,
                                             }) => {
  const enhancedValue: string = isNil(value) ? "" : value;

  const enhancedOnChange = useCallback<NonNullable<InputHTMLAttributes<HTMLInputElement>["onChange"]>>(
    (event) => {
      onChange(event.target.value);
    },
    [value, onChange]
  );

  return (
    <div>
      <input className={classes.input} value={enhancedValue} onChange={enhancedOnChange} />

      {isNil(value) && <div>{"Error"}</div>}
    </div>
  )
});
Input.displayName = "Input";

export type { InputOnChange, InputProps };
export { Input };
