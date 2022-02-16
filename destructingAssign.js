/**
 * 我们有一个对象：

let user = {
  name: "John",
  years: 30
};
写一个解构赋值语句使得：

name 属性赋值给变量 name。
years 属性赋值给变量 age。
isAdmin 属性赋值给变量 isAdmin（如果属性缺失则取默认值 false）。

let user = {
    name: "John",
    years: 30
};
let { name, years, isAdmin = false } = user;
console.log(name, years, isAdmin)
 */

/**
 * 这儿有一个 salaries 对象：

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
新建一个函数 topSalary(salaries)，返回收入最高的人的姓名。

如果 salaries 是空的，函数应该返回 null。
如果有多个收入最高的人，返回其中任意一个即可。
P.S. 使用 Object.entries 和解构语法来遍历键/值对。
 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    return Object.entries(salaries).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(topSalary(salaries))

salaries = [100, 300, 250];
function allSalary([John, Pete, Mary]){
  console.log(John)
  console.log(Pete)
  console.log(Mary)
}

allSalary(salaries);