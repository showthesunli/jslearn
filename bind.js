"use strict"


{
    function f() {
        console.log(this.name);
    }

    f = f.bind({ name: "John" })
    let f1 = f.bind({ name: "Pete" });

    f(); // John
    f1();
}



{
    function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }

    let user = {
        name: 'John',

        loginOk() {
            alert(`${this.name} logged in`);
        },

        loginFail() {
            alert(`${this.name} failed to log in`);
        },

    };



    // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
    // askPassword(()=>user.loginOk(), ()=>user.loginFail())
}
{
    /*
    偏函数在登录中的应用
重要程度: 5
这个任务是比 修复丢失了 "this" 的函数 略微复杂的变体。

user 对象被修改了。现在不是两个函数 loginOk/loginFail，现在只有一个函数 user.login(true/false)。

在下面的代码中，我们应该向 askPassword 传入什么参数，以使得 user.login(true) 结果是 ok，user.login(fasle) 结果是 fail？
*/
    function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }

    let user = {
        name: 'John',

        login(result) {
            alert(this.name + (result ? ' logged in' : ' failed to log in'));
        }
    };

    // let ok = user.login.bind(user, true);
    // let fail = user.login.bind(user, false);

    function partial(f, ...args){
        return function(...argus){
            return f.call(this, ...args, ...argus);
        }
    }

    

    // askPassword(ok, fail); // ?
    // askPassword(()=> user.login(true), ()=>user.log(false));
    askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

}