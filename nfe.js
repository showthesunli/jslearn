"use strict"
/**
 * 修改 makeCounter() 代码，使得 counter 可以进行减一和设置值的操作：

counter() 应该返回下一个数字（与之前的逻辑相同）。
counter.set(value) 应该将 count 设置为 value。
counter.decrease() 应该把 count 减 1。
查看沙箱中的代码获取完整使用示例。

P.S. 你可以使用闭包或者函数属性来保持当前的计数，或者两种都写。
 */

function makeCounter() {
    counter.count = 0;

    function counter() {
        return ++counter.count;
    };

    counter.set = function (value) {
        counter.count = value;
        return counter.count;
    }

    counter.decrease = function () {
        return --counter.count;
    }

    return counter;
}

let count = makeCounter();
console.log(count())
console.log(count.set(10))
console.log(count.decrease())

/**
 * 写一个函数 sum，它有这样的功能：

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
 */
function sum(n){
    let current = n;

    let alwaySum = function(add){
        current += add;
        return alwaySum;
    }

    alwaySum.toString = function (){
        return current;
    }

    return alwaySum;
}

console.log(''+sum(1)(2))