console.log("型エイリアス");
{
    type StringOrNumber = string | number;
    const value: StringOrNumber = 123;
    // 型エイリアスの使用例
    type Str = string;  // プリミティブ型
    type OK = 200;  // リテラル型
    type Numbers = number[];    // 配列型
    type UserObject = { id: number; name: string }; // オブジェクト型
    type NumberOrNull = number | null;  // ユニオン型
    type CallbackFunction = (value: string) => boolean; // 関数型
}