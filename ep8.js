// Default Parameter
getdata = (name,addressdata="กรุงเทพมหานคร")=>{
    // if(!addressdata){
    //     addressdata = "กรุงเทพ"
    // }
    const address = `ชื่อลูกค้า : ${name}
    ที่อยู่ : ${addressdata}`
    return address
}
console.log(getdata("attanon","กรุงเทพ"));
console.log(getdata("chupool"));
