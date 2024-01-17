import Header from "../components/Header";
import Post from "../components/Post";
import Newsletter from "../components/Newsletter";
import Pagination from "../components/Pagination";
import { posts as data } from "../data/post";
import dayjs from "dayjs";
import { client } from "../libs/client";
import { log } from "console";

export default function Home({ data }: any) {
  return (
    <>
      <Header />

      <main className="container mx-auto flex flex-col p-3">
        <p className="my-16 ml-0 inline text-left text-4xl  font-bold leading-[normal] text-[rgba(35,46,82,1)] sm:ml-0 md:ml-10  lg:ml-10 xl:ml-10 2xl:ml-24">
          All posts
        </p>

        <div>data</div>

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
        })}

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

  console.log(data);

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
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  category: string[];
  id: string;
}
