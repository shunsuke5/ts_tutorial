"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("タプル");
{
    function tuple() {
        return [1, "OK", true];
    }
    const list = tuple();
    console.log(list); // [ 1, 'OK', true ]
    function returnCoordinate() {
        return [1, 2, 3];
    }
    // タプルには可読性のためにラベルを付けることができる、ラベルを用いてアクセスはできないので注意
    const coordinate = returnCoordinate();
    console.log(coordinate);
    // タプルを受けた変数はそのまま中の型が持っているプロパティ、メソッドを使用できる
    console.log(list[0].toExponential());
    console.log(list[1].length);
    console.log(list[2].valueOf());
    list.push(4); // push()をしても増やした要素を使うことはできない
    // console.log(list[3]);   // エラー
    // 分割代入
    const [num, str, bool] = tuple();
    console.log(num, str, bool); // 1 OK true
    // 特定の戻り値だけ必要な場合
    const [, , bool1] = tuple();
    console.log(bool1);
}
