// using fetch
fetch('https://randomuser.me/api/')
.then((respone) => {
    let data = respone.json();
    return data;
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

//using aync awit
async function getUser() {
    let response = await fetch('https://randomuser.me/api/');
    let data = await  response.json();
    console.log(data);
}
getUser();

//Usign promise
const promiseOne = new Promise((resolve , reject) => {
fetch('https://randomuser.me/api/')
.then((response) => {
    let data = response.json();
    return data;
})
.then((data) => {
    if(data.results[0].gender == 'male') {
        resolve(data.results[0]);
    } else {
        reject("Gender Not Matched"); // impllicit reject even  after promise is fullfilled on bases of fetched data 
    }
})
.catch((error) => {
    reject(error);// here promise will be rejected only if there network or server side error
})
});
promiseOne.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

// promise : it's a promise for code execution . either code gets executed or fails in both the cases user will be notified.

// Stages Of Promise :
// 1) Pending : initial stage of the promise (when it is working).
// 2) settled : it either gets fulfilled or get rejected.
// if fulfilled then .then() return resolved value or else .catch runs with error.