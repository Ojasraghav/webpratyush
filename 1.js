// console.log("Script starts")

// var a=200;
// console.log(a);

// function abc(){
//     console.log("This is fumction abc");
//     function def(){
//         console.log("This is def");
//         function ghi(){
//             console.log("This is function ghi");
//         }
//         ghi();
//     }
//     def();

// }
// abc();


// function sumoftwo(a,b){
//     return a+b;
// }
// function suboftwo(a,b){
//     return a-b;
// }
// function calculate(logic,a,b){
//     return logic(a,b);
// }

// var answereofsubstraction= calculate(suboftwo,10,4)
// console.log(answereofsubstraction);
function checkname(p1){
    console.log("Personal Id")
    setTimeout(p1,3000);



}
function orderplace(op){
    console.log("Place order from menu")
    setTimeout(op,5000);

}
function orderserving(os){
    console.log("serving order")
    setTimeout(os,10000);

}
function eatingfood(ef){
    console.log("yummm tastyyy")
    setTimeout(ef,15000);

}
function billpay(bp){
    console.log("vo actually paise khatam ho gye")
    setTimeout(bp,2000);

}
function saufeating(se){
    console.log("Sauf check karo")
    setTimeout(se,2000);

}
function exitplace(){
    
    setTimeout(()=>{
        console.log("SEE YAA!!")
    },3000);

}
checkname(()=>{
    orderplace(()=>{
        orderserving(()=>{
            eatingfood(()=>{
                saufeating(()=>{
                    billpay(()=>{
                        exitplace();
                    })
                })
            })
        })
    })
})
var cart =["shoes","watches"]
function orderPlace(cart){

}
function orderGEnrate(){

}
function addressDetails(){

}
function paymengateway(){
    
}