const add = require("./utility-module/add.js");
const minus = require("./utility-module/minus.js");
const divide = require("./utility-module/divide.js");
const multiply = require("./utility-module/multiply.js");

const a = 10;
const b = 20;

console.log(add(a, b));
console.log(minus(a, b));
console.log(divide(a, b));
console.log(multiply(a, b));

//Q.1 사칙연산 모듈을 4개 만들어서 import(가져오기) 후 호출한 예시입니다.
//Q.1 아무래도 이렇게 하나하나 가져오는 것은 가독성면에서나 사용성면에서 좋아보이지 않습니다.
//Q.1 이것을 하나의 class 형태의 모듈로 만들어 관리할 수 있을까요?

//Q.2 Class에서 작성될 메서드는 모두 '정수'로 된 두 개의 인자를 받아서 결과를 반환하게끔 제한하려면,
//Q.2 어떤 helper function을 사용해야 할까요?
//Q.2 helper function을 사용하면 어떤 장점이 있을까요?
//Q.2 helper function을 사용하지 않고 구현할 수 있는 방법이 있을까요?
