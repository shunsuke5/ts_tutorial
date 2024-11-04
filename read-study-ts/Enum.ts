console.log("列挙型");
{
    enum Position {
        Top,
        Right,
        Bottom,
        Left,
    }
    console.log(Position.Top, Position.Right, Position.Bottom, Position.Left);  // 0 1 2 3
}
console.log("数値列挙型");
{
    enum Position {
        Top,    // 0
        Right,  // 1
        Bottom, // 2
        Left,   // 3
    }
    console.log(Position);
    // 値を代入した場合、それに続くメンバーは代入した値から連番
    enum Abc {
        a = 1,  // 1
        b,      // 2
        c,      // 3
        d,      // 4
    }
    console.log(Abc);
}
console.log("\n文字列列挙型");
{
    enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }
    console.log(Direction);
}
console.log("\n列挙型の問題点と代替手段");
{
    enum ZeroOrOne {
        Zero = 0,
        One = 1,
    }
    // const zeroOrOne: ZeroOrOne = 9; // ts5.0未満でエラーなし
    console.log(ZeroOrOne[0]);  // Zero
    console.log(ZeroOrOne[9]);  // undefined
    // 上記のように、メンバーにない値にアクセスしてもコンパイルエラーにならない

    console.log("文字列列挙型だけ公称型になる");
    {
        enum StringEnum {
            Foo = "foo",
        }
        const foo1: StringEnum = StringEnum.Foo;
        // const foo2: StringEnum = "foo"; // 構造は同じなのにコンパイルエラーとなり代入できない
    }
    console.log("列挙型の代替案1:ユニオン型");
    {
        type YesNo = "yes" | "no";
        function toJapanese(yesno: YesNo) {
            switch(yesno) {
                case "yes":
                    return "はい";
                case "no":
                    return "いいえ";
            }
        }
        const yes: YesNo = "yes";
        console.log(toJapanese(yes));
    }
    {
        // ユニオン型とシンボルを組み合わせる方法
        const yes = Symbol();
        const no = Symbol();
        type YesNo = typeof yes | typeof no;
        function toJapanese(yesno: YesNo) {
            switch(yesno) {
                case yes:
                    return "はい";
                case no:
                    return "いいえ";
            }
        }
        console.log(toJapanese(no));
    }
    console.log("列挙型の代替案2:オブジェクトリテラル");
    {
        const Position = {
            Top: 0,
            Right: 1,
            Bottom: 2,
            Left: 3,
        } as const;
        type Position = (typeof Position)[keyof typeof Position];
        // 上のコードは type Position = 0 | 1 | 2 | 3; と同じ意味になる
        function toJapanese(position: Position) {
            switch(position) {
                case Position.Top:
                    return "上";
                case Position.Right:
                    return "右";
                case Position.Bottom:
                    return "下";
                case Position.Left:
                    return "左";
            }
        }
        console.log(toJapanese(0));
    }
}