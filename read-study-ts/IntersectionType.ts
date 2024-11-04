console.log("インターセクション型");
{
    type TwoDimensionalPoint = {
        x: number;
        y: number;
    };
    type Z = {
        z: number;
    };
    type ThreeDimensionalPoint = TwoDimensionalPoint & Z;
    const p: ThreeDimensionalPoint = {
        x: 0,
        y: 1,
        z: 2,
    };

    // プリミティブ型のインターセクション型はnever型ができる
    type Never = string & number;
    // const n: Never = "a";   // エラー

    // インターセクション型を使いこなす
    // 以下のようにパラメーターが巨大化すると、プロパティの必須や選択可能がわかりづらい
    type Parameter = {
        id: string;
        index?: number;
        active: boolean;
        balance: number;
        photo?: string;
        age?: number;
        surname: string;
        givenName: string;
        company?: string;
        email: string;
        phoneNumber?: string;
        address?: string;
        // ...
    }
    // これをインターセクション型と、ユーティリティ型のRequired<T>,Partial<T>を用いてわかりやすくする
    type Mandatory = Required<{
        id: string;
        active: boolean;
        balance: number;
        surname: string;
        givenName: string;
        email: string;
    }>;
    type Optional = Partial<{
        index: number;
        photo: string;
        age: number;
        company: string;
        phoneNumber: string;
        address: string;
    }>;
    type Parameter1 = Mandatory & Optional;
}