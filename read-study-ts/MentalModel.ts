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
    // 原因は、narrowUnion()の戻り値を指定していないことだった

    console.log("ユニット型");
    {
        // ユニット型は型の要素として値を一つしか持たないような型
        type Unit = 1;
        const one: Unit = 1;    // リテラル型もユニット型
    }
    console.log("ボトム型");
    {
        // ボトム型は値を全く持たないような型(never型)
        function neverReturn(): never {
            throw new Error("決して帰ってこない関数");
        }
        // const a: never = 0; // neverにどのような要素も割り当てることはできない
    }
    console.log("トップ型");
    {
        // トップ型はあらゆる値を割り当てることができる
        const u1: unknown = 42;
        const u2: unknown = "st";
        const u3: unknown = { p: 1 };
        const u4: unknown = null;
        const u5: unknown = () => 2;

        const u: unknown = 1;
        const t: {} | null | undefined = u; // unknown型と相互に割り当て可能な特殊なユニオン型
        console.log(t);

        const a1: any = 42;
        const a2: any = "st";
        const a3: any = { p: 1 };
        const a4: any = null;
        const a5: any = () => 2;
        // any型はあらゆる型からの割り当てが可能だけではなく、
        // never型を除くあらゆる型へも割り当て可能
        const a: any = 1;
        const n1: unknown = a;
        const n2: {} = a;
        const n3: number = a;
        const n4: 1 = a;
        // const n5: never = a;
    }
    console.log("部分型関係の解釈");
    {
        type A = { a: string };
        type B = { b: number };
        type Union = A | B;
        type Intersection = A & B;
        const a_and_b: Intersection = { a: "st", b: 42 };
        const a_or_b: Union = a_and_b;  // インターセクション型はユニオン型の部分型
        console.log(a_or_b);
    }
}