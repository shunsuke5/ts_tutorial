console.log("明確な割り当てアサーション");
{
    let num: number;
    initNum();  // 明らかに関数内で初期化されていても変数が初期化されていないとエラーになる
    // console.log(num);   // エラー
    function initNum() {
        num = 2;
    }

    class Foo {
        num1: number = 1;   // 宣言と同時に初期化しているのでOK
        num2: number;   // コンストラクタで初期化しているのOK
        // num3: number;   // 実際は初期化されるものの、コンパイルエラーとなる
        constructor() {
            this.num2 = 1;
            this.initNum3();
        }
        initNum3() {
            // this.num3 = 1;
        }
    }

    console.log("明確な割り当てアサーションを使う");
    {
        let num!: number;   // 明確な割り当てアサーション
        initNum();
        console.log(num * 2);   // エラーにならない
        function initNum() {
            num = 2;
        }

        class Foo {
            num!: number;   // エラーにならない
        }
    }
    console.log("非Nullアサーション");
    {
        let num: number;
        initNum();
        console.log(num! * 2);  // エラーにならない
        function initNum() {
            num = 2;
        }
    }
    console.log("より安全なコードを書くには");
    {
        let num: number;
        num = initNum();    // initNum()の戻り値を格納する形
        console.log(num * 2);
        function initNum() {
            return 2;
        }

        let num1: number | undefined;
        initNum1();
        if(typeof num === "number") {   // 型ガードでチェック
            console.log(num * 2);
        }
        function initNum1() {
            num = 2;
        }
    }
}