/**
 * 将 border-left-width 转换成 borderLeftWidth
重要程度: 5
编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。

即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。

示例：

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
提示：使用 split 将字符串拆分成数组，对其进行转换之后再 join 回来。
 */

function camelize(str) {
    let strArr = str.split("-");
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }

    return strArr.join('');
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

/**
 * 写一个函数 filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大于或等于 a，且小于或等于 b 的元素，并将结果以数组的形式返回。

该函数不应该修改原数组。它应该返回新的数组。
 */
function filterRange(arr, a, b) {
    return arr.filter(curVal => curVal >= a && curVal <= b ? true : false);
}

/*
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
*/

/**
 * 写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

该函数应该只修改数组。它不应该返回任何东西。

例如：

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

alert( arr ); // [3, 1]
 */
function fileterRangeInPlace(arr, a, b) {
    arr.forEach(element => {
        if (element < a || element > b) {
            let idx = arr.indexOf(element);
            arr.splice(idx, 1);
        }
    });
}
/*
let arr = [5, 3, 8, 1];
fileterRangeInPlace(arr, 1, 4);
console.log(arr)


/**
 * 我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。

创建一个函数 copySorted(arr) 返回这样一个副本。

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
 */
function copySorted(arr) {
    return arr.slice().sort();
}

function Calculator() {
    this.calculate = function (str) {
        let [arg1, op, arg2] = str.split(' ');
        return this.method[op](+arg1, +arg2);
    }

    this.method = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.addMethod = function (op, fn) {
        this.method[op] = fn;
    }
}
/*
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);


console.log( powerCalc.calculate("2 + 3") ); // 5
console.log( powerCalc.calculate("2 - 3") ); // -1
console.log( powerCalc.calculate("2 * 3") ); // 6
console.log( powerCalc.calculate("4 / 2") ); // 2
console.log( powerCalc.calculate("2 ** 3") ); // 8
*/

/**
 * 映射到 names
重要程度: 5
你有一个 user 对象数组，每个对象都有 user.name。编写将其转换为 names 数组的代码。

例如：

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = // ... your code 

alert( names ); // John, Pete, Mary
*/
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(curVal => curVal.name)
console.log(names)
*/

/**
 * 你有一个 user 对象数组，每个对象都有 name，surname 和 id。

编写代码以该数组为基础，创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成。

例如：

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
/*
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
 */

/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((item)=>{
    return {
        fullName: item.name + item.surname,
        id: item.id,
    }
})
console.log(usersMapped);
*/

/**
 * 按年龄对用户排序
重要程度: 5
编写函数 sortByAge(users) 获得对象数组的 age 属性，并根据 age 对这些对象数组进行排序。

例如：

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
 */

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

/**
 * 编写函数 shuffle(array) 来随机排列数组的元素。

多次运行 shuffle 可能导致元素顺序的不同。例如：

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
所有元素顺序应该具有相等的概率。例如，可以将 [1,2,3] 重新排序为 [1,2,3] 或 [1,3,2] 或 [3,1,2] 等，每种情况的概率相等。
 */

/**
 * 编写 getAverageAge(users) 函数，该函数获取一个具有 age 属性的对象数组，并返回平均年龄。

平均值的计算公式是 (age1 + age2 + ... + ageN) / N。

例如：

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 */

/*
function getAverageAge(users){
    let sumAge = users.reduce((pre,cur) => pre + cur.age, 0)
    return sumAge/users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

/**
 * arr 是一个数组。

创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。

例如：

function unique(arr) {
  /* your code */
// }
/*
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
 */
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) == -1) {
            continue;
        } else {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
/*
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
*/
/**
 * 假设我们收到了一个用户数组，形式为：{id:..., name:..., age... }。

创建一个函数 groupById(arr) 从该数组创建对象，以 id 为键（key），数组项为值。
 */
function groupById(arr) {
    /*
    let obj = {};
    arr.map(curVal => obj[curVal.id] = curVal)
    return obj;
    */

    return arr.reduce((pre, cur) => {
        pre[cur.id] = cur;
        return pre;
    }, {});
}


let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById)