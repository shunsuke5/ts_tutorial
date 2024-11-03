"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.UserApi = void 0;
console.log("構造的型付け");
{
    class Person {
        walk() { }
    }
    class Dog {
        walk() { }
    }
    class Abc {
        run() { }
    }
    const person = new Person();
    const dog = person; // 構造が同じため、OK
    console.log(dog);
    // const abc: Abc = person();  // 構造が違うため、エラー
    console.log("部分型");
    {
        class Circle {
            constructor(radius) {
                this.radius = radius;
            }
            area() {
                return Math.PI * this.radius ** 2;
            }
        }
        class Rectangle {
            constructor(width, height) {
                this.width = width;
                this.height = height;
            }
            area() {
                return this.width * this.height;
            }
        }
        function totalArea(shape1, shape2) {
            return shape1.area() + shape2.area();
        }
        const circle = new Circle(10);
        const rectangle = new Rectangle(5, 8);
        console.log(totalArea(circle, rectangle));
    }
}
console.log("モックテストの簡略化");
class UserApi {
    async getUser(id) {
        return undefined;
    }
}
exports.UserApi = UserApi;
class UserService {
    constructor(api) {
        this.api = api;
    }
    async userExists(id) {
        const user = await this.api.getUser(id);
        return user !== undefined;
    }
}
exports.UserService = UserService;
console.log("privateメンバーを持つクラス");
{
    // TypeScriptではprivateメンバーを持つクラスは構造的型付けから区別される
    class UserId {
        constructor(id) {
            this.id = id;
        }
        getId() {
            return this.id;
        }
    }
    class ProductId {
        constructor(id) {
            this.id = id;
        }
        getId() {
            return this.id;
        }
    }
    const userId = new UserId("1");
    // const productId: ProductId = userId;    // エラー
}
console.log("ブランド型");
{
    const userId = { id: 1 };
    // const productId: ProductId = userId;    // 代入不可
}
