console.log("関数宣言");
{
    function hello() {
        return "hello";
    }

    // 型注釈
    function increment(num: number): number {
        return num + 1;
    }

    // 引数の型注釈を省略した場合、any型と暗黙的に解釈される
    // function increment1(num): number {  // Parameter 'num' implicitly has an 'any' type.
    //     return num + 1;
    // }

    // 戻り値の型注釈を省略した場合、コンパイラがこーろから型推論する
    function increment2(num: number) {
        return num + 1;
    }
    const value = increment2(1);
    console.log(typeof value === "number"); // true

    // returnが複数あり違う方を返している場合はユニオン型になる
    function getFirst(items: number[]) {
        if(typeof items[0] === "number") {
            return items[0];
        }
        return null;
    }
}