// let a;
// a = true;

// console.log(a);

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function c(b) {
//   if (b.length % 2 === 1) {
//     return new Error("에럽니다 알아서 처리하세요 짝수가 아니므니다");
//   }
// }
// console.log(c(b));

// function d(a, b, c) {
//   return a + b + c;
// }

// const e = d(1, 2);
// if (e === NaN) {
//   e.c(3);
// }
// console.log(e);

// function a(ay) {
//   if (error) {
//     console.error("에러났당께로", error);
//   }
// }
// const b = new Error("dp");
// a(b);

// const a = [];
// if (a.length === 0) {
//   console.log(`true가 나오네요`);
// } else {
//   console.log("false가 나오네요");
// }

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

const z = basicData[1];

for (let i = 0; i < basicData.length; i++) {
  let basicDataObject = basicData[i];
  if (1000 >= basicDataObject["price"]) {
    console.log(`이게(${basicDataObject["name"]}) 천원이 넘었네?`);
  } else {
    console.log(`이게(${basicDataObject["name"]}) 천원이 안되네?`);
  }
}
