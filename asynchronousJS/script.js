// tasks
// 1. clean the kitchen - 4
// 2. take the trash - 2
// 3. sit back and relax - 3


// Callbacks

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("cleaned the kitchen");
    callback();
  }, 4000);
}
function takeouttrash(callback) {
  setTimeout(() => {
    console.log("took out the trash");
    callback();
  }, 2000);
}
function sitbackandrelax(callback) {
  setTimeout(() => {
    console.log("relaxing");
    callback();
  }, 3000);
}

cleanKitchen(() => {
  takeouttrash(() => {
    sitbackandrelax(() => {
      console.log("all tasks done!");
    });
  });
});
