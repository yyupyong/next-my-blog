import Header from "../components/Header";
import Post from "../components/Post";
import Newsletter from "../components/Newsletter";
import Pagination from "../components/Pagination";
import { posts as data } from "../data/post";
import dayjs from "dayjs";
import { client } from "../libs/client";
import { log } from "console";

export default function Home({ posts }: { posts: itemProps[] }) {
  return (
    <>
      <Header />

      <main className="container mx-auto flex flex-col p-3">
        <p className="my-16 ml-0 inline text-left text-4xl  font-bold leading-[normal] text-[rgba(35,46,82,1)] sm:ml-0 md:ml-10  lg:ml-10 xl:ml-10 2xl:ml-24">
          All posts
        </p>

        {posts.map((item) => {
          const GetDate = dayjs(item.publishedAt).format("DD MMM, YYYY");
          // ここで`item`から必要なデータを抽出し、Postコンポーネントに渡します。
          return (
            <Post
              id={item.id}
              key={item.id}
              tag={item.category.name} // `category`が存在する場合、その`name`を使用
              date={GetDate}
              title={item.title}
              description={"ccccccccccccc"} // `content`を`description`として渡す
              image={item.eyecatch.url} // `eyecatch`オブジェクト内の`url`を使用
            />
          );
        })}
        {/* 
        {data?.map((item: itemProps) => {
          let GetDate = dayjs(item.date).format("DD-MMM , YYYY");

          return (
            <Post
              key={item.id}
              tag={item.tags[0]}
              date={GetDate.toString()}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })} */}
        <Pagination />
      </main>

      <Newsletter />
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: { posts: data },
//   };
// }

export const getStaticProps = async () => {
  const res = await client.get({
    endpoint: "blogs",
  });
  const posts = res.contents;

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

interface homePageProps {
  posts: {
    map: any;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  };
}

interface itemProps {
  id: string;
  publishedAt: string; // 日付は`publishedAt`を使用
  title: string;
  content: string; // 説明には`content`フィールドを使用
  eyecatch: {
    url: string;
  };
  category: {
    name: string;
  }
}
