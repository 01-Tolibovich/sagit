import Image from "next/image";
import { postData } from "./data";

export const PostItem = ({ t }: { t: (key: string) => string }) => {

  return (
    <figure className="grid md:grid-cols-2 gap-8">
      {postData(t).map((item, index) => (
        <div key={index} className="mb-6">
          <Image
            className="object-cover w-full"
            src={item.img}
            width={560}
            height={238}
            alt=""
          />
          <figcaption>
            <h3 className="text-lg md:text-2xl my-3"><span className=" border border-r-2 border-primary mr-3 font-bold" />{item.title}</h3>
            <p className="text-sm md:text-lg">{item.paragraph}</p>
          </figcaption>
        </div>
      ))}
    </figure>
  );
};
