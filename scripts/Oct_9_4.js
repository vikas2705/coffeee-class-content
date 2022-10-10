/*
Promises

Async / Await



USed for asynchronous progg
*/

const p1 = new Promise((resolve, reject) => {
    // run our async action
    /*if the async action is true, we call resolve 
  otherwise we call reject */
    setTimeout(() => {
        // async action. difficult to predict when will it run
        console.log("timeout running");
        resolve();
    }, 2000);
});

p1.then(() => {
    console.log("this is successful"); //resolve callback fn
}).catch(() => {
    console.log("this is failed"); //reject callback fn
});
