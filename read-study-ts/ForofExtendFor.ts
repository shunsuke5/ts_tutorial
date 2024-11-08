console.log("for-of文-拡張for文");
{
    const array: number[] = [1, 2, 3];
    for(const value of array) {
        console.log(value); // 1 → 2 → 3
    }

    // 配列のインデックスと値を一緒に得るにはentries()を組み合わせる
    const words: string[] = ["I", "love", "TypeScript"];
    for(const [index, word] of words.entries()) {
        console.log(index,word);
    }
}