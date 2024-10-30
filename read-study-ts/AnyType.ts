console.log("any型");
{
    let value: any;
    value = 1;                  // OK
    value = "string";           // OK
    value = { name: "object" }; // OK

    const str: any = 123;
    // console.log(str.toLowerCase()); // コンパイルエラー
}
console.log("暗黙のany");
{
    // function hello(name) {  // 引数の型注釈を省略しているためエラー
    //     console.log(`Hello, ${name.toUpperCase()}`);
    // }
    // hello(1);
}