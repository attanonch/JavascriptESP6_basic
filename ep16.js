// array reduce
// const data = [10,20,30,40]

// const mapdata = data.map(e=>100)
// console.log(mapdata)
// const datafilter = data.filter(e=>e>20)
// console.log(datafilter)


//array.reduce((ค่าที่ถูกประมวณผล,e)=>{},ค่าเริ่มต้น) // total = 0
// const sum = data.reduce((value,e)=>{
//     const total = e+value
//     return total
// })
// console.log(sum)
const cart = [
    {name: 'กระเป๋า',price : 500},
    {name: 'กระเป๋า',price : 1500},
    {name: 'กระเป๋า',price : 2500},
]

// const summation = cart.reduce((valude,e)=>{
//     const total =e.price+valude
//     return total
// },0)

const summation = cart.reduce((value,e)=>e.price,0)
console.log(summation)