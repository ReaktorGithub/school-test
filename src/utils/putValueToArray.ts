/**
 * If the value is already in the array, it will be removed.
 * If the value is not in the array, then it will be added.
 * @param array
 * @param value
 * @param preventEmpty
 */

const putValueToArray = <T>(array: T[], value: T, preventEmpty?: boolean): T[] => {
  if (array.includes(value)) {
    const result = array.filter((item) => item !== value);

    if (preventEmpty) {
      return result.length ? result : array;
    }

    return result;
  }

  array.push(value);
  return array;
};

export default putValueToArray;
