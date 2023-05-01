example = [[1, 2, 3], [4, [5, 6]], 7, [8, 9]];

function flatten(data) {
  let output = [];
  for (let i of data) {
    //첫번째

    if (Array.isArray(i) === true) {
      for (let j of i) {
        //두번째

        if (Array.isArray(j) === true) {
          output.push(j);
        }
      }
      output.push(i);
    }
  }
  return output;
}

console.log(flatten(example));
