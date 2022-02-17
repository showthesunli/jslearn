/**
 * 创建一个 Date 对象，日期是：Feb 20, 2012, 3:12am。时区是当地时区。

使用 alert 显示结果。
 */
let date = new Date('2012-02-20T03:12');
console.log(date)
date = new Date(2012,01,20,3,12)
console.log(date)

/**
 * 编写一个函数 getWeekDay(date) 以短格式来显示一个日期的星期数：‘MO’，‘TU’，‘WE’，‘TH’，‘FR’，‘SA’，‘SU’。

例如：

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // 应该输出 "TU"
 */

function getWeekDay(date){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
console.log(getWeekDay(date));

/**
 * 写一个函数 getDateAgo(date, days)，返回特定日期 date 往前 days 天是哪个月的哪一天。

例如，假设今天是 20 号，那么 getDateAgo(new Date(), 1) 的结果应该是 19 号，getDateAgo(new Date(), 2) 的结果应该是 18 号。

跨月、年也应该是正确输出：

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
 */
function getDateAgo(date, days){
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy;
}
console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

/**
 * 写一个函数 getLastDayOfMonth(year, month) 返回 month 月的最后一天。有时候是 30，有时是 31，甚至在二月的时候会是 28/29。

参数：

year —— 四位数的年份，比如 2012。
month —— 月份，从 0 到 11。
举个例子，getLastDayOfMonth(2012, 1) = 29（闰年，二月）
 */
function getLastDayOfMonth(year, month){
    let date = new Date(year, month+1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

/**
 * 写一个函数 getSecondsToday()，返回今天已经过去了多少秒？

例如：如果现在是 10:00 am，并且没有夏令时转换，那么：

getSecondsToday() == 36000 // (3600 * 10)
该函数应该在任意一天都能正确运行。那意味着，它不应具有“今天”的硬编码值。
 */
function getSecondsToday(){
    let nowDate = new Date();
    nowDate.setHours(0);
    nowDate.setMinutes(0);
    nowDate.setSeconds(0);
    nowDate.setMilliseconds(0);
    return Math.round((Date.now() - nowDate)/1000);
}

console.log(getSecondsToday())

/**
 * 写一个函数 getSecondsToTomorrow()，返回距离明天的秒数。

例如，现在是 23:00，那么：

getSecondsToTomorrow() == 3600
 */
function getSecondsToTomorrow(){
    let nowDate = new Date();
    let tomorrow = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate() + 1);
    return Math.round((tomorrow - nowDate)/1000);
}

console.log(getSecondsToTomorrow())

/**
 * 写一个函数 formatDate(date)，能够对 date 进行如下格式化：

如果 date 距离现在不到 1 秒，输出 "right now"。
否则，如果 date 距离现在不到 1 分钟，输出 "n sec. ago"。
否则，如果不到 1 小时，输出 "m min. ago"。
否则，以 "DD.MM.YY HH:mm" 格式输出完整日期。即："day.month.year hours:minutes"，全部以两位数格式表示，例如：31.12.16 10:00。
举个例子：

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// 昨天的日期，例如 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
 */

function formatDate(date){
    let now = new Date();
    let toNow = now - date;

    return toNow < 1000 ? 'right now' : toNow < 60 * 1000 ? `${toNow/1000} sec. ago` : toNow < 60 * 60 * 1000 ? `${toNow/(60 * 1000)} min. ago` : `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getSeconds()}` 
}
console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"