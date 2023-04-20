//강사님 exampleOne이 정상적으로 작동안하는거 같습니다.

function exampleOne(first, second, dataType) {
  if (typeof first !== dataType && typeof second !== dataType) {
    return new Error(
      `매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`
    );
  } else {
    return "통과";
  }
}

function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {
  //없어도 되네요...
  // try {
  exampleOne(first, second);
  // } catch (error) {
  //   return new Error(error);
  // }

  let booleanResult;

  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if (typeof booleanResult === "boolean") {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴하지 못했습니다.");
  }
}

let basicData = [4, 6, 23, 5, 94, 35, 44, 66];

function exampleThree(array, functionOne, functionTwo) {
  if (typeof functionOne === "function" && typeof functionTwo === "function") {
    const arrayEvery = array.every((element) => {
      if (Number.isInteger(element)) {
        return true;
      } else {
        return false;
      }
    });
    if (arrayEvery) {
      if (arrayLengthEven(array) === false) {
        array.push(10);
      } else {
        console.log("array의 length는 짝수입니다.");
      }
    } else {
      //exampleOne이 정상작동 하지 않아서 만듦
      return new Error("array 요소 중 정수가 아닌 요소가 있습니다.");
    }
  } else {
    //위에 넣은 김에 표시하기 위해 넣었습니다
    return new Error("functionOne과 functionTwo는 둘다 function이어야 합니다");
  }

  let arrayResult = [];

  for (let i = 0; i < array.length; i += 2) {
    let first = array[i];
    let second = array[i + 1];

    if (functionTwo(first, second)) {
      arrayResult.push([first, second]);
    } else {
      arrayResult.push([second, first]);
    }
  }

  return arrayResult;
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo));

// console.log(exampleOne("ㄱ", 1, "number")); // 왜 이거 정상적으로 작동 안하지?
// console.log(isExampleTwo(1, "r"));

// const aaa = typeof "r";
// const aab = typeof 1;
// if (aaa !== "number" || aab !== "number") {
//   return new Error(`매개변수 first, second는 모두 number 타입이어야 합니다.`);
// }
