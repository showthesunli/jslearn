/**
 * 定义 arr 为一个数组。

创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。

 */
function unique(arr){
  return Array.from(new Set(arr));
}
/*
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

/**
 * 重要程度: 4
Anagrams 是具有相同数量相同字母但是顺序不同的单词。

例如：

nap - pan
ear - are - era
cheaters - hectares - teachers
写一个函数 aclean(arr)，它返回被清除了字谜（anagrams）的数组。

例如：

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
对于所有的字谜（anagram）组，都应该保留其中一个词，但保留的具体是哪一个并不重要。

1.将所有数组内的字符串元素小写，转换成数组，排序，重新再转换为字符串。
2.将上述内容作为key存入map，value为原数组元素。
3.将map的value输出为数组。

 */

function aclean(arr){

  let lowerStrKeyMap = arr.reduce((perMap, curVal) =>{
    let key = curVal.toLowerCase().split('').sort().join();
    perMap.set(key, curVal);
    return perMap;
  }, new Map())
  
  return Array.from(lowerStrKeyMap.values());
}
/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
*/

/**
 * map and set , task-迭代键
 */
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());


keys.push("more");
console.log(keys)