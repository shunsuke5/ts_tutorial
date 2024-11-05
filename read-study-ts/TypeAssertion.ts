console.log("型アサーション");
{
    const value: string | number = "this is a string";
    // as構文
    const strLength: number = (value as string).length;
    console.log(strLength); // 16
    // アングルブラケット構文
    const strLength1: number = (<string>value).length;
    console.log(strLength1);    // 16

    const num = 123;
    // const str: string = num as string;  // エラー
    const str: string = num as unknown as string;   // OK
}