console.log("anyとunknownの違い");
{
    const any1: any = 0.8;
    const any2: any = "a";
    const any3: any = { x: 0, y: 1, name: "origin" };

    const unknown1: unknown = 0.8;
    const unknown2: unknown = "a";
    const unknown3: unknown = { x: 0, y: 1, name: "origin" };

    // any型に代入したオブジェクトのプロパティ、メソッドは使用可能
    console.log(any1.toFixed());    // 1
    console.log(any2.length);       // 1
    console.log(any3.name);         // origin

    // unknown型に代入したオブジェクトのプロパティ、メソッドは使用することができない上、実行不可
    // console.log(unknown1.toFixed());    // エラー
    // console.log(unknown2.length);       // エラー
    // console.log(unknown3.name);         // エラー

    // any型では無茶苦茶なプログラムでも実行時にエラーになるため注意が必要
    console.log(any3.x.y.z);    // コンパイルエラーが出ない
    // unknown型は一貫してプロパティ、メソッドへのアクセスを行わないため、意図しない実行時エラーを防止できる
    // console.log(unknown3.x.y.z);    // エラー
}