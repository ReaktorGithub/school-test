const compareArrays = <T>(arr1: T[], arr2: T[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const mySet = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (mySet.has(arr2[i])) {
      mySet.delete(arr2[i]);
    }
  }

  return mySet.size === 0;
};

export default compareArrays;
