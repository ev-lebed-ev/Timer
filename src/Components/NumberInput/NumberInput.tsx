import { memo } from "react";
import { isEmpty } from "../../Utils/IsEmpty";
import { Input, InputProps, ValueEnhancer } from "../Input/Input";

type NumberInputProps = Omit<InputProps<number>, "valueEnhancer">;

const maxNumber = 10_000_000;

const numberInputValueEnhancer: ValueEnhancer<number> = (value) => {
  if (isEmpty(value)) {
    return 0;
  }

  const number = Number(value);

  if (number > maxNumber) {
    return maxNumber;
  }

  return number;
}

const NumberInput = memo<NumberInputProps>((props) => (
  <Input {...props} valueEnhancer={numberInputValueEnhancer} />
));

NumberInput.displayName = "NumberInput";

export type { NumberInputProps };
export { NumberInput };
