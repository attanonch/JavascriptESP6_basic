//destruturing การสลายโครงสร้าง
//Arr
// const colors =["เขียว","แดง","เหลือง"];
// const a = colors[0];
// const b = colors[1];
 
// const[green,red,yellw] = colors;
// console.log(a + b );
// console.log(green + red);

const product = {
    productname : "computer",
    price : 20000,
    stock : 50
}

//const {productname:productname,price:price,stock:stock} = product;
const {productname,price,stock} = product;
console.log(productname);
console.log(price);
console.log(stock);

