import { memo } from "react";
import { DecreaseNumberButton, IncreaseNumberButton } from "../../Buttons/NumberControlButton/NumberControlButton";
import { Sign } from "../../../Utils/Sign";
import { useSelector } from "react-redux";
import { AppSelector } from "../../../Store/Selectors";
import { ActionCreator } from "../../../Store/Utils/ActionCreator";

type NumberInputProps = {
  selector: AppSelector<number>;
  action: ActionCreator<[Sign], Sign>;
};

const NumberInput = memo<NumberInputProps>(({
                                              selector,
                                              action,
                                            }) => {
  const value = useSelector(selector);

  return (
    <div>
      {value}

      <DecreaseNumberButton action={action} />

      <IncreaseNumberButton action={action} />
    </div>
  )
});

NumberInput.displayName = "NumberInput";

export type { NumberInputProps };
export { NumberInput };
