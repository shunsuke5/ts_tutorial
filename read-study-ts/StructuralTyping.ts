console.log("構造的型付け");
{
    class Person { walk() {} }
    class Dog { walk() {} }
    class Abc { run() {} }
    const person = new Person();
    const dog: Dog = person;    // 構造が同じため、OK
    console.log(dog);
    // const abc: Abc = person();  // 構造が違うため、エラー

    console.log("部分型");
    {
        interface Shape {
            area(): number;
        }
        class Circle implements Shape {
            radius: number;
            constructor(radius: number) {
                this.radius = radius;
            }
            area(): number {
                return Math.PI * this.radius ** 2;
            }
        }
        class Rectangle implements Shape {
            width: number;
            height: number;
            constructor(width: number, height: number) {
                this.width = width;
                this.height = height;
            }
            area(): number {
                return this.width * this.height;
            }
        }

        function totalArea(shape1: Shape, shape2: Shape): number {
            return shape1.area() + shape2.area();
        }
        const circle = new Circle(10);
        const rectangle = new Rectangle(5,8);
        console.log(totalArea(circle, rectangle));
    }
}
console.log("モックテストの簡略化");
type User = { id: number; name: string };
export class UserApi {
    async getUser(id: number): Promise<User | undefined> {
        return undefined;
    }
}
export class UserService {
    private api: UserApi;
    constructor(api: UserApi) {
        this.api = api;
    }
    async userExists(id: number): Promise<boolean> {
        const user = await this.api.getUser(id);
        return user !== undefined;
    }
}
console.log("privateメンバーを持つクラス");
{
    // TypeScriptではprivateメンバーを持つクラスは構造的型付けから区別される
    class UserId {
        private id: string;
        constructor(id: string) {
            this.id = id;
        }
        getId(): string {
            return this.id;
        }
    }
    class ProductId {
        private id: string;
        constructor(id: string) {
            this.id = id;
        }
        getId(): string {
            return this.id;
        }
    }
    const userId: UserId = new UserId("1");
    // const productId: ProductId = userId;    // エラー
}
console.log("ブランド型");
{
    interface UserId {
        __brand: "UserId";
        id: number;
    }
    interface ProductId {
        __brand: "ProductId";
        id: number;
    }
    const userId = { id: 1 } as UserId;
    // const productId: ProductId = userId;    // 代入不可
}