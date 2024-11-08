console.log("switch文");
{
    function func(value: string): string {
        switch(value) {
            case "a":
                return "aです";
            case "b":
                return "bです";
            default:
                return "a,b以外です";
        }
    }
    console.log(func("a")); // aです
    console.log(func("b")); // bです
    console.log(func("c")); // a,b以外です

    // switchは厳密等価演算(===)
    function test(n: unknown): void {
        switch(n) {
            case null:
                console.log("This is null");
                return;
            case undefined:
                console.log("This is undefined");
                return;
            default:
                console.log("This is other");
        }
    }
    console.log(test(null));    // This is nul
    console.log(test(undefined));   // This is undefined

    // switch文でbreakを書かない場合に次の分岐も実行されることを「フォールスルー」という
    // noFallthroughCasesInSwitch オプションをtrueにすると、フォールスルーを警告してくれる
    const a: string = "a";
    // switch(a) {
    //     case "a":   // Fallthrough case in switch.
    //         console.log(1);
    //     case "b":
    //         console.log(2);
    // }

    // caseごとに変数スコープは無いので、違うcaseで同じ変数を宣言するとエラーになる
    switch(a) {
        case "a":
            // const sameName = "A";   // Cannot redeclare block-scoped variable 'sameName'.
            break;
        case "b":
            // const sameName = "B";   // Cannot redeclare block-scoped variable 'sameName'.
            break;
    }

    // caseに変数スコープを作るには{}でcase節を囲む
    switch(a) {
        case "a": {
            const sameName = "A";
            break;
        }
        case "b": {
            const sameName = "B";
            break;
        }
    }
}