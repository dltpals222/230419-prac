import inquirer from "inquirer";

const array = [
  {
  type:'input',
  name : 'name',
  message : '당신의 이름은 무엇입니까?'
},
{
  type : 'list',
  name:'like food',
  message:'당신이 좋아하는 음식은 무엇입니까?',
  choices:['바나나우유','딸기우유','초코우유','그냥우유'],
},
{
  type:'confirm',
  name : 'confirm',
  message:'확실합니까?'
},
];

function exampleOne(array){
  let suffledArray = [];
  for(let i =0;i< array.length;i++){
    if(i < 2){
      suffledArray.push(array[Math.floor(Math.random()*(array.length-1))])
    } else {
      suffledArray.push(array[i])
    }
  }
  return suffledArray
}

inquirer
  .prompt(exampleOne(array))
.then((answers) => {
  console.log('Answers:',answers)
})
