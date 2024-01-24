
export default interface itemProps {
    id: string;
    publishedAt: string; // 日付は`publishedAt`を使用
    title: string;
    content: string; // 説明には`content`フィールドを使用
    eyecatch: {
        url: string;
    };
}