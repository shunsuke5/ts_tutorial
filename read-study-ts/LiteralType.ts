console.log("リテラル型(literal type)");
{
    let x: 1;   // 1 だけが代入可能な型を作成
    x = 1;      // OK
    // x = 100;    // エラー

    const isTrue: true = true;
    const num: 123 = 123;
    const str: "foo" = "foo";

    // リテラル型はマジックナンバーやステートの表現に用いられることが多い
    let num1: 1 | 2 | 3 = 1;
}