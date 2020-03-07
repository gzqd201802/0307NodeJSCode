

// 解构赋值

// 数组解构赋值：按照数组的<顺序>解构获取数据，把数据赋值给变量或常量。
const arr = ['张飞', '关羽', '刘备'];

const [a1, a2, a3, a4] = arr;

console.log(a1);    // 张飞
console.log(a2);    // 关羽
console.log(a3);    // 刘备
console.log(a4);    // undefined


// 对象解构赋值：按照对象<键名称>提取数据，对变量(常量)进行赋值。
const obj = {
    aa: 11,
    bb: 22,
    cc: 33
};

const { aa , bb , cc } = obj;

console.log(aa);    // 11
console.log(bb);    // 22
console.log(cc);    // 33