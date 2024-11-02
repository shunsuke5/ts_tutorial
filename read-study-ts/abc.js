console.log("for-in文ではhasOwnPropertyを使おう");
{
    const foo = { a: 1 };
    const date = new Date();
    const arr = [1, 2, 3];
    console.log(Object.getPrototypeOf(foo) === Object.prototype);   // true

    // console.log(foo.hi, date,hi, arr.hi);   // エラー
    Object.prototype.hi = "Hi!";    // プロトタイプにプロパティ追加
    console.log(foo.hi, date,hi, arr.hi);   //  hiプロパティを持つようになる
}
{
    // プロトタイプが変更されると、意図しないところでfor-inループ回数が変わってしまう
    const foo = {a: 1, b: 2, c: 3 };
    Object.prototype.hi = "Hi!";
    for(const prop in foo) {
        console.log(prop, foo[prop]);
    }

    // hasOwnPropertyでチェックする
    for(const prop in foo) {
        if(Object.prototype.hasOwnProperty.call(foo, prop)) {
            console.log(prop, foo[prop]);
        }
    }
}
console.log("\n配列要素へのアクセス");
{
    const abc = ["a", "b", "c"];
    console.log(abc[100]);
}
console.log("\n配列の分割代入");
{
    const oneToFive = [1, 2];
    const [one, two, three] = oneToFive;
    console.log(one, two, three);
}