var john = {
    name : 'I am john',
    age : 24,
    isActive : true,
}

var marry ={
    name : 'I am marry',
    age :23,
    isActive : true
}

var sam ={
    name : 'I am sam',
    age :29,
    isActive : false
}

let users = new Map()
users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

// console.log(users.size);

// console.log(users.values());

// for (const value of users.values()) {
//     console.log(value.name);
    
// }

for (const [key, value] of users.entries()) {
    //console.log(key +' = ' +value.name +' '+value.age);
    // console.log(`${key} : Name : ${value.name} , Age : ${value.age}`);
    
    
}

// users.forEach((value, key)=>{
//     return console.log(`${key} : Name : ${value.name} , Age : ${value.age}`);
// })

var arrofArr = [['one','1'],['two','2'],['three','3']]

var newMap = new Map(arrofArr)
console.log(newMap);