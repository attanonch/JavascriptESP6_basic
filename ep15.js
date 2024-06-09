// Arrey filter

// const data = [10,20,30,70]
// const result = data.filter(e=>{
//     return e>20
// })

// console.log(result)

const data = [
    {ชือ : "นนท์", department :"โปรแกรมมเมอร์",salary : 20100},
    {ชือ : "นนท์2", department :"โปรแกรมมเมอร์",salary : 10000},
    {ชือ : "นนท์3", department :"โปรแกรมมเมอร์",salary : 25100},
    {ชือ : "นนท์4", department :"ประธาน",salary : 200000},
]
// const result = data.filter(e=>{
//     return e.salary>25000}
//     )
const result = data.filter(e=>e.salary>25000).filter(e=>e.department==='โปรแกรมมเมอร์')
// console.log(result)
