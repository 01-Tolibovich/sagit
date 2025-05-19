export const postData = (t: (key: string) => string) => {
  return [
    {
      img: "/static/image-30.png",
      title: t("modern_adhesive"),
      paragraph: t("pur_glue_tech"),
    },
    {
      img: "/static/eco.png",
      title: t("eco_safety"),
      paragraph: t("pur_glue_safe"),
    },
    {
      img: "/static/protection.png",
      title: t("moisture_temp_protection"),
      paragraph: t("pur_glue_durability"),
    },
    {
      img: "/static/estetica.png",
      title: t("perfect_aesthetics_durability"),
      paragraph: t("seamless_durability"),
    },
  ];
};
