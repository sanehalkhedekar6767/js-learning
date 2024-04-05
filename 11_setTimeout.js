let show = function(){
    console.log(`function expression....`);
}
setTimeout( show, 3000);

//or
// setTimeout( function(){
//     console.log(`function expression....`);
// }, 3000);


//This scenario is called callback hell
setTimeout(function(){
    console.log(`Hello`);
    setTimeout(function (){
        console.log(`Good Morning`);
        setTimeout(function(){
            console.log(`How are you?`);
        },3000)
    }, 2000);
},1000);