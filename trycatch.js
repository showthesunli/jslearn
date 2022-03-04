{
    class MyError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
            console.log(this.name)
        }
    }

    class LeeError extends MyError {

    }

    let err = new LeeError('test my err');
}

{
    /**
     * 创建一个继承自内建类 SyntaxError 的类 FormatError。

     *   它应该支持 message，name 和 stack 属性。
     */
    class FormatError extends SyntaxError {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
        }
    }

    let err = new FormatError("formatting error");

    console.log(err.message); // formatting error
    console.log(err.name); // FormatError
    console.log(err.stack); // stack

    console.log(err instanceof FormatError); // true
    console.log(err instanceof SyntaxError); // true（因为它继承自 SyntaxError）
}