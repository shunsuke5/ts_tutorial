console.log("typeof演算子");
{
    console.log(typeof true);
    console.log(typeof 0);
    console.log(typeof "a");
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof Symbol());
    console.log(typeof 1n);
    console.log(typeof [1,2,3]);
    console.log(typeof { a: 1, b: 2 });
    console.log(typeof (() => {}));

    // typeofをif,switchと併せて使うことで条件と合致したときにその変数をその方として扱える
    const n: unknown = "";
    if(typeof n === "string") {
        n.toUpperCase();    // string型のメソッドが使用可能
    }

    console.log("nullを判別する");
    {
        // typeof null は object が返るため、以下のような実装が望ましい
        const value = null;
        function isObject(value: unknown) {
            return value !== null && typeof value === "object";
        }
        console.log(isObject(value));
    }
    console.log("配列を判別する");
    {
        const a: number[] = [1,2,3];
        if(Array.isArray(a)) {
            // ここで a はany[]型であると判別される
            console.log(typeof a);
            console.log(a[0].toString());
        }
    }
}