console.log("例外処理");
{
    try {
        throw new Error("something wrong");
    } catch(e) {
        console.log((e as Error).message);
    }

    // JS,TSではcatchを1つしか書けないため、
    // エラーの型によって処理を分岐する場合は以下のようにする
    try {

    } catch(e) {
        if(e instanceof TypeError) {
            //...
        } else if (e instanceof RangeError) {
            //...
        } else {
            //...
        }
    } finally {
        // finallyも記述可能
    }
}