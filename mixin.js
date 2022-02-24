{
    // mixin
    let sayHiMixin = {
        sayHi() {
            alert(`Hello ${this.fullname.firstName}`);
        },
        sayBye() {
            alert(`Bye ${this.name}`);
        },
        fullname: {
            firstName: 'li',
            secondName: 'yang'
        },
    };

    // 用法：
    class User {
        constructor(name) {
            this.name = name;
        }
    }

    // 拷贝方法
    Object.assign(User.prototype, sayHiMixin);
    sayHiMixin.fullname.firstName = 'i am changed'

    // 现在 User 可以打招呼了
    // new User("Dude").sayHi(); // Hello Dude!
}

{
    class User{
        #fullName = 'leeyang'

        sayMyName(name){
            console.log(this[name])
        }
    }

    let user = new User();
    user.sayMyName('#fullName')
}