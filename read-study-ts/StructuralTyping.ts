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
    console.log("モックテストの簡略化");
    {
        type User = { id: number; name: string };
        class UserApi {
            async getUser(id: number): Promise<User | undefined> {
                return undefined;
            }
        }
        class UserService {
            private api: UserApi;
            constructor(api: UserApi) {
                this.api = api;
            }
            async userExists(id: number): Promise<boolean> {
                const user = await this.api.getUser(id);
                return user !== undefined;
            }
        }
        // TODO: Jestをローカルインストールして単体テストをしてみる
        test("ユーザーがいる時はtrueを返す", async () => {
            // モックオブジェクトを直接作成
            const api: UserApi = {
                async getUser(id) {
                    return { id, name: "Alice" };
                }
            };
            // モックオブジェクトをUserServiceに渡してテスト
            const service = new UserService(api);
            const result = await service.userExists(123);
            expect(result).toBe(true);
        });
    }
}