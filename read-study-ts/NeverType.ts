console.log("never型");
{
    // const foo: never = 1;   // エラー
    const any: any = 1;
    // const foo: never = any; // anyでも代入は不可
    const foo: never = 1 as never;  // OK
    console.log(foo);

    // never型はどんな型にも代入できる
    const a: string = foo;  // OK
    const b: string[] = foo;    // OK
}