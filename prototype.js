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
    function Rabbit() { }
    // by default:
    // Rabbit.prototype = { constructor: Rabbit }
    console.log(Rabbit.prototype)

    console.log(Rabbit.prototype.constructor == Rabbit); // true
}