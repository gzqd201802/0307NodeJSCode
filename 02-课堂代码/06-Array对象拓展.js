


// Array.form() - 回顾
// 作用：把伪数组对象转换成真正的数组对象。

// const obj = {
//     0: '尼古拉·赵四',
//     1: '安东尼·王五',
//     length: 2
// };
// // 把伪数组格式对象转换成真正的数组。
// //   好处：可以调用数组的方法。
// const arr = Array.from(obj);
// console.log(arr);


// 平常使用的数组，其实都是 Array 的实例
const arr = [
    {
        name: '口红',
        price: 199,
        isCheck: true
    },
    {
        name: '口红2',
        price: 299,
        isCheck: true
    },
    {
        name: '洗面奶',
        price: 50,
        isCheck: true
    },
    {
        name: '键盘',
        price: 100,
        isCheck: false
    }
];

// find 作用：找出<第一个>符合条件的数组成员，如果没有找到返回 undefined
const obj = arr.find((item) => {
    return item.name === '榴莲';
});


// findIndex 作用：找出<第一个>符合条件的数组成员的索引位置，如果没有找到返回 -1
const index = arr.findIndex((item) => {
    return item.name === '榴莲';
});

// 结果输出：
// console.log(obj);    // { name: '口红', price: 199, isCheck: true }
// console.log(index);  // 0




// includes 作用：检测数组中是否包含某个指定的值，返回值为布尔类型。

// const r1 = [11, 22, 33].includes(11);
// const r2 = [11, 22, 33].includes(44);
// console.log(r1);        // true
// console.log(r2);        // false


// 以前的 indexOf 方法通过检查数据在数组索引位置，再通过判断条件检验数据是否存在。
const r3 = [11, 22, 33].indexOf(11);
const r4 = [11, 22, 33].indexOf(44);
console.log(r3);    // 0    不等于 -1 ，代表数据存在
console.log(r4);    // -1   等于  -1  ，代表数据不存在

