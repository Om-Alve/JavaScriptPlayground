// tasks
// 1. clean the kitchen - 4
// 2. take the trash - 2
// 3. sit back and relax - 3


// Callbacks

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("cleaned the kitchen");
//     callback();
//   }, 4000);
// }
// function takeouttrash(callback) {
//   setTimeout(() => {
//     console.log("took out the trash");
//     callback();
//   }, 2000);
// }
// function sitbackandrelax(callback) {
//   setTimeout(() => {
//     console.log("relaxing");
//     callback();
//   }, 3000);
// }

// cleanKitchen(() => {
//   takeouttrash(() => {
//     sitbackandrelax(() => {
//       console.log("all tasks done!");
//     });
//   });
// });




// Promises

// function cleanKitchen(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('Cleaned the kitchen'),4000);
//     })
// }

// function takeouttrash(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve('Took out the trash');
//         }, 2000);
//     }
//     )
// }

// function sitbackandrelax(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>resolve('Sitting back and Relaxing'),2000);
//     }
//     )
// }

// cleanKitchen().then(value => {console.log(value); return takeouttrash()})
//             .then(value => {console.log(value); return sitbackandrelax()})
//             .then(value => {console.log(value);return console.log('All Tasks Done!')});



// Async Await


function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Cleaned the kitchen'),4000);
    })
}

function takeouttrash(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('Took out the trash');
        }, 2000);
    }
    )
}

function sitbackandrelax(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>resolve('Sitting back and Relaxing'),2000);
    }
    )
}

async function doTasks(){
    const cleanKitchenRes = await cleanKitchen();
    console.log(cleanKitchenRes);
    const takeouttrashRes = await takeouttrash();
    console.log(takeouttrashRes);
    const sitbackandrelaxRes = await sitbackandrelax();
    console.log(sitbackandrelaxRes);
    console.log('All tasks done!');
}

doTasks();