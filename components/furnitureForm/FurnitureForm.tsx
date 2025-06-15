import { ProgressBar } from "./parts/ProgressBar";

export const FurnitureForm = ({ t }: { t: (key: string) => string }) => {
  const formData = {
    progress: t("done"),
    deck: t("survey_offer"),
    tabs: [
      {
        title: t("choose_kitchen_shape"),
        types: [
          {
            img: "/static/formProgres/straight.jpg",
            p: t("straight"),
          },
          {
            img: "/static/formProgres/l_shaped.jpg",
            p: t("l_shaped"),
          },
          {
            img: "/static/formProgres/u_shaped.jpg",
            p: t("u_shaped"),
          },
        ],
      },
      {
        title: t("kitchen_length_question"),
        normalLenght: 4,
        minLenght: 1,
        maxLenght: 10,
      },
      {
        title: t("choose_countertop_material"),
        types: [
          {
            img: "/static/formProgres/wooden.jpg",
            p: t("wooden"),
          },
          {
            img: "/static/formProgres/quartz.png",
            p: t("quartz"),
          },
        ],
      },
      {
        title: t("choose_countertop_color")
      }
    ],
  };

  console.log(formData);
  

  return (
    <section className="bg-primary min-h-screen flex items-center">
      <div className="container bg-white rounded-2xl p-4">
        <ProgressBar />
      </div>
    </section>
  );
};
