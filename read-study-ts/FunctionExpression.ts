console.log("関数式");
{
    // 関数式
    const a1 = function a1(b: number) {
        return b + 1;
    };

    // 関数名の省略
    const a2 = function () { return 1 + 2; };
    const a3 = function (b: number) { return b + 1; };

    // 関数式の呼び出し
    console.log(a1(1)); // 2
    console.log(a2());  // 3
    console.log(a3(3)); // 4

    // 関数式をオブジェクトのプロパティに直接代入
    const obj = {
        a4: function () { return 10; },
    };
    console.log(obj.a4());  // 10

    // 関数式を別の関数の引数に直接渡す
    // button.addEventListener("click", function (event) {
    //     console.log("クリックされました");
    // });

    // 型注釈
    const increment = function(n: number) {
        return n + 1;
    }
    // const incre = function(n) {};   // 省略すると暗黙的にany

    // 関数型の変数に関数式を代入する場合、引数の型注釈を省略しても型推論が効く
    type UseString = (value: string) => void;
    let useString: UseString;
    useString = function (value) { return 0; };
    console.log(useString("a"));

    // 戻り値の型注釈
    const getZero = function (): number {
        return 0;
    }
    console.log(getZero());

    // 関数式の関数名は、関数の処理内部からのみ参照可能
    const factorial = function fact(n: number): number {
        if (n <= 1) {
            return 1;
        }
        // return n * fact(n - 1);
        return n * factorial(n - 1);    // このように書くことも可能
    }
    console.log(factorial(3));  // 6
}