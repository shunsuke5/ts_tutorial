console.log("従来の関数とアロー関数の違い");
{
    // 関数宣言と関数式の2つを「従来の関数」と呼ぶ
    // アロー関数は、従来の関数の冗長さを解決するために導入された

    // 従来の関数(関数式)
    [1,2,3].map(function (n) {
        return n + 1;
    });
    // アロー関数
    [1,2,3].map((n) => n + 1);
}