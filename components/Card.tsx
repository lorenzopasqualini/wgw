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
            delay: index * 0.04,
            ease:'easeInOut',
            duration: 0.4
        }}
        className="max-w-sm w-full"
    >
      <div className="relative w-full h-[50vh] rounded-md overflow-hidden">
        <Image
          src={`https://shikimori.one${series.image.original}`}
          alt={series.name}
          fill
          className="transition duration-200 ease-in-out hover:scale-110"
        />
      </div>

      <div className="flex flex-col py-4 gap-4">
        <div className="flex justify-between items-center">
          <h2 className="bg-[#031F16] rounded-md py-1 px-2 text-[#E4DBCB] transition duration-200 ease-in-out hover:opacity-50 select-none">
            {series.name}
          </h2>
          <div className="bg-[#031F16] rounded-md py-1 px-2 text-[#E4DBCB] transition duration-200 ease-in-out hover:opacity-50 select-none">
              {series.kind}
          </div>
        </div>
      </div>

    </Motion>
  );
}

export default Card;