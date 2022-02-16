/**
 * 对数字求和到给定值
重要程度: 5
编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

举个例子：

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
用三种方式实现：

使用循环。
使用递归，对 n > 1 执行 sumTo(n) = n + sumTo(n-1)。
使用 等差数列 求和公式.
结果示例：
 */
function sumTo(n) {
    return n == 1 ? 1 : n + sumTo(n - 1);
}
console.log(sumTo(1000))

/**
 * 计算阶乘
重要程度: 4
自然数的 阶乘 是指，一个数乘以 数字减去 1，然后乘以 数字减去 2，以此类推直到乘以 1。n 的阶乘被记作 n!。

我们可以将阶乘的定义写成这样：

n! = n * (n - 1) * (n - 2) * ...*1
不同 n 的阶乘的值：

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
任务是编写一个函数 factorial(n) 使用递归调用计算 n!。

alert( factorial(5) ); // 120
P.S. 提示：n! 可以被写成 n * (n-1)!，比如 3! = 3*2! = 3*2*1! = 6。
 */

function factorial(n) {
    return n == 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(4))
console.log(factorial(5))

/**
 * 斐波那契数
重要程度: 5
斐波那契数 序列有这样的公式： Fn = Fn-1 + Fn-2。换句话说，下一个数字是前两个数字的和。

前两个数字是 1，然后是 2(1+1)，然后 3(1+2)，5(2+3) 等：1, 1, 2, 3, 5, 8, 13, 21...。

斐波那契数与 黄金比例 以及我们周围的许多自然现象有关。

编写一个函数 fib(n) 返回第 n 个斐波那契数。

工作示例：

function fib(n) { /* 你的代码 */
/*
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. 函数运行速度要快，对 fib(77) 的调用不应该超过几分之一秒。
 */
function fib(n) {
    let [a, b] = [1, 1];
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        [a, b] = [b, c]
    }
    return c;
}
console.log(fib(77))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list){
    /*
    console.log(list.value);
    if(list?.next){
        printList(list.next)
    }
    */
    let curItem = list;
    while(true){
        debugger
        console.log(curItem.value);
        if(curItem.next){
            curItem = curItem.next;
            continue;
        }else{
            break;
        }
    }
}

printList(list)
/**
 * 反向输出前一个任务 输出一个单链表 中的单链表。

使用两种解法：循环和递归。
 */
function printReverseList(list){
    if(list.next){
        printReverseList(list.next);
    }
    console.log(list.value)
}
printReverseList(list)