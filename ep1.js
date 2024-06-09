// Block scope
// ไม่ใช้ var เนื่องจากทะลุ block ทะลุปีกกา ใช้ let const
// const = ค่าคงที่ let = เปลี่ยนค่าได้
const x = 10;
// if(x == 10){
//     x = 20;
//     console.log("x in if = "+x);
// }
console.log("x out if = "+ x);
const family = ["พ่อ",'แม่','นนท์','ณัฐ'];  //array
const profile= {
    name: 'non',
    lastname :"chu",
    age : 20,
    pas(a){
        return console.log(a+20)
    }       

}; //object

profile.pas(20)
