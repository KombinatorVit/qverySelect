 // filter 


// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart' ];

// const shortNames = names.filter((name) => {
// return name.length<5;
// });

// console.log(shortNames)


//map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// const result  = answers.map(item => item.toLowerCase() );
// console.log(result);  


// every/some 

// const some = [4, 'qwq', 'dsfsvg'];

// // console.log(some.some(item => typeof(item) === 'number' ));
// console.log(some.every(item => typeof(item) === 'number' ));


//reduce  


// const arr = [4, 5, 1, 3, 2, 6];
// const result = arr.reduce((sum, current) => sum + current);

// const arr = ['dsd', 'dsd', 'dsdsd'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone');
console.log(newArr);