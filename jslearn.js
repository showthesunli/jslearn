function camelize(str) {
    return str
        .split('-')
        .map((item, idx) => {
            return idx == 0 ? item : item[0].toUpperCase() + item.slice(1)
        })
        .join('');
}
console.log(camelize("background-color"))

function filterRange(arr, a, b) {
    return arr.filter((item) => {
        return item >= a && item <= b ? true : false;
    })
}



function filterRangeInPlace(arr, a, b) {
    arr.forEach((element, idx) => {
        if (element < a || element > b) {
            arr.splice(idx, 1);
        }
    });
}

function copySorted(arr) {
    let copiedArr = arr.slice();

    return copiedArr.sort();
}

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    return a - b;
});

function Calculator() {
    this.method = {
        "+": (a, b) => { return a + b },
        "-": (a, b) => { return a - b },
    }

    this.calculate = function (str) {
        let expArr = str.split(' ');
        expArr.reduce((accumulator, currItem, idx, currArr) => {
            if (currItem in this.method) {
                return currItem;
            }
            if (accumulator in this.method) {
                currArr[idx] = this.method[accumulator](+currArr[idx - 2], +currItem)
            }

        })
        return expArr.pop()
    }

    this.addMethod = function (name, func) {
        this.method[name] = func;
    }
}

/**
 * 有一个 user 对象数组，每个对象都有 user.name。编写将其转换为 names 数组的代码。

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };


let users = [ john, pete, mary ];

let names = users.map((item, idx, currArr) => {
    return item.name;
})
console.log(names)
 */

/**
 * 你有一个 user 对象数组，每个对象都有 name，surname 和 id。

 * 编写代码以该数组为基础，创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成。


 let john = { name: "John", surname: "Smith", id: 1 };
 let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };
 
 let users = [ john, pete, mary ];

 function covertoFullNameKeyObj(userObj){
     return {
         fullNmae : `${userObj.name} ${userObj.surname}`,
         id : userObj.id,
     }
 }
 
 let usersMapped = users.map((item, idx, currArr) => {
     return covertoFullNameKeyObj(item);
 })

 console.log(usersMapped)
 */

/**
 * 编写函数 sortByAge(users) 获得对象数组的 age 属性，并根据 age 对这些对象数组进行排序。

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
 
let arr = [ pete, john, mary ];
 
function sortByAge(arr){
   arr.sort((a, b) => {
       return a.age - b.age;
   })
}
sortByAge(arr)
console.log(arr)
 */

/**
 * 编写 getAverageAge(users) 函数，该函数获取一个具有 age 属性的对象数组，并返回平均年龄。

 * 平均值的计算公式是 (age1 + age2 + ... + ageN) / N。

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr){
    let ageSum = arr.reduce((pre, currItem, idx, currArr) => {
        return pre + currItem.age;
    }, 0)
    return ageSum / arr.length;
}
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 */

/**
 * arr 是一个数组。

    创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。

function unique(arr) {
    //实现有误，元素组被修改后，继续迭代会导致索引混乱，寻址出错
    arr.map((currItem, idx, currArr) => {
        if(currArr.includes(currItem, idx+1)){
            currArr.splice(idx,1);
        }
    })
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(strings)
console.log(strings); // Hare, Krishna, :-O

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
    let res = arr.reduce((preRes, currItem, idx, currArr) => {
        preRes[currItem.id] = currItem;
        return preRes
    }, {})
    return res;
}
let usersById = groupById(users);
console.log(usersById)
 */