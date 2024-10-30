"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * varの変数宣言
 */
var name1 = "taro";
var name2;
/**
 * varの問題点
 */
/**
 * 同名の変数宣言
 */
function test() {
    var x = 1;
    var x = 2; // 同じ変数名で宣言をしてもエラーにならない
    console.log(x); // 2
}
test();
// let x = 1;
// let x = 2;          // letでは同名の変数宣言はエラー
// const y = 1;
// const y = 2;        // constも同じ
/**
 * グローバル変数の上書き
 */
// var innerWidth = 10;
// console.log(window.innerWidth);
// 見本ではここで10と表示されるらしいのだが、バージョンアップして変更されたのかちゃんとエラーが出る
// const innerWidth = 10;
// console.log(window.innerWidth);
// こちらも「Cannot redeclare block-scoped variable 'innerWidth'」のエラーが出る。
// 「'innerWidth' was also declared here.」とも出るため、やはり組み込みオブジェクトのプロパティが変更できないようになった？
/**
 * 変数の巻き上げ
 */
console.log(greeting);
var greeting = "こんにちは";
// 上のコードは巻き上げの影響で、実際は以下のように実行される
// var greeting;
// console.log(greeting);   // undefined が表示される
// greeting = "こんにちは";
// console.log(xx);    // エラー
let xx = 1;
// console.log(yy);    // エラー
const yy = 2;
// しかし、letとconstも変数の巻き上げは発生している。
// それなのにReference Errorが発生する理由は、
// letとconstは巻き上げが発生しても、変数が評価されるまで変数が初期化されないため。
// だから、初期化されていない変数を参照するためにReference Errorが発生しているのである。
// それに対しvarは、変数の巻き上げが発生したタイミングで変数を初期化しているため、値の参照が可能となっている。
function output() {
    var x = 1;
    {
        // console.log(x);
        let x = 2; // エラー
    }
}
output();
/**
 * スコープ
 */
function print() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2
}
print();
// varで宣言された変数のスコープは「関数」
function print2() {
    const x = 1;
    if (true) {
        const x = 2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
print2();
// let,constのスコープはブロックスコープであるため、
// 上記の例では異なる変数として別々に定義されている。
