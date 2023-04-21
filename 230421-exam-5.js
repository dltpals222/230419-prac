const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 },
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" },
};

//Q1번 문제
function currencyValueName(value, currencyObject) {
  for (let key in currencyObject) {
    const objectData = currencyObject[key];
    if (value === objectData["value"]) {
      console.log(`${objectData["name"]}을 넣었습니다.`);
    }
  }
}

//Q2~ Q4번 문제
function inputPriceCompare(value, basicDataObject) {
  let comparePromise = new Promise((resolve, reject) => {
    if (
      typeof value === "number" &&
      typeof basicDataObject === "object" &&
      Array.isArray(basicDataObject) === true
    ) {
      let valueUp = [];
      let valueDown = [];
      for (let i = 0; i < basicDataObject.length; i++) {
        let objectData = basicDataObject[i];
        if (value >= objectData["price"]) {
          valueUp.push(objectData["name"]);
        } else if (value < objectData["price"]) {
          valueDown.push(objectData["name"]);
        }
      }

      if (valueUp.length === 0) {
        reject("잔액이 부족합니다.");
      } else {
        resolve(valueUp);
      }
    } else {
      reject(
        `첫번째 매개변수의 타입은 숫자, 두번째 매개변수의 타입은 배열이여야 합니다.`
      );
    }
  }); //promise 끝
  comparePromise.then((result) => {
    if (result.length === basicDataObject.length) {
      console.log("당신은 부자입니다.");
      let resultText = result.join(", ");
      console.log(`구매가능한 제품 : ${resultText}`);
    } else if (result.length !== basicDataObject.length && result.length > 0) {
      let resultText = result.join(", ");
      console.log(`구매가능한 제품 : ${resultText}`);
    }
  });
  comparePromise.catch((err) => {
    console.log(err);
  });
}

function exampleOne(inputPrice, currency, basicData) {
  currencyValueName(inputPrice, currency);
  inputPriceCompare(inputPrice, basicData);
}

exampleOne(1000, currency, basicData);

//강사님 아무리 찾아도 잘 모르겠는데 promise에서 오류가 납니다.
//일단 오류나는 조건은 reject조건 2가지(물건을 살수 없을때, 타입오류가 났을때) 입니다.

// node:internal/process/promises:288
//             triggerUncaughtException(err, true /* fromPromise */);
//             ^

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "첫번째 매개변수의 타입은 숫자, 두번째 매개변수의 타입은 배열이여야
// 합니다.".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// async, await 말고 promise를 사용해보고 싶어서 사용했는데 오류가 자꾸 납니다.
