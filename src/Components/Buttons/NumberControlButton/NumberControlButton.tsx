import { HTMLAttributes, memo, useCallback } from "react";
import { Sign } from "../../../Utils/Sign";
import { useAction } from "../../../Hooks/UseAction";
import { Button } from "../Button/Button";
import { ActionCreator } from "../../../Store/Utils/ActionCreator";

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
    <Button onClick={onClick}>
      {`${sign}`}
    </Button>
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