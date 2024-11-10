console.log("制御フロー分析と型ガードによる型の絞り込み");
{
    // ユニオン型で片方の型でしか定義されていないメソッドやプロパティを使用するとエラー
    function showMonth(month: string | number) {
        // console.log(month.padStart(2, "0"));
    }

    console.log("制御フロー分析");
    {
        function showMonth(month: string | number) {
            if(typeof month === "string") {
                console.log(month.padStart(2, "0"));
            }
        }
        console.log(showMonth("3"));    // 03

        function showMonth1(month: string | number) {
            if(typeof month === "string") {
                console.log(month.padStart(2, "0"));
                return; // このreturnにより、if文以降の処理でmonthはnumber型だけとなる
            }
            console.log(month.toFixed());
        }
        console.log(showMonth1(1));
    }
    console.log("型ガード");
    {
        // if(typeof month === "string") のような型チェックのコードを型ガードと呼ぶ
        // typeofの型ガードでは、typeof null === "object" となる点に注意
        function getMonth(date: string | Date | null) {
            if(typeof date === "object") {
                // 'date' is possibly 'null'.
                // console.log(date.getMonth() + 1);
            }
            // OK例
            if(typeof date === "object" && date != null) {
                console.log(date.getMonth() + 1);
            }
        }
        const d: Date = new Date();
        console.log(getMonth(d));   // 11

        // instanceof
        function getMonth1(date: string | Date) {
            if(date instanceof Date) {  // 特定のクラスのインスタンスであることを判定
                console.log(date.getMonth() + 1);
            }
        }

        // in
        interface Player {}
        interface Wizard extends Player {
            castMagic(): void;
        }
        interface SwordMan extends Player {
            slashSword(): void;
        }
        function attack(player: Wizard | SwordMan) {
            // オブジェクトが特定のプロパティを持つか判定する型ガード
            if("castMagic" in player) {
                player.castMagic();
            } else {
                player.slashSword();
            }
        }
        // ユーザー定義の型ガード関数
        function isWizard(player: Player): player is Wizard {
            return "castMagic" in player;
        }
        function attack1(player: Wizard | SwordMan) {
            if(isWizard(player)) {
                player.castMagic();
            } else {
                player.slashSword();
            }
        }
        // 型ガードの変数代入
        function getMonth2(date: string | Date) {
            const isDate = date instanceof Date;    // 変数に型ガードの結果を格納できる
            if(isDate) {
                console.log(date.getMonth() + 1);
            }
        }
        console.log(getMonth2(new Date()));
    }
}