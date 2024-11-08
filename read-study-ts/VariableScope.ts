console.log("変数のスコープ");
{
    // 関数スコープ
    function func() {
        const variable = 123;
        return variable;
    }
    // console.log(variable);  // 参照できない

    // レキシカルスコープ
    const x = 100;
    function a() {
        console.log(x); // 関数の外の変数が見える
        return 0;
    }
    console.log(a());   // 100

    // ブロックスコープ
    {
        const x1 = 100;
        console.log(x); // 100
    }
    // console.log(x1);    // x1を参照できない
}