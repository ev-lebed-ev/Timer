import { InputHTMLAttributes, memo } from "react";
import { State } from "../../Store/State";
import { Selector, useSelector } from "react-redux";
import { ExplicitAny } from "../../Utils/ExplicitAny";
import { ActionCreator } from "../../Store/Utils/CreateRootReducer";
import { useAction } from "../../Hooks/UseAction";

type ValueEnhancer<V extends ExplicitAny> = (value: string) => V;

type InputProps<V extends ExplicitAny> = {
  valueSelector: Selector<State, V>;
  updateValueActionCreator: ActionCreator<[V]>;
  valueEnhancer?: ValueEnhancer<V>;
};

const Input = memo<InputProps<ExplicitAny>>(({
                                               valueSelector,
                                               updateValueActionCreator,
                                               valueEnhancer,
                                             }) => {
  const value = useSelector(valueSelector);
  const setValue = useAction(updateValueActionCreator);

  const onChange: InputHTMLAttributes<HTMLInputElement>["onChange"] = (event) => {
    const newValue = event.target.value;

    console.log(newValue)
    if (valueEnhancer) {
      setValue(valueEnhancer(newValue));
    } else {
      setValue(newValue);
    }
  };

  return <input value={value} onChange={onChange} />
});
Input.displayName = "Input";

export type { ValueEnhancer, InputProps };
export { Input };
