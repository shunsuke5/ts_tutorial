"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StructuralTyping_1 = require("./StructuralTyping");
test("ユーザーがいる時はtrueを返す", async () => {
    // モックオブジェクトを直接作成
    const api = {
        async getUser(id) {
            return { id, name: "Alice" };
        }
    };
    // モックオブジェクトをUserServiceに渡してテスト
    const service = new StructuralTyping_1.UserService(api);
    const result = await service.userExists(123);
    expect(result).toBe(true);
});
