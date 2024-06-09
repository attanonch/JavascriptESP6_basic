// join = arr->
const data = [100,200,300]
console.log(data)

const result = data.join(" "); //ข้อมูลไม่มีการเปลี่ยนแปลง เอาตัวไหนมาตั้ง 

console.log(result);
console.log(typeof(result));

// concat arr มาต่อกัน 
const data1 = [1,2,3,4];
const data2 = [5,6];
const alldata = data2.concat(data1);
console.log(alldata);