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
    // console.log(window.foo);    // "ローカル変数のつもり"が表示される
}
console.log("アロー関数");
{
    // 引数が1つだけの場合、引数の()を省略可能
    const increment1 = n => {
        return n + 1;
    }
    // 引数が無い場合は()を省略できない
    const getOne = () => {
        return 1;
    }
    // 関数内のコードが式1つだけの場合は、{}とreturnを省略可能
    const increment2 = n => n + 1;

    // 戻り値がオブジェクトリテラルの場合は、{}を()で囲む必要があるので注意
    const returnObj1 = n => { foo: n + 1 };  // NG
    const returnObj2 = n => ({ foo: n + 1 });   // OK
}
console.log("関数宣言と巻き上げ");
{
    // 関数の巻き上げにより、実行される
    hello();
    function hello() {
        console.log("Hello World");
    }
    // 関数式は巻き上げがないため、エラーが発生する
    // hello1();   // ReferenceError: Cannot access 'hello1' before initialization
    const hello1 = function () {
        console.log("Hello World");
    }
}
console.log("従来の関数とアロー関数の違い");
{
    // JSではnew演算子を使用すれば、関数をコンストラクタとして扱える
    function Cat(name) {
        this.name = name;
    }
    const cat = new Cat("ミケ");
    console.log(cat);   // Cat { name: 'ミケ' }

    // アロー関数はコンストラクタになれない
    const Dog = (name) => {};
    // const dog = new Dog("ポチ");    // TypeError: Dog is not a constructor

    console.log("thisの指すもの");
    {
        function showThis() {
            console.log(this);  // thisがさすのはグローバルオブジェクト = Windowsオブジェクト
        }
        showThis();

        const foo = { name: "Foo" };
        foo.showThis = showThis;
        // メソッド呼び出しの場合、thisが指す値はメソッドが紐づくオブジェクトになる
        foo.showThis(); // { name: 'Foo', showThis: [Function: showThis] }

        // コンストラクタとして呼び出した場合、thisは生成中のオブジェクトを指す
        function a() {
            this.name = "a";
            console.log(this);
        }
        new a();    // { name: 'a' }
    }
}