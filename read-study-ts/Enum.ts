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
