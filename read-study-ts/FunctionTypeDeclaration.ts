console.log("関数の型の宣言");
{
    // type 型の名前 = (引数名: 引数の型) => 戻り値の型;
    type Increment = (num: number) => number;

    // 型宣言を型注釈で使う
    const increment1: Increment = (num: number): number => num + 1;
    console.log(increment1(1));  // 2
    const increment2: Increment = function (num: number): number {
        return num + 1;
    }
    console.log(increment2(1)); // 2

    // 関数の型宣言を型注釈に使った場合、関数の実装側の引数と戻り値の型注釈は省略可能
    const increment3: Increment = (num) => num + 1;
    console.log(increment3(1)); // 2

    // TSでは、メソッド構文でも関数の型を宣言できる
    // 両者の違いは書き方だけであり、内部的には同じ動き
    // type 型の名前 = {
    //     (引数名: 引数の型): 戻り値の型;
    // };
    type Increment1 = {
        (num: number): number;
    };

    // 関数の実装から関数の型を宣言する
    function increment4(num: number): number {
        return num + 1;
    }
    type Increment2 = typeof increment4;
    const increment5: Increment2 = (num) => num + 1;
    console.log(increment5(1)); // 2
}