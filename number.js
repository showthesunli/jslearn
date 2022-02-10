/**
 * number 第一题
 * 

 let firstNumber = +prompt("请输入第一个数字");
 let secondNumber = +prompt("请输入第二个数字");
 
 let sumOfTwoNum = firstNumber + secondNumber;
 
 console.log(`the sum of two number ${sumOfTwoNum}`);
  */

 /**
  * number 第三题，重复输入，知道输入的是一个数字。用isFinite验证值是否为常规数字。
  * @returns 
  */
 function readNumber(){
     let num;
     do{
        num = prompt("请输入一个数字");
     }while(!isFinite(num))

     if (num === '' || num === null){
         return null;
     }
     return num;
 }
//  let num  = readNumber();
//  console.log(`your input is ${num}`);

/**
 * 从 min 到 max 的随机数
重要程度: 2
内建函数 Math.random() 会创建一个在 0 到 1 之间（不包括 1）的随机数。

编写一个 random(min, max) 函数，用以生成一个在 min 到 max 之间的随机浮点数（不包括 max)）。

运行示例：
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
 */
function random(min, max){
    return Math.random()*(max - min) + min;
}
console.log(random(1,5))
console.log(random(1,5))
console.log(random(1,5))