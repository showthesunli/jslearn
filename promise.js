'ues strict'
{
    /**
     * 内建函数 setTimeout 使用了回调函数。请创建一个基于 promise 的替代方案。

     * 函数 delay(ms) 应该返回一个 promise。这个 promise 应该在 ms 毫秒后被 resolve，所以我们可以向其中添加 .then，像这样：
     */

    function delay(ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, ms);
        })
    }
    delay(10000).then(() => console.log('runs after 3 seconds'));
}

{
    /**
     * 重写任务 任务 "task/animate-circle-callback" 未找到 的解决方案中的 showCircle 函数，以使其返回一个 promise，而不接受回调。

     * 新的用法：
     */

}

{
    // let promise = Promise.reject(new Error("Promise Failed!"));
    // setTimeout(() => promise.catch(err => alert('caught')), 1000);
    // Error: Promise Failed!
    // window.addEventListener('unhandledrejection', event => alert(event.reason));

    // promise.catch(err => alert('caught'))


}
/**
 * function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
 */
{
    (
        async () => {
            async function loadJson(url) {
                let res = await fetch(url);
                if (res.status == 200) {
                    let json = await res.json();
                    return json;
                }
                throw new Error(res.status);
            }

            // loadJson('no-such-user.json')
            // .catch(console.log); // Error: 404

        }
    )()
}

{
    (
        async () => {
            class HttpError extends Error {
                constructor(response) {
                    super(`${response.status} for ${response.url}`)
                    this.name = this.constructor.name;
                    this.response = response;
                }
            }

            async function loadJson(url) {
                let res = await fetch(url);
                if (res.status == 200) {
                    let json = await res.json();
                    return json;
                }
                throw new HttpError(res);
            }

            async function demoGithubUser() {
                let res;
                while (true) {
                    let name = prompt('Enter a name?', 'iliakan');
                    try {
                        res = await loadJson(`https://api.github.com/users/${name}`)
                        console.log(res)
                        break;
                    } catch (error) {
                        if (error instanceof HttpError) {
                            console.log(`No such user, please reenter!`)
                        } else {
                            throw error;
                        }
                    }
                }
                return res;
            }

            // await demoGithubUser();
        }
    )()
}

{
    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return 10;
    }

    function f() {
        // ……这里你应该怎么写？
        // 我们需要调用 async wait() 并等待以拿到结果 10
        // 记住，我们不能使用 "await"
        wait().then((res) => console.log(res))
    }

    // f();
}

{
    (
        async () => {
            let queue = [1, 2, 3];
            let resovleFn;
            async function put(message) {
                if (queue.length >= 3) {

                    await new Promise((resolve, reject) => {
                        console.log('数组长度大于3')
                        resovleFn = resolve
                    })
                    console.log('继续执行')
                }
                queue.push(message)
            }

            await put(4);
            console.log('完成，调用回调')
            resovleFn();
        }
    )()
}

{
    (
        async () => {
            let reso;
            new Promise((resolve, reject) => (reso = resolve)).then(() =>
                console.log("success")
            );

            reso();
        }
    )()

}

{
    (async () => {
        let queue = [];
        let resolveOfPuts = [];
        let resolveOfGets = [];

        function setPromiseDone(arrOfPromise){
            if (arrOfPromise.length != 0){
                arrOfPromise.shift()()
            }
        }

        async function put(message) {
            while (queue.length >= 3) {
                await new Promise(resolve => resolveOfPuts.push(resolve))
            }
            queue.push(message)
            setPromiseDone(resolveOfGets)
        }

        async function get() {
            while (queue.length == 0) {
                await new Promise(resolve => resolveOfGets.push(resolve))
            }
            let res = queue.shift();
            setPromiseDone(resolveOfPuts)
            return res
        }

        put(1)
        put(2)
        put(3)
        put(4)
        debugger
        get().then(alert)
        console.log(queue)
        debugger

    })()

}
