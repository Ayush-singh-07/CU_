// console.log("hey")


// const express= require('express')
// const app = express()

// app.get('/', (req,res) => {
//     res.send("This is ayush's Node Server ")
// })
// app.listen(3000);



// let readline = require('readline-sync')
// // let a=Number(readline.question());
// // let b=Number(readline.question());
// // let c=0;
// // c=a+b;
// // console.log("ans "+c);


// let ar=[];

// for(let i=0; i<5; i++){
//     x=Number(readline.question("enter a number"))
//     ar[i]=x;
// }
// let sum=0;
// for(let i=0; i<5; i++){
//     sum=sum+ar[i];
// }
// console.log("sum of array "+sum);



let fs= require("fs")
var filedata = fs.readFile('myfile.txt',(error,data) =>{
    console.log(data.toString())
})
