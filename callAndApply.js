'use strict'
/**
 * 创建一个装饰器 spy(func)，它应该返回一个包装器，该包装器将所有对函数的调用保存在其 calls 属性中。

每个调用都保存为一个参数数组。
 */
{
    function spy(func) {

        function warper() {
            warper.calls.push(Array.from(arguments))
            return func(...arguments);
        }

        warper.calls = []
        return warper;
    }

    function work(a, b) {
        return (a + b); // work 是一个任意的函数或方法
    }

    work = spy(work);

    work(1, 2); // 3
    work(4, 5); // 9

    for (let args of work.calls) {
        console.log('call:' + args.join()); // "call:1,2", "call:4,5"
    }
}

/**
 * 创建一个装饰器 delay(f, ms)，该装饰器将 f 的每次调用延时 ms 毫秒。
 */
let user = {
    private: 'lee',
    sayHi() {
        console.log(this.private)
    }
}
function delay(f, ms) {
    function warper() {
        setTimeout(f, ms, this, ...arguments)

    }
    return warper
}

/*
let f1000 = delay(alert, 1000);
f1000('123')
*/
{
    function debounce(f, ms) {
        let delay;

        return function () {
            if (delay) {
                clearTimeout(delay);
            }
            delay = setTimeout(() => f.apply(this, arguments), ms);
        }
    }
    /*
        let f = debounce(alert, 1000);
    
        f("a");
        setTimeout(() => f("b"), 200);
        setTimeout(() => f("c"), 500);
    
        */
}

{
    /**
     * 节流装饰器
     * @param {} f 
     * @param {*} ms 
     */
    function throttle(f, ms) {
        let flag = true;
        let interval = setInterval(() => flag = true, ms);
        // let interval = setInterval(() => console.log(`flag is ${flag}`), ms);

        return function () {
            console.log(`flag is ${flag}`)
            if (flag) {
                f.apply(this, arguments);
                flag = false;
            }
        }
    }

    function f(a) {
        console.log(a);
    }

    // f1000 最多每 1000ms 将调用传递给 f 一次
    let f1000 = throttle(f, 100);

    let n = 0;
    while(true){
        f1000(n)
        n++
        if(n > 10000) break;
    }
    
}