import {
  EuropeStars,
  FlashIcon,
  SecurityIcon,
  BoxIcon,
} from "@/components/svgIcons";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      icon: <EuropeStars />,
      text: "Европейское качество",
      desc: "Мы используем только высококачественные материалы от ведущих европейских производителей, таких как EGGER, Häfele, Vurösink, Vuröstone",
    },
    {
      icon: <FlashIcon />,
      text: "Быстрые сроки",
      desc: "Благодаря технологии изготовления, автоматизации и выстроенным процессам срок каждого заказа от оплаты и до отгрузки занимает от 5 дней",
    },
    {
      icon: <BoxIcon />,
      text: "Доставка",
      desc: "Кратчайшие сроки доставки по всему Казахстану в течении 5-10 дней",
    },
    {
      icon: <SecurityIcon />,
      text: "Гарантия",
      desc: "Гарантия 3 года на всю фурнитуру",
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
            <h2 className="text-primary text-lg md:text-[22px] font-bold">
              \\ КОРОТКО О НАС
            </h2>

            <h3 className=" text-[22px] md:text-[26px]">
              Дизайн и надежность — главные принципы продуктов{" "}
              <span className="text-primary">BRAMF</span>
            </h3>
            <p className="text-sm md:text-lg">
              Каждый элемент создан, чтобы сделать интерьеры более комфортными,
              стильными, эффективными и безопасными.
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
