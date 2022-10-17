type ValidNumber<N extends number> = `${N}` extends `-${number}`
  ? never
  : N;

const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
]

const numberToOrdinal = <N extends number>(number: ValidNumber<N>): string => {
  if (isNaN(number) || number < 0 || !Number.isInteger(number) || number > 999) {
    throw new Error(`Number must be positive and integer less than 1000 instead of ${number}`);
  }

  if (number === 0) {
    return "Zero"
  }

  // The case of 1 - 20
  if (number < 20) {
    return ones[number];
  }

  const numberStr = number.toString()

  if (numberStr.length === 2) {
    return `${tens[Number(numberStr[0])]} ${ones[Number(numberStr[1])]}`;
  }

  // 100 and more
  if (numberStr[1] === "0" && numberStr[2] === "0") {
    return `${ones[Number(numberStr[0])]} Hundred`;
  }

  return `${ones[Number(numberStr[0])]} Hundred and ${numberToOrdinal(+(numberStr[1] + numberStr[2]))}`;
};

export { numberToOrdinal };
