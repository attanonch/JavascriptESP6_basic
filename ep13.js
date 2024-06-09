// ค้นหาข้อมูลภายใน array
// indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1 
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefinde
// findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// 
const colors = ["แดง","เขียว","เหลือง","ส้ม",'ขาว',"ม่วง"];
// const index = colors.indexOf('');
// const search  = colors.find(e=>e==="ขาว");

const search  = colors.findIndex(e=>e==="ขาว");
console.log(search);
// console.log(index);


