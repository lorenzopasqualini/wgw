import Image from "next/image";

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

function Card({ series }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full">
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
    </div>
  );
}

export default Card;