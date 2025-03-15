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
user();
user1('Mohammed Aslam');
sumoftwo(1,2);
