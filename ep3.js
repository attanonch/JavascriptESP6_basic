// ทำงาน obj
// ตัวแปรเก็บข้อมูล
const customer = {
    //parameter
    cusname : "attanon",
    cuslname : "chupool",
    age : 22,
    //method ใช้ this ในการเรียก parameter
    showData(){
        console.log(this.cusname)
    }
}


// console.log(customer.cusname);
// console.log(customer);
customer.showData()
