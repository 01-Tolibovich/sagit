import Image from "next/image";
import { Button } from "./ui/button";

export const MainInfo = () => {
  const info = [
    "3D дизайн и расчёт за 1 день",
    "Срок изготовления 10дн",
    "Гарантия 3 года",
  ];
  return (
    <main className="relative h-[700px] overflow-hidden">
      <Image
        className="w-screen h-full object-cover absolute top-0"
        src="/static/kitchen-header.png"
        width={2000}
        height={1000}
        alt="img"
      />
      <div className="container flex items-center h-full relative">
        <div className="md:max-w-[80%] items-center md:items-start flex flex-col gap-6">
          <h1 className=" text-[clamp(24px,_3vw,_42px)] font-bold text-white text-center md:text-left">
            Кухни <span className="text-primary">BRAMF</span> – безупречный
            дизайн и высочайшее качество для вашего дома
          </h1>
          <div className="flex gap-6 font-bold flex-wrap justify-center md:justify-start">
            {info.map((el) => (
              <p
                key={Math.random()}
                className="bg-white py-2 px-4 rounded-tl-lg rounded-br-lg text-sm md:text-base"
              >
                {el}
              </p>
            ))}
          </div>
          <Button className="w-fit md:text-2xl font-bold mt-6 px-4 py-2 md:px-8 md:py-4 block h-auto text-base">
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
        </div>
      </div>
    </main>
  );
};
