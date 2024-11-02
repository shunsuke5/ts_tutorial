import { UserApi, UserService } from './StructuralTyping';

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