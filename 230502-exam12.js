function numberIsInteger(value) {
  if (Number.isInteger(value)) {
    return true;
  } else {
    return false;
  }
}

//numberIsInteger대신에 if 자체에 Number.isInteger을 사용하여 맞으면 true 틀리면 false로 하여 구분하면 됩니다.

class fourArithmeticOperations {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if (numberIsInteger(value) === false) {
      throw new TypeError(`${value}은 숫자 정수가 아닙니다.`);
    }
    this._a = value;
  }

  set b(value) {
    if (numberIsInteger(value) === false) {
      throw new TypeError(`${value}은 숫자 정수가 아닙니다.`);
    }
    this._b = value;
  }

  get add() {
    return this._a + this._b;
  }

  get minus() {
    return this._a - this._b;
  }

  get divide() {
    return this._a / this._b;
  }

  get multiply() {
    return this._a * this._b;
  }
}

const a = 10;
const b = 20;

const mathNumber = new fourArithmeticOperations(a, b);
console.log(mathNumber);
console.log(mathNumber.add);
console.log(mathNumber.minus);
console.log(mathNumber.divide);
console.log(mathNumber.multiply);
