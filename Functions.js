let user = () => console.log('It is time to rise up, insha Allah, to control with the permission of Allah');
var user1 = function(uid){
    console.log('Start up ' + uid);
}
var sumoftwo = (a, b) => {
    console.log(a + ' + ' + b + ' = ' + (a + b));
}
//settimeout is inbuild function of javascript
setTimeout(
    function(){
        console.log('Alhamdulillah')
    }, 5000
)
//setInterval
setInterval(
    function(){
        console.log('Alhamdulillah')
    }, 5000
)
let promise =new Promise((resolve, reject) => {
    let v1 = 1, v2 = 1;
    if(v1+v2 == 2){
        resolve("Success")
    }else{
        reject("Failed")
    }
})


user();
user1('Mohammed Aslam');
sumoftwo(1,2);
promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})
console.log(__dirname)
console.log(__filename)
//modules are of three types
/* 1. Core Modules
    2. Local Modules
     3. Third Party Modules */
var uid = "Nodejs"
module.exports.x=uid