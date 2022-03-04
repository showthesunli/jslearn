{
    function* gen() {
        // 向外部代码传递一个问题并等待答案
        let result = yield "2 + 2 = ?"; // (*)

        console.log(result);
    }

    let generator = gen();

    let question = generator.next().value; // <-- yield 返回的 value
    console.log(question)

    generator.next(4); // --> 将结果传递到 generator 中
}

{
    try {
        throw new Error('随便抛出的异常!')
    } catch (error) {
        console.log(error)
    }
    console.log('处理完成异常之后调用！')
}

{
    function* pseudoRandom(seed) {
        while (true) {
            seed = seed * 16807 % 2147483647;
            yield seed;
        }
    }

    let generator = pseudoRandom(1);

    // console.log(generator.next().value); // 16807
    // console.log(generator.next().value); // 282475249
    // console.log(generator.next().value); // 1622650073

}

{
    let range = {
        from: 1,
        to: 5,

        [Symbol.asyncIterator]() { // (1)
            return {
                current: this.from,
                last: this.to,

                next() { // (2)

                    // 注意：我们可以在 async next 内部使用 "await"
                    // await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
                    let res = new Promise(resolve => setTimeout(resolve, 1000)); // (3)
                    let response = res.then(() => {
                        if (this.current <= this.last) {
                            return { done: false, value: this.current++ };
                        } else {
                            return { done: true };
                        }
                    })

                    return response;


                    /*

                    if (this.current <= this.last) {
                        return { done: false, value: this.current++ };
                    } else {
                        return { done: true };
                    }
                    */
                }
            };
        }
    };

    (async () => {

        for await (let value of range) { // (4)
            console.log(value); // 1,2,3,4,5
        }

    })()
}

{
    async function* fetchCommits(repo) {
        let url = `https://api.github.com/repos/${repo}/commits`;

        while (url) {
            const response = await fetch(url, { // (1)
                headers: { 'User-Agent': 'Our script' }, // github 需要任意的 user-agent header
            });

            const body = await response.json(); // (2) 响应的是 JSON（array of commits）

            // (3) 前往下一页的 URL 在 header 中，提取它
            let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
            nextPage = nextPage?.[1];

            url = nextPage;

            for (let commit of body) { // (4) 一个接一个地 yield commit，直到最后一页
                yield commit;
            }
        }
    }


    (async () => {

        let count = 0;

        for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {

            console.log(commit.author.login);

            if (++count == 100) { // 让我们在获取了 100 个 commit 时停止
                break;
            }
        }

    })();

}