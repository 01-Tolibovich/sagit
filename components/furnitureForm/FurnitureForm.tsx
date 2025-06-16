import { ProgressBar } from "./parts/ProgressBar";
import { TabForm } from "./parts/TabForm";

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
        normalLenght: 5,
        minLenght: 1,
        maxLenght: 10,  
        m: t("m"),
      },
      {
        title: t("choose_countertop_material"),
        types: [
          {
            img: "/static/formProgres/wooden.jpg",
            p: t("wooden"),
            id: 1,
          },
          {
            img: "/static/formProgres/quartz.png",
            p: t("quartz"),
            id: 2,
          },
        ],
      },
      {
        title: t("choose_countertop_color"),
        id: 1,
        types: [
          {
            img: "/static/formProgres/oak.jpg",
            p: t("oak"),
          },
          {
            img: "/static/formProgres/light_marble.jpg",
            p: t("light_marble"),
          },
          {
            img: "/static/formProgres/dark_granite.jpg",
            p: t("dark_granite"),
          },
          {
            img: "/static/formProgres/light_marble.jpg",
            p: t("white_granite"),
          },
        ],
      },
      {
        title: "",
        id: 2,
        types: [
          {
            img: "/static/formProgres/MarquinaNero.png",
            p: "Marquina Nero",
          },
          {
            img: "/static/formProgres/CarraraGrey.png",
            p: "Carrara Grey",
          },
          {
            img: "/static/formProgres/Emperador.png",
            p: "Emperador",
          },
          {
            img: "/static/formProgres/CalacattaOro.png",
            p: "Calacatta Oro",
          },
        ],
      },
      {
        title: t("enter_delivery_city"),
        input: t("enter"),
      },
      {
        title: t("fill_form_contact"),
        nameInput: t("your_name"),
        phoneInput: t("phone"),
        submitBtn: t("submit"),
        dataProcessingNotice: t("data_processing_notice"),
      },
    ],
    backBtn: t("back"),
    nextBtn: t("next"),
  };

  console.log(formData);

  return (
    <section className="bg-primary min-h-screen flex items-center">
      <div className="container bg-white rounded-2xl p-4">
        <ProgressBar formData={formData} />
        {formData.deck}
        <TabForm formData={formData} />
      </div>
    </section>
  );
};
