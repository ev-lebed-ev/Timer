import { numberToOrdinal } from "../../Utils/NumberToOrdinal";

const generateNames = (count: number): Array<string> => {
  const names: Array<string> = [];

  for (let i = 1; i <= count; i++) {
    names.push(numberToOrdinal(i));
  }

  return names;
};

export { generateNames };
