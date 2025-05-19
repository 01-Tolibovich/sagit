import {
  EuropeStars,
  FlashIcon,
  SecurityIcon,
  BoxIcon,
} from "@/components/svgIcons";
import Image from "next/image";
import { initTranslations } from "../i18n";
import { HeadingH2 } from "@/components/ui/HeadingH2";
import { PostItem } from "@/components/postItem/PostItem";
// import { PageProps } from "@/shared/types";

export default async function Home({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await initTranslations(lng);
  const items = [
    {
      icon: <EuropeStars />,
      text: t("european_quality"),
      desc: t("high_quality_materials"),
    },
    {
      icon: <FlashIcon />,
      text: t("fast_deadlines"),
      desc: t("production_speed"),
    },
    {
      icon: <BoxIcon />,
      text: t("delivery"),
      desc: t("delivery_times_tj"),
    },
    {
      icon: <SecurityIcon />,
      text: t("warranty"),
      desc: t("warranty_3_years"),
    },
  ];

  const renderText = (title: string) => {
    return (
      <h4 className="text-lg md:text-[22px] leading-none">
        {title.split(" ").map((t) => (
          <span className="block" key={Math.random()}>
            {t}
          </span>
        ))}
      </h4>
    );
  };
  return (
    <>
      <section className="bg-secondary-foreground py-20">
        <div className="container grid lg:grid-cols-2">
          <div className="text-popover">
            <HeadingH2>{t("about_us")}</HeadingH2>
            <h3 className=" text-[22px] md:text-[26px]">
              {t("design_reliability")}{" "}
              <span className="text-primary">BRAMF</span>
            </h3>
            <p className="text-sm md:text-lg">{t("product_purpose")}</p>
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {items.map((el) => (
                <div key={Math.random()}>
                  <div className="flex items-center gap-4 border-b border-border py-3 mb-3">
                    <span className="w-12 h-12 block">{el.icon}</span>
                    {renderText(el.text)}
                  </div>
                  <p className="text-sm md:text-lg">{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="justify-self-center lg:justify-self-end bg-primary rounded-l-4xl rounded-b-4xl relative">
            <Image
              className="-translate-x-2.5 translate-y-2.5"
              src="/static/kitchen-1.png"
              width={500}
              height={600}
              alt=""
            />
            <div className="absolute bottom-1/6 bg-white/70 h-14 w-48 -left-10 rounded-tl-lg rounded-br-lg flex items-center justify-center gap-3.5">
              <span className="text-primary fonf-[700] text-4xl">2</span>
              <div className="leading-4">
                <div>{t("years")}</div>
                <div>{t("on_the_market")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
            <HeadingH2 className="my-8">{t("new_collection_new_tech")}</HeadingH2>
            <PostItem t={t} />
        </div>
      </section>
    </>
  );
}
