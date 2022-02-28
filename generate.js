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

    console.log(generator.next().value); // 16807
    console.log(generator.next().value); // 282475249
    console.log(generator.next().value); // 1622650073
    
}