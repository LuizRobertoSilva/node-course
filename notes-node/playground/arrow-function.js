var square = x => x*x

console.log(square(8));

var user = {
    name: 'Luiz',
    sayHi: () => {
        console.log(arguments[0]);
        console.log(`Hi. I'm `, user.name)
    },
    sayHiAlt () {
        console.log(arguments);
        console.log('Hi. I am ', user.name)
    }
};
user.sayHi(1,2,3);

