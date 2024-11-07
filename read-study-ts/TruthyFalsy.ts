console.log("truthyな値、falsyな値");
{
    const array = [null, 3, 0, null, 1, 2];
    // 以下の処理では 0 はfalsyな値であるため、取り除かれてしまう
    console.log(array.filter((n) => n));    // [ 3, 1, 2 ]
    // truthy,falsyの値を直接booleanとして使わずにtrue,falseの値を返すようにする
    console.log(array.filter((n) => n !== null));   // [ 3, 0, 1, 2 ]
}