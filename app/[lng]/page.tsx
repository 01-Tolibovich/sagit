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
import { FirstApply } from "@/components/firstApply/FirstApply";
// import { FurnitureForm } from "@/components/furnitureForm/FurnitureForm";
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

  const details = [t("edge_glue_types"), t("thermoplastic_glue_issue")];

  const kromlaTabble = [
    ["", t("pur_glue"), t("eva_glue")],
    [t("water_resistance"), t("absolute_waterproof"), t("limited")],
    [t("heat_resistance"), t("heat_tolerance_150"), t("heat_tolerance_90")],
    [t("bond_strength"), t("very_high"), t("medium")],
    [t("seam_aesthetics"), t("thin_invisible"), t("more_visible")],
  ];

  const GolaHandles = () => {
    const golaAdvantages = [
      {
        title: t("minimalist_aesthetics"),
        paragraph: t("no_traditional_handles"),
      },
      {
        title: t("ease_of_use"),
        paragraph: t("smart_opening_system"),
      },
      {
        title: t("safety"),
        paragraph: t("no_protruding_parts"),
      },
      {
        title: t("durable_materials"),
        paragraph: t("gola_profiles_durability"),
      },
      {
        title: t("versatility"),
        paragraph: t("gola_color_options"),
      },
    ];

    return (
      <section className="bg-secondary-foreground py-8 md:py-20">
        <div className="container grid md:grid-cols-2 gap-12 text-popover justify-items-center">
          <div>
            <HeadingH2>{t("gola_handles")}</HeadingH2>
            <p className="">{t("gola_description")}</p>
          </div>
          <div className="transform -translate-y-1.5 translate-x-1.5 w-[96%]">
            <div className="bg-primary transform translate-y-3 -translate-x-3 rounded-br-2xl rounded-tl-2xl">
              <Image
                className="transform -translate-y-3 translate-x-3"
                src="/static/gola1-2.png"
                width={700}
                height={300}
                alt=""
              />
            </div>
          </div>
          <div className="transform -translate-y-1.5 -translate-x-1.5 w-[96%] row-start-4 row-end-5 md:row-start-2 md:row-end-3">
            <div className="bg-primary transform translate-y-3 translate-x-3 rounded-br-2xl">
              <Image
                className="transform -translate-y-3 -translate-x-3"
                src="/static/gola3.png"
                width={700}
                height={1200}
                alt=""
              />
            </div>
          </div>
          <div>
            {golaAdvantages.map((gola, index) => (
              <div
                key={index}
                className={` py-3 ${
                  golaAdvantages.length !== ++index ? "border-b" : ""
                }`}
              >
                <h3 className="text-base font-bold mb-2 md:text-2xl">
                  {gola.title}
                </h3>
                <p className="text-sm md:text-lg">{gola.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <section className="bg-secondary-foreground pt-20 pb-32">
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
      <section className="container">
        <div className="mb-14 md:mb-24">
          <FirstApply t={t} />
          <HeadingH2 className="my-8">{t("new_collection_new_tech")}</HeadingH2>
          <PostItem t={t} />
        </div>
        <div className="grid md:grid-cols-[1fr_auto] gap-10 mb-14 md:mb-24">
          <HeadingH2 className="mb-6 md:col-span-2">
            {t("why_pur_edges_better")}
          </HeadingH2>
          <div>
            {details.map((detail, index) => (
              <p key={index} className="my-4 text-sm md:text-lg">
                {detail}
              </p>
            ))}
          </div>
          <div className="rounded-tl-4xl rounded-br-4xl bg-primary transform -translate-y-4 -translate-x-4 md:size-64 mx-auto">
            <Image
              src="/static/kromka.png"
              className="w-full rounded-tl-4xl rounded-br-4xl transform translate-y-4 translate-x-4 object-contain"
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="mb-14 md:mb-24 overflow-auto pb-2">
          {kromlaTabble.map((col, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border border-dashed w-4xl mx-auto"
            >
              {col.map((row, j) => (
                <span
                  key={j}
                  className={`block px-4 py-2 ${j === 0 ? "font-bold" : ""} ${
                    i === 0 ? "text-primary font-bold text-xl" : ""
                  }`}
                >
                  {row}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <GolaHandles />
      {/* <FurnitureForm t={t}/> */}
    </>
  );
}
