function distinctPairSum(arr, k) {
  const addingArray = [arr[0]];
  const solutions = {};

  arr.forEach((int) => {
    addingArray.push(int);
    if (addingArray.length === 2) {
      const sum = addingArray.reduce((accumulator, e) => {
        return accumulator + e;
      });
      if (
        sum === k &&
        solutions[addingArray[0]] == undefined &&
        solutions[addingArray[1]] == undefined
      ) {
        solutions[addingArray[0]] = [...addingArray];
      }
      addingArray.shift();
    }
  });

  return Object.values(solutions);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: [[0,2], [1,1]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
