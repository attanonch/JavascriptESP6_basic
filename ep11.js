// splice & slice
//  splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,option แทรกข้อมูลเข้าไป)
//  slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดทา้ย-1) ดึงออกมาใช้งาน

const data = [10,20,999,30,40];
//data.splice(2,2,25);
const selectdata = data.slice(1,2,);

console.log(selectdata);