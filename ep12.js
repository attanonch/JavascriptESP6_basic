// การ loop Array 
// for loop, forEach,Forof

const data = [10,20,30,40,50]

// for(let i = 0;i<data.length;i++){
//     console.log(data[i]);
// }

// -------------------------------------------------
// for(let i = 0;i<data.length;i++){
//     if(data[i]>=30)break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`);
// }
// -------------------------------------------------
// ---------------------------------------------------
// let sum = 0;
// data.forEach(e =>{
//     // break และ continue 
//     // สามารถใส่ if ได้
//     sum+=e
//     // console.log(e)
//     console.log(`ลำดับที่${e} = ${e}`)
// })
// --------------------------------------------------

for(const e of data){
    if(e >= 30){
        break
    }
    console.log(`สมาชิกของ array data ${e} = `);
}