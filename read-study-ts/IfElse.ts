console.log("if-else文");
{
    if(0 === 0) {
        //...
    } else {
        //...
    }

    if(0 === 0) {
        //...
    } else if(0 === 0) {    // ifと全く同じ条件でもエラー出ないのは当然だけどなんかおもしろい
        //...
    } else {

    }

    // 式の中でifを使いたい場合は三項演算子を使用
    const value = 0;
    const result = value === 0 ? "0です" : "0じゃないです";
    console.log(result);

    // 三項演算子のネスト(あまり深く使わない方が良い)
    const one: number = 1;
    const five = 5;
    const result1 = one === 0 ? "0です" : one === 5 ? "5です" : "0でも5でもないです";
    console.log(result1);
}