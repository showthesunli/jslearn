function ucFirst(str){
    if (!str){
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * 写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。

函数必须不区分大小写：

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */

function checkSpam(str){
    if(!str){
        return false;
    }
    lowerCaseStr = str.toLowerCase();
    checKey1 = 'viagra'.toLowerCase();
    checKey2 = 'XXX'.toLowerCase()
    if(lowerCaseStr.includes(checKey1) || lowerCaseStr.includes(checKey2) ){
        return true;
    }else{
        return false;
    }

}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))


function truncate(str, maxlength){
    strLen = str.length;
    if (strLen > maxlength){
        return str.slice(0, maxlength-1) + '…';
    }
}
let temp_str = truncate('123123', 3);
console.log(`tmp_str : ${temp_str} , temp_str length is ${temp_str.length}`)