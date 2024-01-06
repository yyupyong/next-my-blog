import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

export default function Post(props: PostProps) {
  let slug = props.title?.toLowerCase().replaceAll(" ", "-");

  return (
    <div
      className={`my-24 mx-auto inline-flex flex-col items-center justify-center text-[rgba(35,46,82,1)] transition-all sm:flex-col  md:flex-col lg:flex-row  xl:flex-row  2xl:flex-row`}
    >
      <div className="w-6/6 sm:w-6/6 mx-auto flex flex-col  items-start  gap-3  px-0 sm:px-0  md:w-[610px] md:px-0 lg:w-[610px] lg:px-3 xl:w-[610px] xl:px-3 2xl:w-[610px]  2xl:px-3">
        <div className="flex flex-col items-start justify-center gap-6">
          <div className="flex items-start text-center">
            <div
              className={`flex items-center justify-center gap-2.5 rounded-l-md bg-[rgba(235,242,254,1)] px-3 pt-2 pb-2.5 font-semibold transition-all`}
            >
              <p className="m-0 text-[13px] uppercase leading-[1.2]">
                {props.tag}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2.5 rounded-r-md bg-white px-3 pt-2 pb-2.5 font-medium ">
              <time
                dateTime={props.date.toString()}
                className="m-0 text-[13px] uppercase leading-[1.2]"
              >
                {dayjs(props.date).format("DD MMMM , YYYY")}
              </time>
            </div>
          </div>

          <Link href={`/${slug}`}>
            <p className="m-0 text-left text-[28px] font-bold leading-[1.3]">
              {props.title}
            </p>
          </Link>
        </div>
        <Link href={`/${slug}`}>
          <p className="m-0 text-left text-lg font-normal leading-normal">
            {" "}
            {props.description}
          </p>{" "}
        </Link>
      </div>

      <Image
        src={props.image}
        width={300}
        height={210}
        alt={props.title}
        className={`h-[210px] w-full rounded-lg bg-cover bg-center bg-no-repeat transition-all  sm:w-full md:w-full lg:w-[300px] xl:w-[300px] 2xl:w-[300px]`}
      />
    </div>
  );
}

interface PostProps {
  tag: string;
  date: string;
  title: string;
  description: string;
  image: string;
}
