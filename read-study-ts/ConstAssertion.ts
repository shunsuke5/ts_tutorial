console.log("constアサーション");
{
    // 末尾にas const をつけると、全プロパティがreadonlyと同等
    const pikachu = {
        name: "pikachu",
        no: 25,
        genre: "mouse pokemon",
        height: 0.4,
        weight: 6.0,
    } as const;
    // pikachu.name = "raichu";    // エラー

    type Country = {
        name: string;
        capitalCity: string;
    };
    type Continent = {
        readonly name: string;
        readonly canada: Country;
        readonly us: Country;
        readonly mexico: Country;
    };
    const america: Continent = {
        name: "North American Continent",
        canada: {
            name: "Republic of Canada",
            capitalCity: "Ottawa",
        },
        us: {
            name: "United States of America",
            capitalCity: "Washington, D.C.",
        },
        mexico: {
            name: "United Mexican States",
            capitalCity: "Mexico City",
        },
    };
    // readonlyのプロパティ自体を変更はできない
    // america.name = "African Continent"; // エラー
    // america.canada = {  // エラー
    //     name: "Republic of Cote d'Ivoire",
    //     capitalCity: "Yamoussoukro",
    // };
    // しかし、readonlyのプロパティがオブジェクトである場合、
    // そのオブジェクトのプロパティまでreadonlyにはならないため以下はOKとなる
    america.canada.name = "Republic of Cote d'Ivoire";  // OK
    america.canada.capitalCity = "Yamoussoukro";    // OK
    console.log(america);   // canadaのプロパティが変更されている

    const america1: Continent = {
        name: "North American Continent",
        canada: {
            name: "Republic of Canada",
            capitalCity: "Ottawa",
        },
        us: {
            name: "United States of America",
            capitalCity: "Washington, D.C.",
        },
        mexico: {
            name: "United Mexican States",
            capitalCity: "Mexico City",
        },
    } as const;
    // トップレベルのプロパティは同様にエラー
    // america1.name = "African Continent"; // エラー
    // america1.canada = {  // エラー
    //     name: "Republic of Cote d'Ivoire",
    //     capitalCity: "Yamoussoukro",
    // };
    // それに加え、オブジェクトが持つプロパティもreadonlyとなる
    // はずなのだが、なぜか代入できる、なぜ？
    america1.canada.name = "Republic of Cote d'Ivoire";
    america1.canada.capitalCity = "Yamoussoukro";

    // このコードは想定通りネストされたプロパティもreadonlyになっている
    const nested = { inner: { key: "value" } } as const;
    // nested.inner.key = "a";
}