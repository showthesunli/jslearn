let styles = ['Jazz', 'Blues'];
console.log(styles)

styles.push('Rock-n-Roll');
console.log(styles)

styles[Math.floor(styles.length/2)] = 'Classics'
console.log(styles)

console.log(styles.shift())
console.log(styles)

styles.unshift('Rap', 'Reggae');
console.log(styles)

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // ?

/**
 * 写出函数 sumInput()，要求如下：

使用 prompt 向用户索要值，并存在数组中。
当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
计算并返回数组所有项之和。
P.S. 0 是有效的数字，不要因为是 0 就停止问询。
 */

function sumInput(){
    let numArr = [];
    while(true){
        let tmp = prompt("请输入数字");
        if (tmp === null || tmp === "" || !isFinite(tmp)){
            break;
        }
        numArr.push(+tmp)
    }
    console.log(numArr)
    let sum = numArr.reduce((pre,cur,_curIdx,curArr)=>{
        return pre + cur;
    }, 0)
    return sum;
}
// console.log(sumInput());

function getMaxSubSum(arr){
    let dp_maxsum = new Array(arr.length).fill(0);
    dp_maxsum[arr.length - 1] = arr[arr.length-1]; 
    for (let i = arr.length-2;i>=0;i--){
        dp_maxsum[i] = Math.max(arr[i], arr[i]+dp_maxsum[i+1])
    }
    dp_maxsum.sort((cur, net)=>{
        return net - cur;
    })
    return dp_maxsum[0];
}

getMaxSubSum([-1, 2, 3, -9]) == 5
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6