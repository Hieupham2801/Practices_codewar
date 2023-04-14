function uniqueInOrder(iterable) {
    if (!iterable) {
      return [];
    }
    const result = [iterable[0]];
    console.log(result);
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] !== result[result.length - 1]) {
        result.push(iterable[i]);
      }
    }
    return result;
  }
  console.log(uniqueInOrder([1,2,2,3,3]));