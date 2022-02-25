{
    class User {
        constructor() { }
    }

    console.log(typeof User); // function
    // User(); // Error: Class constructor User cannot be invoked without 'new'
    // console.log(User)

    let user = new User();
    // console.log(user.__proto__)
}
/*
{
    function Clock({ template }) {

        let timer;

        function render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };

    }

    let clock = new Clock({ template: 'h:m:s' });
    clock.start();
}
*/
{
    class Clock {
        constructor({ template }) {
            this.template = template;
        }

        render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        stop = () => {
            clearInterval(this.timer);
        };

        start = () => {
            this.render();
            this.timertimer = setInterval(() => { this.render() }, 1000);
        };

    }

    let clock = new Clock({ template: 'h:m:s' });
    let descriptorOfstart = Object.getOwnPropertyDescriptor(clock, 'start');
    // console.log(descriptorOfstart)
    // clock.start();

    class ExtendClock extends Clock {
        /*
        constructor({template, precision=1000}){
            super(...arguments);
            this.precision = precision;
        }
        */
        constructor(option) {
            super(option);
            //对象解构赋值，取出option中pricision的值，并且其默认为1000
            let { precision = 1000 } = option;
            this.precision = precision;
        }

        start() {
            this.render();
            this.timertimer = setInterval(() => this.render(), this.precision)
        }
    }

    let ec = new ExtendClock({
        template: 'h:m:s',
        precision: 1000
    })
    // console.log("ec's constructor is" + (ec.constructor === ExtendClock))
    // ec.start()
}

{
    class Rabbit extends Object {
        constructor(name) {
            super();
            this.name = name;
        }
    }

    let rabbit = new Rabbit("Rab");

    // alert(rabbit.hasOwnProperty('name')); // Error
}
{
    class User {
        #name = 'lee'

        sayMyName() {
            console.log(`hi! my name is ${this.#name}`);
        }
    }

    let user = new User();
    user.sayMyName()

    function sayMyName() {

    }

    // console.log(sayMyName.name)

}

{
    class Animal {
        [Symbol.toStringTag] = 'Animal'
    }

    let rabbit = new Animal();
    console.log(rabbit[Symbol.toStringTag]);
    console.log({}.toString.call(rabbit));
    console.log(rabbit)

    let arr = [];
    // console.log(`arr\'s type is ${{}.toString.call(arr)}`)

    // // let user = {
    // //     [Symbol.tostringtag]:
    // // }
    // console.log(`1 \'s type is ${{}.toString.call(1.1)}`)
    // console.log(typeof 1)
}

{
    function A() { }
    function B() { }

    A.prototype = B.prototype = {};

    let a = new A();

    // console.log(a instanceof B); // true

    let b = new B();
    // console.log(b instanceof A);
}

{
    function Animal() { }
    function Rabbit() { }

    Animal.prototype.run = function () {
        console.log(`run`)
    }

    Rabbit.prototype = Animal.prototype;

    let animal = new Animal();
    let rabbit = new Rabbit();

    // console.log(animal instanceof Rabbit);
}
{
    class User {
        fullName = 'lee yang'

        sayMyName() {
            console.log(this.fullName);
        }
    }

    let user = new User();
    // console.log(user.__proto__)
    // console.log(User.fullName)
}

{
    class Animal { }

    class Rabbit extends Animal { }

    let animal = new Animal();
    let rabbit = new Rabbit();

    // console.log(`is animal instanceof Rabbit? ${animal instanceof Rabbit}`)
}
{
    let user = {
        sayMyName() {
            console.log(`my name is ${this.name}`);
        },
        sayMyFirstName() {
            console.log(`my firstName is ${this.firstName}`)
        },
        firstName: 'lee',
        secondName: 'yang',
        get name() {
            return `${this.firstName} ${this.secondName}`
        }
    }

    // console.log(user.sayMyName())
}

{
    let arrFunction = function () {

        console.log(this.fullName)
    }

    let user = {
        fullName: 'leeyang',
        arrFunction
    }


    // user.arrFunction()
}

{
    let eventMixin = {
        on(eventName, handler) {
            let handlerArr = this.handlers?.[eventName];
            if (!handlerArr) {
                this.handlers[eventName] = [handler];
            } else {
                this.handlers[eventName].push(handler);
            }
        },
        off(eventName, handler) {
            let handlerArr = this.handlers?.[eventName];
            if (!handlerArr) return;
            handlerArr.splice(handlerArr.indexOf(handler), 1)
        },
        trigger(eventName, ...args) {
            let handler = this.handlers?.[eventName];
            if (handler) {
                handler.forEach(element => {
                    element.call(this, ...args);
                });
            }
        },
        get handlers() {
            if (!this._handlers) {
                this._handlers = {};
                return this._handlers;
            } else {
                return this._handlers;
            }
        }

    }

    // 创建一个 class
    class Menu {
        choose(value) {
            this.trigger("select", value);
            this.trigger('delete', value)
        }

        delete(value){
            this.trigger('delete', value)
        }
    }
    // 添加带有事件相关方法的 mixin
    Object.assign(Menu.prototype, eventMixin);

    let menu = new Menu();

    // 添加一个事件处理程序（handler），在被选择时被调用：
    menu.on("select", value => console.log(`Value selected: ${value}`));
    menu.on('delete', value => console.log(`delete value ${value}`))
    // 触发事件 => 运行上述的事件处理程序（handler）并显示：
    // 被选中的值：123
    menu.choose("123");
    menu.delete('123')

}