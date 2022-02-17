/**
 * 编写一个像 sum(a)(b) = a+b 这样工作的 sum 函数。

是的，就是这种通过双括号的方式（并不是错误）。
 */

function sum(n) {
    return function (m) {
        return n + m;
    }
}
console.log(sum(1)(2))

/**
 * 我们有一个内建的数组方法 arr.filter(f)。它通过函数 f 过滤元素。如果它返回 true，那么该元素会被返回到结果数组中。

制造一系列“即用型”过滤器：

inBetween(a, b) —— 在 a 和 b 之间或与它们相等（包括）。
inArray([...]) —— 包含在给定的数组中。
用法如下所示：

arr.filter(inBetween(3,6)) —— 只挑选范围在 3 到 6 的值。
arr.filter(inArray([1,2,3])) —— 只挑选与 [1,2,3] 中的元素匹配的元素。
 */
function inBetween(a, b) {
    return function (curItem) {
        return (a <= curItem && b >= curItem) ? true : false;
    }
}

function inArray(arr) {
    return function (curItem) {
        return arr.includes(curItem) ? true : false;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2


function byField(field) {

    return (a, b) => a[field] < b[field] ? -1 : 1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log(users)
users.sort(byField('age'));
console.log(users)

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        function addShooters(i) {
            let shooter = function () { // 创建一个 shooter 函数，
                console.log(i); // 应该显示其编号
            };
            shooters.push(shooter)
        }

        addShooters(i); // 将此 shooter 函数添加到数组中
        i++;
    }

    // ……返回 shooters 数组
    return shooters;
}

let army = makeArmy();

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[2](); // 10，其他的也是这样。