console.log("等価であるということ");
{
    // === は、型と値が等しいことを指す
    // TSでは数値と文字列など、型が違う比較はそもそもできなさそう
    console.log(null === undefined);    // false
    // console.log(0 === 0n);  // エラー
    // console.log(0 === "0"); // エラー

    // == は、型が異なっていても同じと見なすことができる
    console.log(null == undefined); // true

    console.log("等価であることを気を付ける値");
    {
        // NaNの常にfalseとなる性質を利用し、値がNaNか判定する処理
        function isNaN(value: unknown): boolean {
            return value !== value;
        }
        console.log(isNaN(1));      // false
        console.log(isNaN(NaN));    // true

        console.log(Symbol("piano") === Symbol("piano"));   // false
        console.log(Symbol("piano") == Symbol("piano"));    // false
        // 同じ変数名を参照するとtrue
        const sym = Symbol(2);
        console.log(sym === sym);   // true
    }
}