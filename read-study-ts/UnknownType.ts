console.log("unknown型");
{
    let value: unknown;
    value = 1;  // OK
    value = "string";   // OK
    value = { name: "object" }; // OK

    // unknown型は型安全なany型
    // any型はどのような型の変数にも代入できる
    const a: any = 10;
    const int: number = a;
    const bool: boolean = a;
    const str: string = a;
    const obj: object = a;
    // unknown型の値は具体的な型へ代入できない
    // const num: number = value;  // エラー
    // const bo: boolean = value;  // エラー
    // const st: string = value;   // エラー
    // const ob: object = value;   // エラー
    const an: any = value;  // OK
    const unknown: unknown = value; // OK

    // unknow型はプロパティへのアクセス、メソッドの呼び出しも許されない
    value = 10;
    // value.toFixed();    // 'value' is of type 'unknown'.

    console.log("unknownと型の絞り込み");
    {
        const value: unknown = "";
        if(typeof value === "string") {
            console.log(value.toUpperCase());
        }
        // 型ガード関数
        function isObject(value: unknown): value is object {
            return typeof value === "object" && value !== null;
        }
        const value1: unknown = { a: 1, b: 2 };
        if(isObject(value1)) {
            console.log(Object.keys(value1));
        }
        // unknown型を配列型に絞り込みたい時
        function isNumberArray(value: unknown): value is number[] {
            if(!Array.isArray(value)) {
                return false;
            }
            return value.every((e) => typeof e === "number");
        }
    }
}