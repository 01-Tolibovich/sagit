import {
  EuropeStars,
  FlashIcon,
  SecurityIcon,
  BoxIcon,
} from "@/components/svgIcons";
import Image from "next/image";
import { initTranslations } from "../i18n";

export default async function Home({ params }: { params: { lng: string } }) {
  const { lng } = params;
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
            <h2 className="text-primary text-lg md:text-[22px] font-bold uppercase">
              \\ {t("about_us")}
            </h2>

            <h3 className=" text-[22px] md:text-[26px]">
              {t("design_reliability")}{" "}
              <span className="text-primary">BRAMF</span>
            </h3>
            <p className="text-sm md:text-lg">
             {t("product_purpose")}
            </p>
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
          <div className="justify-self-center lg:justify-self-end">
            <Image
              src="/static/kitchen-1.png"
              width={500}
              height={600}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
