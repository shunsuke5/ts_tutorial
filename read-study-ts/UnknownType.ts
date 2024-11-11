console.log("unknown型");
{
    let value: unknown;
    value = 1;  // OK
    value = "string";   // OK
    value = { name: "object" }; // OK

    // unknown型は型安全なany型
    // any型はどのような型の変数にも代入できる
    const a: any = 10;
    const int: number = a;
    const bool: boolean = a;
    const str: string = a;
    const obj: object = a;
    // unknown型の値は具体的な型へ代入できない
    // const num: number = value;  // エラー
    // const bo: boolean = value;  // エラー
    // const st: string = value;   // エラー
    // const ob: object = value;   // エラー
    const an: any = value;  // OK
    const unknown: unknown = value; // OK

    // unknow型はプロパティへのアクセス、メソッドの呼び出しも許されない
    value = 10;
    // value.toFixed();    // 'value' is of type 'unknown'.

    console.log("unknownと型の絞り込み");
    {
        const value: unknown = "";
        if(typeof value === "string") {
            console.log(value.toUpperCase());
        }
        // 型ガード関数
        function isObject(value: unknown): value is object {
            return typeof value === "object" && value !== null;
        }
        const value1: unknown = { a: 1, b: 2 };
        if(isObject(value1)) {
            console.log(Object.keys(value1));
        }
        // unknown型を配列型に絞り込みたい時
        function isNumberArray(value: unknown): value is number[] {
            if(!Array.isArray(value)) {
                return false;
            }
            return value.every((e) => typeof e === "number");
        }

        // unknown型をオブジェクトの方に絞り込む
        type Email = {
            from: string;
            to: string;
            title: string;
            subject: string;
        };
        // プロパティまでチェックしていないので、Emailかどうかわからない
        function isEmail(value: unknown): value is Email {
            if(typeof value !== "object" || value === null) {
                return false;
            }
            return true;
        }
        // 一見問題ないように見えるが、エラーが起こる
        function isEmail1(value: unknown): value is Email {
            if(typeof value !== "object" || value === null) {
                return false;
            }
            // if(typeof value.from !== "string") { // Property 'from' does not exist on type 'object'.
            //     return false;
            // }
            return true;
        }
        // OKなチェック処理は以下
        function isEmail2(value: unknown): value is Email {
            if(typeof value !== "object" || value === null) {
                return false;
            }
            // 型アサーションでvalueをEmail型に近づける
            const email = value as Record<keyof Email, unknown>;
            // 各プロパティのチェック
            if(typeof email.from !== "string") {
                return false;
            }
            if(typeof email.to !== "string") {
                return false;
            }
            if(typeof email.title !== "string") {
                return false;
            }
            return typeof email.subject === "string";
        }

        console.log("unknownの用途");
        {
            // any型の値をより安全にする
            // JSON.parse()の戻り値はany型のため、もし戻り値の存在しないプロパティにアクセスした場合に実行時エラーになる危険性が残る
            const data: unknown = JSON.parse("...");

            // 型アサーションの制約を回避する
            const str = "a";
            // const num = str as number;  // エラー
            const num = str as unknown as number;   // OK

            // try-catchで捕捉される値の型
            // 標準ではany型なので、unknown型にしたい場合はtsconfig.jsonの設定を変える必要がある
        }
    }
}