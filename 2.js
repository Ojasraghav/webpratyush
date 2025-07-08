const myPromise=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Punal got placement");
    },3000);
})

const data = myPromise
.then((res)=> console.log(res))
.catch((err)=>console.log(err));

console.log(data);


const myPromise1= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("1 is running")


    },3000);

})
const myPromise2= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("2 is running")


    },3000);

})
const myPromise3= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("3 is running")


    },3000);

})
const myPromise4= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("4 is running")


    },3000);

})
const myPromise5= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("5 is running")


    },3000);

})

Promise.all([myPromise1,myPromise2,myPromise3,myPromise4,myPromise5])
   .then(result =>{
    console.log("Are resolved",result);

   })
   .catch(error=>{
    console.log("raise error",error);
   })



/*---------------------------------------------------------*/   
// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4,myPromise5])
//    .then(result =>{
//     console.log("Are resolved",result);

//    })
//    .catch(error=>{
//     console.log("raise error",error);
//    })


/*---------------------------------------------------------*/     
// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4,myPromise5])
//    .then(result =>{
//     console.log("Are resolved",result);

//    })
//    .catch(error=>{
//     console.log("raise error",error);
//    })


/*---------------------------------------------------------*/   
Promise.any([myPromise1,myPromise2,myPromise3,myPromise4,myPromise5])
   .then(result =>{
    console.log("Are resolved",result);

   })
   .catch(error=>{
    console.log("raise error",error);
   })