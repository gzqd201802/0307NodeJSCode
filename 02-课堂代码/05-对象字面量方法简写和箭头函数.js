
const obj = {
    name: '小明',
    sayHi() {
        console.log('对象的name的值是', this.name);
    }
};

// 等价于以下代码：
// const obj = {
//     name: '小明',
//     sayHi: function () {
//         console.log('对象的name的值是', this.name);
//     }
// };

// 通过 obj 对象调用自己身上的 sayHi 方法 
obj.sayHi();         // 小明




// const obj2 = {
//     name: '小明',
//     // 对象字面量方法不要使用箭头函数，因为箭头函数没有 this
//     sayHi: () => {
//         console.log('对象的name的值是', this.name);
//     }
// };

// obj2.sayHi();     // undefined 

// !!!总结：
//      1. sayHi(){ }      保留自己的 this
//      2. sayHi:()=>{ }   没有自己的 this
// 经验总结：对象字面量方法不使用箭头函数，因为箭头函数没有 this 。



