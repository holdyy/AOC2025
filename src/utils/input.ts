const getDelimiter = (input: string) => {
  if (input.includes('\n')) {
    return '\n';
  }
  if (input.includes(',')) {
    return ',';
  }
  return '';
};

const mapToNumberIfNecessary = (input: string[]) => {
  return input.map((e) => {
    // Keep strings longer than 10 digits (unsafe as numbers)
    if (/^\d+$/.test(e) && e.length <= 10) {
      return Number(e);
    }
    return e;
  });
};

export const parseInput = (input: string) => {
  const inputArray = input.split(getDelimiter(input));
  const trimmed = inputArray.map((e) => e.trim());
  return mapToNumberIfNecessary(trimmed);
};

export const parseLines = (input: string, delimiter?: string) => {
  const inputArray = input.split(delimiter || getDelimiter(input));
  return inputArray.map((element) => element.trim());
};
