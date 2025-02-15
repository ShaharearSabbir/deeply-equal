function deepEqual(value1, value2) {
  if (typeof value1 == "number" && typeof value2 == "number") {
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }
  }
  if (typeof value1 == "string" && typeof value2 == "string") {
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }
  }
  if (value1 instanceof Array && value2 instanceof Array) {
    let trueCounter = 0;
    for (let i = 0; i < value1.length; i++) {
      if (value1[i] === value2[i]) {
        trueCounter++;
      }
    }
    if (trueCounter === value1.length && trueCounter === value2.length) {
      return true;
    } else {
      return false;
    }
  }
  if (value1 instanceof Object && value2 instanceof Object) {
    let trustCounter = 0;
    const key1Array = Object.keys(value1);
    const key2Array = Object.keys(value2);
    const value1Array = Object.values(value1);
    const value2Array = Object.values(value2);
    if (key1Array.length == key2Array.length) {
      for (let i = 0; i < key1Array.length; i++) {
        if (
          key1Array[i] === key2Array[i] &&
          value1Array[i] === value2Array[i]
        ) {
          trustCounter++;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
    if (trustCounter == key1Array.length) {
      return true;
    }
  } else {
    return false;
  }
}

console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
console.log(deepEqual(1, "2"));
console.log(deepEqual("A", "A"));
console.log(deepEqual("A", "B"));
console.log(deepEqual("A", ["A"]));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }));
console.log(deepEqual({ a: 1, b: 2 }, [1, 2]));
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
console.log(deepEqual([1, 2, 3], [1, 2, 4]));
console.log(deepEqual([1, 2, 3], { a: 1, b: 2, c: 3 }));
