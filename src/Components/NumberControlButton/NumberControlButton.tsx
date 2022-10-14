import { HTMLAttributes, memo, useCallback } from "react";
import { Sign } from "../../Utils/Sign";
import { ActionCreator } from "../../Store/Utils/CreateRootReducer";
import { useAction } from "../../Hooks/UseAction";

type NumberControlButtonBase = {
  sign: Sign;
  action: ActionCreator<[Sign], Sign>;
};

type SpecificNumberControlButtonProps = Omit<NumberControlButtonBase, "sign">;

const NumberControlButton = memo<NumberControlButtonBase>(({
                                                                   sign,
                                                                   action,
                                                                 }) => {
  const updateNumber = useAction(action);

  const onClick = useCallback<NonNullable<HTMLAttributes<HTMLButtonElement>["onClick"]>>(
    () => {
      updateNumber(sign)
    },
    [sign, updateNumber]
  );

  return (
    <button onClick={onClick}>
      {`${sign}`}
    </button>
  );
});
NumberControlButton.displayName = "NumberControlButton";

const DecreaseNumberButton = memo<SpecificNumberControlButtonProps>(({
                                                                           action
                                                                         }) => (
  <NumberControlButton sign={-1} action={action} />
));

const IncreaseNumberButton = memo<SpecificNumberControlButtonProps>(({
                                                                           action
                                                                         }) => (
  <NumberControlButton sign={1} action={action} />
));

export { IncreaseNumberButton, DecreaseNumberButton };