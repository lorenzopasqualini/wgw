import Image from "next/image";
import { Motion } from "./Motion";

export interface ImgProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  series: ImgProp;
  index: number;
}

const variants={
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

function Card({ series, index }: Prop) {
  return (
    <Motion
        variants={variants}
        initial="hidden"
        animate="visible"
        viewport={{ amount: 0 }}
        transition={{
            delay: index * 0.1,
            ease:'easeInOut',
            duration: 0.4
        }}
        className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${series.image.original}`}
          alt={series.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {series.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {series.kind}
            </p>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default Card;