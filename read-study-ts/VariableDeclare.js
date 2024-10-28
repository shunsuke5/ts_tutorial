"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * let の変数宣言
 */
let x = 1;
x = 2; // 再代入可能
let y; // 初期値なしで宣言可能
y = 1;
/**
 * const の変数宣言
 */
const X = 2; // 再代入不可
X = 1; // エラー
const obj = { a: 1 };
obj = { a: 2 }; // オブジェクト自体の再代入は不可
obj.a = 2; // プロパティの変更はできる
const array = [1, 2];
array = [3, 4]; // 配列自体の再代入は不可
array.push(3); // 要素の変更はできる
