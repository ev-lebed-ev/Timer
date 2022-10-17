import { memo, useCallback } from "react";
import { isEmpty } from "../../../Utils/IsEmpty";
import { Input, InputOnChange, InputProps } from "../Input/Input";
import { nameSelector } from "../../../Store/Selectors";
import { nameUpdatedAction } from "../../../Store/Actions";
import { useSelector } from "react-redux";
import { useAction } from "../../../Hooks/UseAction";
import { Nilable } from "../../../Utils/Nilable";

type NameInputProps = Omit<InputProps<string>, "value" | "onChange"> & {
  index: number;
};

const normalizeName = (name: Nilable<string>): Nilable<string> => {
  if (isEmpty(name)) {
    return null;
  }

  return name;
};

const NameInput = memo<NameInputProps>(({
                                          index
                                        }) => {
  const name = useSelector(nameSelector(index));
  const updateName = useAction(nameUpdatedAction);

  const onChange = useCallback<InputOnChange<string>>(
    (value) => {
      updateName(normalizeName(value), index);
    },
    [],
  );

  return <Input value={name} onChange={onChange} />;
});

NameInput.displayName = "NameInput";

export { NameInput };
