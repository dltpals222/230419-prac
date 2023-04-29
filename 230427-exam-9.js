import inquirer from "inquirer";

function oddElevator(floorNumber) {
  if (floorNumber !== -1 && floorNumber !== 10) {
    if (floorNumber % 2 !== 1) {
      console.log(`해당 엘리베이터로는 갈 수 없는 층입니다.`);
    } else {
      console.log("문을 열겠습니다.");
      setTimeout(() => {
        console.log(`${floorNumber}층에 도착하였습니다.`);
      }, 1000);
      setTimeout(() => {
        console.log("문을 닫습니다.");
      }, 2000);
    }
  } else {
    console.log("문을 열겠습니다.");
    setTimeout(() => {
      console.log(`${floorNumber}층에 도착하였습니다.`);
    }, 1000);
    setTimeout(() => {
      console.log("문을 닫습니다.");
    }, 2000);
  }
}

function evenElevator(floorNumber) {
  if (floorNumber !== -1 && floorNumber !== 1) {
    if (floorNumber % 2 !== 0) {
      console.log(`해당 엘리베이터로는 갈 수 없는 층입니다.`);
    } else {
      console.log("문을 열겠습니다.");
      setTimeout(() => {
        console.log(`${floorNumber}층에 도착하였습니다.`);
      }, 1000);
      setTimeout(() => {
        console.log("문을 닫습니다.");
      }, 2000);
    }
  } else {
    console.log("문을 열겠습니다.");
    setTimeout(() => {
      console.log(`${floorNumber}층에 도착하였습니다.`);
    }, 1000);
    setTimeout(() => {
      console.log("문을 닫습니다.");
    }, 2000);
  }
}

// console.log(oddElevator(8));
// console.log(evenElevator(3));

const promptReq = [
  {
    type: "list",
    name: "elevator",
    message: "어떤 엘리베이터를 탑승하시겠습니까?",
    choices: ["oddElevator", "evenElevator"],
  },
  {
    type: "number",
    name: "floor",
    message: "몇층으로 이동하시겠습니까?",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "해당 층으로 이동하시겠습니까?",
  },
];

inquirer.prompt(promptReq).then((answers) => {
  if (answers.elevator === "oddElevator") {
    oddElevator(answers.floor);
  } else {
    evenElevator(answers.floor);
  }
});
