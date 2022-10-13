import { Selector } from "react-redux";
import { isNil } from "../../Utils/IsNil";

const makeSelectorNonNilable = <S, R>(selector: Selector<S, R>): (state: S) => NonNullable<R> =>
  (state) => {
    const value = selector(state);

    if (isNil(value)) {
      throw new Error("Selected value is nil");
    }

    return value as NonNullable<R>;
  };

export { makeSelectorNonNilable };
