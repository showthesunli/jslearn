"use strict"
{
    /**
     * pockets → bed → table → head
     */
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head,
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table,
    };

    let pockets = {
        money: 2000,
        __proto__: bed,
    };
}
{
    let hamster = {
        get stomach() {
            if (this._stomach === undefined) {
                this._stomach = [];
            }
            return this._stomach;
        },
        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster
    };

    let lazy = {
        __proto__: hamster
    };

    // 这只仓鼠找到了食物
    speedy.eat("apple");
    console.log(speedy.stomach); // apple

    console.log(`stomach is _stomach and type is ${Array.isArray(speedy.stomach) ? 'array' : 'not array'}`)
    // 这只仓鼠也找到了食物，为什么？请修复它。
    console.log(lazy.stomach); // apple
}

{
    function Rabbit() {
        this.name = 'lee'
    }
    // by default:
    // Rabbit.prototype = { constructor: Rabbit }
    console.log(Rabbit.prototype)
    console.log(Rabbit.prototype.constructor == Rabbit); // true

    let rabbit = new Rabbit();
    console.log(rabbit.__proto__)
    console.log(rabbit.constructor)
}

{
    let rabbit = {
        val: 'lee'
    }

    console.log(rabbit.__proto__)
}
{
    /**
     * 继承的是prototype所指向的对象，prototype修改了之后，原对象不会改变，所以 rabbit.eats 没有变
     */
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype = {}; //修改的是prototype的引用，原对象没有改变，所以rabbit.eats仍然为true

    console.log(rabbit.eats); // true
}

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype.eats = false; //prototype的引用没有修改，修改的是prototype所指向的对象。

    console.log(rabbit.eats); // false 
}

{
    function Rabbit() { };
    Rabbit.prototype.name = 'lee';

    let rabbit = new Rabbit();
    let rabbit1 = new Rabbit();

    console.log(`rabbit has name ${rabbit.name}`);
    console.log(`rabbit1 has name ${rabbit1.name}`)

    Rabbit.prototype.name = 'yang'

    console.log(`rabbit has name ${rabbit.name}`);
    console.log(`rabbit1 has name ${rabbit1.name}`)

}

{
    function Rabbit() { }
    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    delete Rabbit.prototype.eats; //修改了 rabbit继承的原对象

    alert(rabbit.eats); // undefined
}

{
    /**
     * 想象一下，我们有一个由构造函数创建的对象 obj —— 我们不知道使用的是哪个构造函数，但是我们想使用它创建一个新对象。

    我们可以这样做吗？

    let obj2 = new obj.constructor();
    请给出一个可以使这样的代码正常工作的 obj 的构造函数的例子。再给出会导致这样的代码无法正确工作的例子。
     */
}