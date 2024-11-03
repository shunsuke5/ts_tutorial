"use strict";
/**
 * プリミティブ型
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("name".length); // 4
/**
 * プリミティブ型の種類
 */
/**
 * boolean型
 */
const isOk = true;
const isPanda = false;
// TypeScriptには大文字で始まる Boolean 型もあるが、これとbooleanは別のものなので注意。
/**
 * number型
 */
123
    - 123;
20.315;
0.1 === .1;
5.0 === 5.;
0b1010;
0o755;
0xfff;
// JavaScriptの数値リテラルは可読性のために _ で区切って書くことができる。区切る桁数は自由。
100000000;
5..toString();
(5).toString();
const count = 123; // TypeScriptでの型注釈はnumberを用いる。
/**
 * NaN(Not a Number)
 */
const price = parseInt("百円");
console.log(price); // NaN
// if(Number.isNaN(price)) {
//     console.log("数値化できません");
// }
// console.log(NaN === NaN);   // 常にfalse
// 1を0で割った場合、Infinity(無限大)となる。
/**
 * 小数計算の誤差
 */
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.5 + 0.25 === 0.75); // true
// 一度整数に桁上げして計算することで誤差を無くす方法
console.log(110 * 1.1); // 121.00000000000001
console.log((110 * 11) / 10 === 121); // true
// ただし、桁を戻した数値が小数になることがあるため注意
const price1 = (101 * 11) / 10; // 111.1
const price2 = (103 * 11) / 10; // 113.3
console.log(price1 + price2); // 224.39999999999998
/**
 * string型
 */
{
    "Hello";
    'Hello';
    `Hello`;
    console.log(`実際に改行を
    してみる`);
    const count = 10;
    console.log(`現在、${count}名が観ています。`);
    console.log(`税込み${Math.floor(100 * 1.1)}円`);
    const message = "Hello";
    "hello" + "world";
}
/**
 * null型
 */
{
    const x = null;
    const x2 = null;
    console.log(typeof null);
}
/**
 * undefined型
 */
{
    let name;
    console.log(name); // undefined
    function func() { } // 戻り値が無い関数
    console.log(func()); // undefined(func()の戻り値)
    const obj = {};
    // console.log(obj.name);
    // const arr = [];
    // console.log(arr[1]);
    const x = undefined;
}
/**
 * undefinedとnullの違い
 */
console.log("undefinedとnullの違い");
{
    let value;
    console.log(value);
    console.log(typeof undefined); // undefined
    console.log(typeof null); // object
    console.log(JSON.stringify({ foo: undefined })); // {}
    console.log(JSON.stringify({ foo: null })); // {"foo":null}
}
console.log("symbol型");
{
    const s1 = Symbol("foo");
    const s2 = Symbol("foo");
    console.log(s1 === s1); // true
    console.log(s1 === s2); // false
    console.log(JSON.stringify(Symbol("many"))); // undefined
    console.log(// {"y":"hello"}
    JSON.stringify({
        x: Symbol("many"), // symbol型をプロパティに含むキーは消滅する
        y: "hello",
    }));
    console.log(// {"y":"hello"}
    JSON.stringify({
        [Symbol("many")]: "hello", // symbol型をキーに含むキーは消滅する
        y: "hello",
    }));
}
console.log("bigint型(長整数型)");
{
    const x = 100n;
    const x2 = 100n;
    const x3 = BigInt(100);
    const y = BigInt("9007199254740991");
    console.log(x);
    console.log(x2);
    console.log(x3);
    console.log(y);
    // 2n + 3; // エラー
    const i = 2n + BigInt(3);
    console.log(i);
    // console.log(JSON.stringify(12n));   // biging型を直接JSON.stringify()に渡すとエラー
    console.log(JSON.stringify({ x: 12n })); // bigint型を含むオブジェクトを渡してもエラー
}
