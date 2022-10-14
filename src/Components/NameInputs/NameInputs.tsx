import { memo } from "react";
import { useSelector } from "react-redux";
import { countSelector } from "../../Store/Selectors";
import { NameInput } from "../NameInput/NameInput";

const NameInputs = memo(() => {
  const count = useSelector(countSelector);

  return (
    <>
      {new Array(count).fill(null).map((_, index) => (
        <NameInput key={index} index={index} />
      ))}
    </>
  );
});
NameInputs.displayName = "NameInputs";

export { NameInputs };
