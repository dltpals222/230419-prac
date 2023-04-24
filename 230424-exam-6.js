let basicData = {
	header : {
		id: "header",
		type: "div",
		children: null,
	},
	main : {
		id: "main",
		type: "div",
		children: null,
	},
	footer : {
		id: "footer",
		type: "div",
		children: null,
	}
}
let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array){
  let value;
  for(let key in object){
      if(object[key].children === null){
        object[key].children = array.join(", ")
        value += `<${object[key].type} ${Object.keys(object[key])[0]} = ${object[key].id}>` + elementData.map(function(element){
          let elementValue="\n";
          elementValue += `<${object[key].type}>${element}</${object[key].type}>`
          return elementValue
        })  + `</${object[key].type}>`
      }
    }
    return value
  }
  
  
  console.log(exampleOne(basicData, elementData))
