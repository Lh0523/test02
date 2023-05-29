const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1
const day = today.getDate()
let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五','星期六']

console.log(`今天的日期是：${year}年${month}月${day}日 ${arr[today.getDay()]}`)

let week = today.getDay()
let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五','星期六']
console.log(weekArr[week])
