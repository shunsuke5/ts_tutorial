console.log("例外処理");
{
    try {
        throw new Error("something wrong");
    } catch(e) {
        console.log((e as Error).message);
    }
}