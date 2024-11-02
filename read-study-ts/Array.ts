console.log("配列リテラル");
{
    const a = [1, 2, 3];
    const b = [
        1,
        2,
        3,
    ];
    console.log(a,b);
}
console.log("\n配列の型注釈");
{
    let array: number[];
    array = [1, 2, 3];
    let array1: Array<number>;
    array1 = [1, 2, 3];
    let array2: string[] = ["a", "b", "c"];
    console.log(array,array1,array2);
}
console.log("\n配列はオブジェクト");
{
    const list1 = [1, 2, 3];
    const list2 = [1, 2, 3];
    console.log(list1 == list2);    // false
    // 配列の中身を比較したい時は、lodashのようなライブラリを使用するとよい

    const arr = [1, 2, 3];
    const backup = arr;
    arr.push(4);    // 変更
    console.log(arr, backup);   // backupにもpush()が影響

    const backup2 = [...arr];   // スプレッド構文
    arr.push(5);
    console.log(arr, backup2);  // backup2にpush()が影響していない
}
console.log("\n配列要素へのアクセス");
{
    const abc = ["a", "b", "c"];
    console.log(abc[0]);

    console.log("TypeScriptの要素の型");
    {
        // Type[]から要素を取り出した時、その値の型はTypeになる
        const abc: string[] = ["a", "b", "c"];  // 返る値の型はstringとなる
        // const character: string = abc[0];   // stringが返る
        // const character1: string = abc[100];    // stringが返るとされるのでエラーにならない
        // console.log(character1);    // undefined
        // console.log(character1.toUpperCase());  // JavaScript実行時にエラー

        // noUncheckedIndexedAccess をtrueにすると、
        // 要素を取り出すときの型にundefinedを追加するため、上記のコードをエラーにしてくれる
        const character2: string | undefined = abc[0];  // OK
        // console.log(character2.toUpperCase());  // エラー
        if(typeof character2 === "string") {
            console.log(character2.toUpperCase());  // OK
        }
    }
}
console.log("\n読み取り専用の配列");
{
    const nums: readonly number[] = [1, 2, 3];
    const nums1: ReadonlyArray<number> = [1, 2, 3];
    // nums.push(4);   // エラー
    // JavaScript実行時にはpush()メソッドが残っているため、
    // コンパイルエラーを無視して実行するとreadonlyでも書き換えられてしまうので注意

    const readonlyNumbers: readonly number[] = [1, 2, 3];
    // const writableNumbers: number[] = readonlyNumbers;  // エラー

    // readonly配列を普通の配列に代入する際は型アサーションを用いる
    const writableNumbers1: number[] = readonlyNumbers as number[];  // OK
    console.log(readonlyNumbers, writableNumbers1);
}
console.log("\n配列の分割代入");
{
    const oneToFive = [1, 2, 3, 4, 5];
    const [one, two, three] = oneToFive;
    const num: number = one;    // OK
    console.log(one, two, three);   // 1 2 3

    console.log("ネストした配列の分割代入");
    {
        const twoByTwo = [
            [1, 2],
            [3, 4],
        ];
        const [[one, two], [three]] = twoByTwo;
        console.log(one,two,three); // 1 2 3
    }
    console.log("途中要素の分割代入");
    {
        const oneToFive = [1, 2, 3, 4, 5];
        const [,,, a, b] = oneToFive;
        console.log(a, b);  // 4 5
    }
    console.log("残余部分の代入");
    {
        const oneToFive = [1, 2, 3, 4, 5];
        const [one, ...rest] = oneToFive;
        console.log(one, rest); // 1 [ 2, 3, 4, 5]
    }
}
console.log("\n配列の破壊的操作");
{
    console.log("非破壊的なメソッド");
    {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        const all = nums1.concat(nums2);
        console.log(nums1, nums2, all); // [ 1, 2 ] [ 3, 4 ] [ 1, 2, 3, 4 ]
    }
    console.log("破壊的なメソッド");
    {
        const nums = [1, 2];
        nums.push(3);
        console.log(nums);  // [ 1, 2, 3 ]

        // reverse()メソッドは元の配列の順番も逆にしてしまうので注意
        const newNums = nums.reverse(); // numsの順番も変えてしまう
        console.log(nums);  // [ 3, 2, 1 ]
        console.log(newNums);   // [ 3, 2, 1 ]

        console.log("破壊的なメソッドを安全に使う方法");
        {
            const original = [1, 2, 3];
            const copy = [...original];    // スプレッド構文で配列のコピーを作成
            copy.reverse();
            console.log(original);  // 破壊的操作の影響がない
            console.log(copy);  // [ 3, 2, 1 ]

            const reversed = [...original].reverse();   // 1行でまとめた記述
            console.log(original, reversed);    // [ 1, 2, 3 ] [ 3, 2, 1 ]
        }
    }
}
console.log("\n配列をループする方法");
{
    console.log("for文");
    {
        // break,continueでループの操作が可能
        const arr = ["a", "b", "c"];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === "a") {
                continue;
            }
            console.log(arr[i]);
            if(arr[i] === "b") {
                break;
            }
        }
    }
    console.log("for-of文");
    {
        // break,continueでループの操作が可能
        const arr = ["a", "b", "c"];
        for(const value of arr) {
            if(value === "a") {
                continue;
            }
            if(value === "c") {
                break;
            }
            console.log(value);
        }
    }
    console.log("Arrayのメソッド");
    {
        // breakやcontinueは使えない
        const arr = ["a", "b", "c"];
        arr.forEach((value, i) => {
            console.log(value, i);  // a 0, b 1, c 2
        });

        const arr2 = arr.map((value) => value + value);
        console.log(arr2);  // [ 'aa', 'bb', 'cc' ]
    }
}
console.log("\n配列のスプレッド構文")
{
    // スプレッド構文を使わない場合
    const arr = [1, 2, 3];
    const arr2 = [];
    for(const item of arr) {
        arr2.push(item);
    }
    arr2.push(4);
    console.log(arr, arr2); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]
    // スプレッド構文を使用する場合
    const arr3 = [...arr, 4];
    console.log(arr, arr3);// [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

    const arr4 = [0, ...arr, 4];    // スプレッド構文は配列リテラルの好きな位置に記述可能
    console.log(arr4);  [ 0, 1, 2, 3, 4 ]

    console.log("配列のコピー");
    {
        // スプレッド構文でコピーした配列は「浅いコピーであるため、
        // 2層目より深くにある配列は元の配列の値を共有することに注意
        const arr = [[1, 2], [3, 4]];
        const backup = [...arr];
        arr[1].push(5);
        console.log(arr);
        console.log(backup); // 影響が出る

        // concat()も同じらしい
        const backup2 = arr.concat();
        arr[1].push(6);
        console.log(backup2);

        const a = [1, 2, 3];
        const b = [4, 5, 6];
        const concated = [...a, ...b];
        console.log(concated);
    }
}
console.log("配列の共変性");
{

}