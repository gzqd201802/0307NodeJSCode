


// ... 运算符
//    功能1： 剩余参数 ( rest 参数) - 数组格式，能调用数组方法。
//    功能2： 展开运算符

// 功能1：剩余参数
// const fn = (...args) => {
//     console.log(args);
// };
// fn(1, 2, 3, 4, 5);



// 功能2： 展开运算符  - 展开数组
// 给数组  后追加，前追加，数组合并。

let arr = [11, 22, 33];
let arr2 = [88, 99];


arr = [...arr, 44];         // 把自己展开，后追加数据 44
arr = [55, ...arr];         // 把自己展开，前追加数据 55
arr = [ ...arr, ...arr2 ];  // 两个数组展开后进行合并

// arr.push(44);
// arr.unshift(55);
// arr = [].concat(arr, arr2);

// console.log(arr);



// 功能2： 展开运算符 - 展开对象
const obj1 = {
    aa: 11,
    bb: 22,
    cc: 33,
}

const obj2 = {
    ...obj1,
    bb: 66
}

console.log(obj2);


