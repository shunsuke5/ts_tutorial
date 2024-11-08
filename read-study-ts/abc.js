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
console.log("\n等価であるということ");
{
    console.log(0 === 0n);      // false
    console.log(0 == 0n);       // true
    console.log(0 === false);   // false
    console.log(0 == false);    // true
    console.log(0 === "0");     // false
    console.log(0 == "0");      // true
    console.log(0 === "");      // false
    console.log(0 == "");       // true

    // NaNはどの値と比較してもfalse
    console.log(NaN === NaN);   // false
    console.log(NaN == NaN);   // false

    console.log({} == {});  // false
    // console.log({} === {}); // false
    console.log({ age: 18 } == { age: 18 });    // false
    const obj = { hair: "blond" };
    console.log(obj === obj);   // true
}
console.log("変数のスコープ");
{
    // 意図しないグローバル変数への代入
    function func() {
        foo = "ローカル変数のつもり";
    }
    func();
    console.log(window.foo);    // "ローカル変数のつもり"が表示される
}