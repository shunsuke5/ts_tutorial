console.log("型のメンタルモデル");
{
    type StrOrNum = string | number;
    function narrowUnion(param: StrOrNum) {
        if(typeof param === "string") {
            // stringとnumberの和集合からstringを削る
            console.log(param.toUpperCase());
        } else {
            // 残された集合はnumber
            console.log(param * 3);
        }
    }
    const param: StrOrNum = "a";
    console.log(narrowUnion(param));    // A
    // なぜこの後に undefined が表示されるのかがわからない
}