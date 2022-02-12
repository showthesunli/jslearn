/**
 * 将 border-left-width 转换成 borderLeftWidth
重要程度: 5
编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。

即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。

示例：

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
提示：使用 split 将字符串拆分成数组，对其进行转换之后再 join 回来。
 */

function camelize(str){
    let strArr = str.split("-");
    for(let i=1;i < strArr.length;i++){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    
    return strArr.join('');
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))