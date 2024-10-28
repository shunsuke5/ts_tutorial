/**
 * 変数宣言の型推論
 */
let x = 1;      // let x: number = 1; と同じ意味になる
x = "hello";    // エラー

/**
 * 型推論と動的型付けの違い
 */

/**
 * 型推論の場合
 */
let y = 1;      // yはnumber型と決定される
y = "hello";    // エラー
console.log(y.substring(1,3));  // エラー

/**
 * 動的型付けの場合
 */
// let x = 1;   // xはnumber型となる
// x = "hello"; // xはstring型となる
// console.log(x.substring(1,3));   // el