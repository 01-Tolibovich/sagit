import Image from "next/image";
// import { Button } from "./ui/button";
import { initTranslations } from "@/app/i18n";
import Link from "next/link";

export const MainInfo = async ({ lng }: { lng: string }) => {
  const { t } = await initTranslations(lng);
  const info = [
    t("3d_design_one_day"),
    t("production_time_10d"),
    t("warranty_3_years_short"),
  ];

  const bramfTitle = (title: string) => {
    return (
      <h1 className="flex flex-wrap gap-x-3 text-[clamp(24px,_3vw,_42px)] font-bold text-white text-center md:text-left">
        {title.split(" ").map((letter, index) => (
          <span
            key={index}
            className={`block ${letter === "BRAMF" ? "text-primary" : ""}`}
          >
            {letter}
          </span>
        ))}
      </h1>
    );
  };
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
          {bramfTitle(t("bramf_kitchens"))}
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
          <Link href="#apply" className="w-fit md:text-2xl font-bold mt-6 px-4 py-2 md:px-8 md:py-4 block h-auto text-base text-white bg-primary rounded-2xl">
            {t("leave_request")}
          </Link>
        </div>
      </div>
    </main>
  );
};
