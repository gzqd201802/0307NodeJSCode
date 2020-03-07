

// 目标1：Object.assign()
// 作用：对象合并
// 语法：第一个参数是目标对象，后面的参数都是源对象。
// 注意事项:
//     如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。


const obj1 = {
    aa: 11,
    bb: 22
};

const obj2 = {
    cc: 33,
    dd: 44,
    aa: 88,
};

const obj3 = {
    ee: 55,
    ff: 66,
    aa: 99,
};

// 功能：把后面的对象合并到第一对象中，第一个对象的数据会发生变化。
// 注意事项： 如果出现同名属性，后面对象的属性值会覆盖掉前面的。

// 把 obj2 和 obj3 的属性合并到 obj1 中。
Object.assign(obj1, obj2, obj3);

// 输出合并后的对象：
// console.log(obj1);  // { aa: 99, bb: 22, cc: 33, dd: 44, ee: 55, ff: 66 }


// 目标2：Object.keys()
// 作用：获取对象自身的键，返回值为数组格式。
const obj = {
    name: '尼古拉·徐某人',
    age: 18,
    sex: '男'
};

const r1 = Object.keys(obj);
console.log('对象所有的键 keys', r1);        // [ 'name', 'age', 'sex' ]

// Object.keys() 返回对象的键名称，遍历数组格式的键名称，就可以获取到对象的值。
// Object.keys(obj).forEach((key) => {
//     console.log(key, obj[key]);
// });

// 目标3：Object.values()
// 作用：获取对象自身的值，返回值为数组格式。
const r2 = Object.values(obj);
console.log('对象所有的值 values', r2);


