// function exampleOne(arr, dataType, itemToFind){
//   if(Array.isArray(arr)=== false){
//     console.log("배열이 아닙니다");
//     return false;
//   }
//   const isDataTypeMatched = (typeof(itemToFind) === dataType);
//   const isItemExist = arr.includes(itemToFind);

  // if(isDataTypeMatched === true && isItemExist === true){
  //   console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
  //   return true;
  // } else if (isItemExist === false){
  //   console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다`);
  //   return false;
  // } else if (isDataTypeMatched === false){
  //   console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다`);
  //   return false;
  // }
// }


// exampleOne(basicData,'string',"어디선가")
// exampleOne(basicData,'string',"어디선")
// exampleOne(123,'string',"어디선가")
// exampleOne(basicData,'number',"어디선가")

const basicData = ['안녕하세요','어디선가','입력된','데이터를','찾아보는','함수입니다.']


function exampleOne (arr, dataType, itemToFind){
  if(Array.isArray(arr) !== true){
    console.log('배열이 아닙니다.');
    return false;
  }
  
  function dataTypeIsItemExist(){
    const isDataTypeMatched = (typeof(itemToFind) === dataType);
    const isItemExist = arr.includes(itemToFind);
    
    if(isDataTypeMatched === true && isItemExist === true){
      console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
      return true;
    } else if (isItemExist === false){
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다`);
      return false;
    } else if (isDataTypeMatched === false){
      console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다`);
      return false;
    }
  }
  return dataTypeIsItemExist
}

const basic = exampleOne(basicData,'string','어디선가')
basic()