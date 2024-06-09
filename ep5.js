// spread Operator ... เอาสมาชิกมาเก็บใน data ด้วย
const data = [100,200,300]
const alldata = [10,20,...data]



const newdata = [7,14,21]
alldata.push(...newdata)
console.log(alldata)
console.log(alldata.length)