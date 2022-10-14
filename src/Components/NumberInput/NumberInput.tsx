import { memo } from "react";
import { DecreaseNumberButton, IncreaseNumberButton } from "../NumberControlButton/NumberControlButton";
import { Sign } from "../../Utils/Sign";
import { useSelector } from "react-redux";
import { ActionCreator } from "../../Store/Utils/CreateRootReducer";
import { AppSelector } from "../../Store/Selectors";

type UpdateAction<S extends Sign> = ActionCreator<[S], S>;

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
      {`${value}`}

      <DecreaseNumberButton action={action} />

      <IncreaseNumberButton action={action} />
    </div>
  )
});

NumberInput.displayName = "NumberInput";

export type { NumberInputProps };
export { NumberInput };
