import inquirer from "inquirer";

async function oddElevator(floorNumber) {
  if (floorNumber !== -1 && floorNumber !== 10) {
    if (floorNumber % 2 !== 1) {
      console.log(`해당 엘리베이터로는 갈 수 없는 층입니다.`);
    } else {
      console.log("문을 열겠습니다.");
      await setTimeout(() => {
        console.log(`${floorNumber}층에 도착하였습니다.`);
      }, 1000);
      setTimeout(() => {
        console.log("문을 닫습니다.");
      }, 1000);
    }
  } else {
    console.log("문을 열겠습니다.");
    await setTimeout(() => {
      console.log(`${floorNumber}층에 도착하였습니다.`);
    }, 1000);
    setTimeout(() => {
      console.log("문을 닫습니다.");
    }, 1000);
  }
}

async function evenElevator(floorNumber) {
  if (floorNumber !== -1 && floorNumber !== 1) {
    if (floorNumber % 2 !== 0) {
      console.log(`해당 엘리베이터로는 갈 수 없는 층입니다.`);
    } else {
      console.log("문을 열겠습니다.");
      await setTimeout(() => {
        console.log(`${floorNumber}층에 도착하였습니다.`);
      }, 1000);
      setTimeout(() => {
        console.log("문을 닫습니다.");
      }, 2000);
    }
  } else {
    console.log("문을 열겠습니다.");
    await setTimeout(() => {
      console.log(`${floorNumber}층에 도착하였습니다.`);
    }, 1000);
    setTimeout(() => {
      console.log("문을 닫습니다.");
    }, 2000);
  }
}

console.log(oddElevator(8));
console.log(evenElevator(3));
