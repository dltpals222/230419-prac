let basicData = {
  header: {},
  main: {},
  footer: {},
};

let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc",
    },
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333",
    },
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666",
    },
  },
};

function exampleOne(basicData, fromJsonData) {
  let value = "";
  return value;
}

const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

class ExampleTwo {
  constructor(data) {
    if (typeof data !== "object" || Array.isArray(data) || data === null) {
      return new Error("데이터는 객체여야 합니다.");
    }

    this._data = {};

    this._data.content = this._valiDateType(content);
    this._data.style = this._valiDateType(style);
  }
  _valiDateType(value) {
    if (typeof value === "string") {
      return value;
    } else if (typeof value === "object" && Array.isArray(value) === false) {
      for (let key in value) {
        if (typeof value[key] === "string") {
          return `${value} : ${value[key]}`;
        }
      }
    }
  }
}
