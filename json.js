/**
 * 将对象转换为 JSON，然后再转换回来
重要程度: 5
将 user 转换为 JSON，然后将其转换回到另一个变量。
 */
let user = {
  name: "John Smith",
  age: 35
};
let userJson = JSON.stringify(user);
console.log(userJson);

let fromUserJson = JSON.parse(userJson)
console.log(fromUserJson)