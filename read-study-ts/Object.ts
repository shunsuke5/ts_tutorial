console.log("プリミティブ以外はすべてオブジェクト");
{
    const value1 = 123;
    const value2 = 123;
    console.log(value1 === value2);     // true

    const object1 = { value: 123 };
    const object2 = { value: 123 };
    console.log(object1 === object2);   // false
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
        printHello1: function () {  // キーと値に分けて各メソッド定義
            console.log("Hello1");
        },
        printHello2() {
            console.log("Hello2");  // 短い構文を用いたメソッド定義
        },
    };

    const calculator = {
        sum(a: number, b: number) {
            return a + b;
        },
    };

    console.log(calculator.sum(1, 1));  // 2
    // calculator.sum = null;  // エラー
}

console.log("\nオブジェクトの型注釈");
{
    let box: { width: number; height: number };
    box = { width: 1080, height: 720 };
    console.log(box);

    // box = { width: "1080", height: 720 };   // エラー
    // box = { width: 1080 };  // エラー

    let box1: {     // オブジェクトの型注釈は改行可能
        width: number;
        height: number;
    };
    box1 = { width: 1080, height: 720 };
    console.log(box1);

    // 型エイリアスを用いた型注釈の書き方
    type Box = { width: number; height: number };
    let box2: Box = {width: 1080, height: 720 };
    console.log(box2);
}

console.log("\nメソッドの型注釈");
{
    let calculator: {
        sum(x: number, y: number): number;
    };
    calculator = {
        sum(x, y) {
            return x + y;
        },
    };
    console.log(calculator.sum(1,2));

    let calculator1: {
        minus: (x: number, y: number) => number;
    };
    calculator1 = {
        minus(x, y) {
            return x - y;
        },
    };
    console.log(calculator1.minus(2,1));
}

console.log("\nオブジェクトの型推論");
{
    let box = { width: 1080, height: 720 }; // 型注釈を省略
    console.log(box);
    console.log(typeof box.width);  // number

    let calculator = {
        sum(x: number, y: number) {
            return x + y;
        },
    };
    console.log(calculator.sum(1, 10));
}

console.log("\nRecord<Keys, Type>");
{
    let foo: Record<string, number>;
    foo = { a: 1, b: 2 };
    console.log(foo);
}

console.log("\nオブジェクトの型のreadonlyプロパティ");
{
    let obj: {
        readonly foo: number;
    };
    obj = { foo: 1 };
    // obj.foo = 2;    // エラー

    let obj1: {
        readonly foo: {
            bar: number;
        };
    };
    obj1 = {
        foo: {
            bar: 1,
        },
    };
    // obj1.foo = { bar: 2 };  // エラー
    obj1.foo.bar = 2;   // readonlyの中のオブジェクトはreadonlyにならないため、OK
    console.log(obj1.foo.bar);

    let obj2: { // 中のオブジェクトもreadonlyにしたい場合は都度指定する
        readonly foo: {
            readonly bar: number;
        };
    };

    let obj3: Readonly<{    // 多数のプロパティ全てをreadonlyにしたい場合、Readonlyユーティリティが便利
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
    }>;
}