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

    // 例外が必ず発生する関数の戻り値は絶対に取れないためnever型
    function throwError(): never {
        throw new Error();
    }
    // 終了しない関数
    // function forever(): never {
    //     while(true) {}   // 無限ループ
    // }
    type NumberString = number & string;    // never型

    const ok: void = undefined; // voidはundefined代入OK
    // const ng: never = undefined;    // neverはundefined代入NG

    // 戻り値がneverの関数が最後まで到達できる場合、コンパイルエラー
    // function func(): never {}   // A function returning 'never' cannot have a reachable end point.

    type Extension = "js" | "ts" | "json";
    // 網羅性が無い分岐
    function printLang(ext: Extension): void {
        switch(ext) {
            case "js":
                console.log("JavaScript");
                break;
            case "ts":
                console.log("TypeScript");
                break;
            // jsonに対する分岐が無い
        }
    }
    // 網羅性チェックがついた分岐
    function printLang1(ext: Extension): void {
        switch(ext) {
            case "js":
                console.log("JavaScript");
                break;
            case "ts":
                console.log("TypeScript");
                break;
            default:
                // Type 'string' is not assignable to type 'never'.
                // const exhaustivenessCheck: never = ext;
                break;
        }
    }

    // 例外による網羅性チェック
    class ExhaustiveError extends Error {
        constructor(value: never, message = `Unsupported type: ${value}`) {
            super(message);
        }
    }
    function printLang2(ext: Extension): void {
        switch(ext) {
            case "js":
                console.log("JavaScript");
                break;
            case "ts":
                console.log("TypeScript");
                break;
            default:
                // Argument of type 'string' is not assignable to parameter of type 'never'.
                // throw new ExhaustiveError(ext);
        }
    }
}