console.log("アロー関数");
{
    // (引数) => {
    //     処理内容
    // };

    // 関数式で書くと以下のようになる
    const increment1 = function (n: number) {
        return n + 1;
    }
    // アロー関数で定義すると以下のようになる
    const increment2 = (n: number) => {
        return n + 1;
    }
    console.log(increment1(3)); // 4
    console.log(increment2(3)); // 4

    // 処理が式1つだけの場合、{}とreturnを省略できる
    const increment3 = (n: number): number => n + 1;
    console.log(increment3(3)); // 4

    // JSでは引数が1つだけの場合に()を省略できるが、
    // TSでは()を省略した場合、引数と戻り値のどちらも型注釈が書けなくなるので注意

    // 他の関数の引数にアロー関数を直接書く場合など、
    // 引数の型が推論できる場合はnoImplicitAnyが有効でも引数の()が省略できる
    [1,2,3].map((num) => num + 1);  // OK
}