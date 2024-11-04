console.log("ユニオン型");
{
    let numberOrUndefined: number | undefined;
    type ErrorCode =    // | はリストの冒頭に置くこともできる
        | 400
        | 401
        | 402
        | 403
        | 404
        | 405;

    // 配列要素にユニオン型を用いる際は書き方に注意が必要
    type List = string | number[];  // string または number[]型となってしまう
    type List1 = (string | number)[];   // string[] または number[]型となる
    const numList: List1 = [1, 2, 3];   // OK
    const strList: List1 = ["a", "b", "c"]; // OK
    console.log(numList, strList);

    const maybeUserId: string | null = null;
    // const userId: string = maybeUserId; // nullの可能性があるため、代入不可
    if(typeof maybeUserId === "string") {
        const userId: string = maybeUserId; // 分岐で文字列型に絞り込んでいるためOK
    }
}
console.log("\n判別可能なユニオン型");
{
    console.log("通常のユニオン型は絞り込みが複雑になる");
    {
        type UploadStatus = InProgress | Success | Failure;
        type InProgress = { done: boolean; progress: number };  // done:false
        type Success = { done: boolean };   // done:true
        type Failure = { done: boolean; error: Error }; // done:true
        // progressの有無をチェックしていないためエラーになる
        // function printStatus(status: UploadStatus) {
            // if(status.done === false) {
            //     console.log(`アップロード中:${status.progress}%`);
            // }

        // 全ての状態に対応した関数が以下
        function printStatus(status: UploadStatus) {
            if(status.done) {
                if("error" in status) {
                    console.log(`アップロード失敗:${status.error.message}`);
                } else {
                    console.log("アップロード成功");
                }
            } else if("progress" in status) {
                console.log(`アップロード中:${status.progress}%`);
            }
        }
    }
    console.log("判別可能なユニオン型とは？");
    {
        type UploadStatus = InProgress | Success | Failure;
        type InProgress = { type: "InProgress"; progress: number };
        type Success = { type: "Success" };
        type Failure = { type: "Failure"; error: Error };
        // 新たに追加したディスクリミネータの分岐で型を絞り込む
        function printStatus(status: UploadStatus) {
            switch(status.type) {
                case "InProgress":
                    console.log(`アップロード中:${status.progress}%`);
                    break;
                case "Success":
                    console.log("アップロード成功");
                    break;
                case "Failure":
                    console.log(`アップロード失敗:${status.error.message}`);
                    break;
                default:
                    console.log("不正なステータス:", status);
            }
        }

        // ディスクリミネータに使える型はリテラル型(文字列,数値,論理値),null,undefined である
        // 数値リテラル型のディスクリミネータ
        type OkOrBadRequest =
            | { statusCode: 200; value: string }
            | { statusCode: 400; message: string }
        function handleResponse(x: OkOrBadRequest) {
            if(x.statusCode === 200) {
                console.log(x.value);
            } else {
                console.log(x.message);
            }
        }
        // 論理値リテラル型のディスクリミネータ
        type OkOrNotOk =
            | { isOk: true; value: string }
            | { isOk: false; error: string };
        function handleStatus(x: OkOrNotOk) {
            if(x.isOk) {
                console.log(x.value);
            } else {
                console.log(x.error);
            }
        }
        // nullと非nullの関係にある型のディスクリミネータ
        type Result =
            | { error: null; value: string }
            | { error: Error };
        function handleResult(result: Result) {
            if(result.error === null) {
                console.log(result.value);
            } else {
                console.log(result.error);
            }
        }
        // undefinedと非undefinedの関係にある型のディスクリミネータ
        type Result1 =
            | { error: undefined; value: string }
            | { error: Error };
        function handleResult1(result: Result) {
            if(result.error) {
                console.log(result.error);
            } else {
                console.log(result.value);
            }
        }
        // ディスクリミネータを変数に代入する場合
        type Shape =
            | { type: "circle"; color: string; radius: number }
            | { type: "square"; color: string; size: number }
        function toCSS(shape: Shape) {
            const { type, color } = shape;  // 分割代入でshapeのプロパティを取得
            switch(type) {
                case "circle":
                    return {
                        background: color,
                        borderRadius: shape.radius,
                    };
                case "square":
                    return {
                        background: color,
                        width: shape.size,
                        height: shape.size,
                    };
            }
        }
    }
}