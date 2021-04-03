// // // const sayHello = function(name){
// // //     return "Hello there, " +name+ " !"
// // // }

// // // console.log(sayHello('Naitik'));

// // //Arrow function

// // const sayHello = (name) => `Hey there , ${name} !`

// // console.log(sayHello('Naitik'));


// // const todos =[{
// //     title :'Buy Bread',
// //     isDone:true,
// // },{
// //     title: 'Go to Gym',
// //     isDone : true,
// // },{
// //     title : 'continue js',
// //     isDone : false,
// // }]

// // const thingsDone = todos.filter((todo) =>todo.isDone === true)

// // console.log(thingsDone);

// // Assignments

// const asTodos =[{
//     title :'Buy Bread',
//     isDone:true,
// },{
//     title: 'Go to Gym',
//     isDone : true,
// },{
//     title : 'continue js',
//     isDone : false,
// },{
//     title : 'Mern',
//     isDone : false,
// },{
//     title :'Android',
//     isDone : true,
// },{
//     title : 'Reactjs',
//     isDone : false,
// }]

// const remainingsTodo = asTodos.filter((todo) => {
//     if(todo.isDone == false)
//         console.log(todo.title);
// })

const camera = {
    price : 600,
    weight : 2000,
    myDes : function() {
        return `This canon camera is of ${this.price}$`
    }
}

console.log(camera.myDes());
