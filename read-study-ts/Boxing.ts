console.log("ボックス化(boxing)");
{
    const str = "abc";  // プリミティブ型
    const strObject = new String(str);  // ラッパーオブジェクトに入れる
    console.log(strObject.length);          // オブジェクトのように扱える
    console.log(strObject.toUpperCase());   // オブジェクトのように扱える

    console.log(str.length);        // 自動ボックス化
    console.log(str.toUpperCase()); // 自動ボックス化

    // null.toString();    // エラー
    // undefined.toString();   // エラー

    const bool: Boolean = false;
    const num: Number = 0;
    const str2: String = "";
    const sym: Symbol = Symbol();
    const big: BigInt = 10n;

    const n1: Number = 0;
    // const n2: number = n1;  // ラッパー型をプリミティブ型に代入できない
    const num2: Number = 1;
    // num2 * 2;   // ラッパー型は演算子が使えない

    const boolLike = {
        valueOf(): boolean {
            return true;
        },
    };
    const bool2: Boolean = boolLike;
    console.log(bool2);

    const num3: Number = 0; // ラッパー型を型注釈に用いる利点はない
    const num4: number = 0; // 望ましい
}