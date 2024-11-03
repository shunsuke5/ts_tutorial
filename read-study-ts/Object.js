"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("プリミティブ以外はすべてオブジェクト");
{
    const value1 = 123;
    const value2 = 123;
    console.log(value1 === value2); // true
    const object1 = { value: 123 };
    const object2 = { value: 123 };
    console.log(object1 === object2); // false
}
console.log("\nオブジェクトリテラル");
{
    const object = {};
    const person = { name: "Bob", age: 25 };
    const person1 = new Object();
    person.name = "Bob";
    person.age = 25;
}
console.log("\nオブジェクトのプロパティ");
{
    const product = {
        name: "ミネラルウォーター",
        price: 100,
        getTaxIncludePrice: function () {
            return Math.floor(this.price * 1.1);
        },
        shomikigen: new Date("2022-01-20"),
    };
    const object = {
        printHello1: function () {
            console.log("Hello1");
        },
        printHello2() {
            console.log("Hello2"); // 短い構文を用いたメソッド定義
        },
    };
    const calculator = {
        sum(a, b) {
            return a + b;
        },
    };
    console.log(calculator.sum(1, 1)); // 2
    // calculator.sum = null;  // エラー
}
console.log("\nオブジェクトの型注釈");
{
    let box;
    box = { width: 1080, height: 720 };
    console.log(box);
    // box = { width: "1080", height: 720 };   // エラー
    // box = { width: 1080 };  // エラー
    let box1;
    box1 = { width: 1080, height: 720 };
    console.log(box1);
    let box2 = { width: 1080, height: 720 };
    console.log(box2);
}
console.log("\nメソッドの型注釈");
{
    let calculator;
    calculator = {
        sum(x, y) {
            return x + y;
        },
    };
    console.log(calculator.sum(1, 2));
    let calculator1;
    calculator1 = {
        minus(x, y) {
            return x - y;
        },
    };
    console.log(calculator1.minus(2, 1));
}
console.log("\nオブジェクトの型推論");
{
    let box = { width: 1080, height: 720 }; // 型注釈を省略
    console.log(box);
    console.log(typeof box.width); // number
    let calculator = {
        sum(x, y) {
            return x + y;
        },
    };
    console.log(calculator.sum(1, 10));
}
console.log("\nRecord<Keys, Type>");
{
    let foo;
    foo = { a: 1, b: 2 };
    console.log(foo);
}
console.log("\nオブジェクトの型のreadonlyプロパティ");
{
    let obj;
    obj = { foo: 1 };
    // obj.foo = 2;    // エラー
    let obj1;
    obj1 = {
        foo: {
            bar: 1,
        },
    };
    // obj1.foo = { bar: 2 };  // エラー
    obj1.foo.bar = 2; // readonlyの中のオブジェクトはreadonlyにならないため、OK
    console.log(obj1.foo.bar);
    let obj2;
    let obj3;
}
console.log("\nreadonlyとconstの違い");
{
    const x = 1;
    // x = 2;   // エラー
    const x1 = { y: 1 };
    x1.y = 2; // プロパティへの代入はOK
    let obj = { x: 1 };
    // obj.x = 2;  // エラー
    obj = { x: 2 }; // 変数自体への代入はOK
    const obj1 = { x: 1 };
    // obj1 = { x: 2 };    // エラー
    // obj1.x = 2;         // エラー
}
console.log("\nオブジェクトの型のオプションプロパティ");
{
    const size = {}; // OK
    const size1 = {
        width: undefined, // OK
    };
    console.log(size + "\t" + size1);
    const size2 = {
    // width: null,    // エラー
    };
}
console.log("\n余剰プロパティチェック");
{
    let onlyX;
    onlyX = { x: 1 }; // OK
    // onlyX = { x:1, y:2 };   // コンパイルエラー
    const xy = { x: 1, y: 2 };
    onlyX = xy; // 変数代入にはチェックが働かないのでOK
    console.log(onlyX);
}
console.log("\nインデックス型");
{
    let obj;
    obj = { a: 1, b: 2 }; // OK
    obj.c = 4; // OK
    obj["d"] = 5; // OK
    console.log(obj);
    const e = obj.e;
    console.log(e); // undefined
    let obj1;
    let obj2;
}
console.log("\nプロトタイプベース");
{
    const button = {
        name: "ボタン",
    };
    const dangerousButton = Object.create(button);
    dangerousButton.name = "絶対に押すなよ？";
    console.log(dangerousButton.name);
    const counter = {
        count: 0,
        countUp() {
            this.count++;
        },
    };
    const resettableCounter = Object.create(counter);
    resettableCounter.reset = function () {
        this.count = 0;
    };
    resettableCounter.countUp();
    console.log(resettableCounter.count); // 1
    resettableCounter.reset();
    console.log(resettableCounter.count); // 0
    // ES2015からはクラスのような書き方もできる
    class Counter {
        constructor() {
            this.count = 0;
        }
        countUp() {
            this.count++;
        }
    }
    let counter1 = new Counter();
    console.log(counter1.count);
    counter1.countUp();
    console.log(counter1.count);
}
console.log("\nobject,Object,{}の違い");
{
    let obj;
    let a = {}; // OK
    let b = {}; // OK
    let c = {}; // OK
    console.log(a + "\t" + b + "\t" + c);
    console.log("object型");
    {
        let a;
        a = { x: 1 }; // OK
        a = [1, 2, 3]; // OK
        a = /a-z/; // OK
        // a = 1;          // エラー
        // a = true;       // エラー
        // a = "string";   // エラー
    }
    console.log("Object型");
    {
        let a;
        Object;
        a = {};
        // ボックス化可能なプリミティブ型はOK
        a = 1;
        a = true;
        a = "string";
        // nullとundefinedはNG(ts2.0からは代入できる？)
        a = null;
        a = undefined;
    }
    console.log("{}型");
    {
        let a;
        a = {};
        // ボックス化可能なプリミティブ型OK
        a = 1;
        a = true;
        a = "string";
        // nullとundefinedはNG
        // a = null;
        // a = undefined;
    }
}
console.log("\nオブジェクトの分割代入");
{
    const item = { price: 100 };
    const price1 = item.price;
    const { price } = item;
    console.log(price1 + "\t" + price);
    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    // 取り出すプロパティ数が多い場合に便利
    const color = { R: 0, G: 122, B: 204, A: 1 };
    const { R, G, B, A } = color;
    console.log(color);
    console.log(R + " " + G + " " + B + " " + A);
    // コロンの後に変数名を指定すると、その名前の変数に代入できる
    const { R: red, G: green, B: blue, A: alpha } = color;
    console.log(green);
    const continent = {
        name: "北アメリカ",
        us: {
            name: "アメリカ合衆国",
            capitalCity: "ワシントンD.C",
        },
    };
    const { us: { name, capitalCity }, } = continent;
    console.log(name);
    console.log(capitalCity);
    console.log("分割代入のデフォルト値");
    {
        const color = { r: undefined, g: 122, b: 204 };
        const { r = 0, g = 0, b = 0 } = color;
        console.log(r, g, b); // 0 122 204
        const color1 = { r: null };
        const { r: r1 = 0 } = color;
        console.log(r1); // 0
    }
    console.log("デフォルト値と変数名の指定");
    {
        const color = { r: undefined, g: 122, b: 204 };
        const { r: red = 0 } = color;
        console.log(red);
    }
}
console.log("\nShorthand property names");
{
    const name = "pikachu";
    const no = 25;
    const genre = "mouse pokemon";
    const height = 0.4;
    const weight = 6.0;
    const pikachu = {
        name,
        no,
        genre,
        height,
        weight,
    };
}
console.log("\nオプショナルチェーン");
{
    const book = undefined;
    // const title = book.title;   // エラー
    // const author = null;
    // const email = author.email; // エラー
    // const title1 = book?.title; // そもそもオプショナルチェーン以前にtitleなんてプロパティ無いよとエラーになる
    // console.log(title1);
    // オプショナルチェーンはJavaScriptの機能で、
    // TypeScriptはそれ以前にnever型はプロパティ持てないと教えてくれているだけだった
}
console.log("\nオブジェクトをループする方法");
{
    console.log("for-in文");
    {
        const foo = { a: 1, b: 2, c: 3 };
        for (const prop in foo) {
            console.log(prop, foo[prop]); // a 1,b 2,c 3
        }
    }
    console.log("Object.entries");
    {
        const foo = { a: 1, b: 2, c: 3 };
        for (const [key, value] of Object.entries(foo)) { // オブジェクトを配列に変換する
            console.log(key, value); // a 1,b 2,c 3
        }
    }
    console.log("Object.keys");
    {
        const foo = { a: 1, b: 2, c: 3 };
        for (const key of Object.keys(foo)) { // キーだけ反復処理したい場合に便利
            console.log(key); // a,b,c
        }
    }
    console.log("Object.values");
    {
        const foo = { a: 1, b: 2, c: 3 };
        for (const value of Object.values(foo)) { // プロパティの値だけを反復処理する場合に便利
            console.log(value); // 1,2,3
        }
    }
}
