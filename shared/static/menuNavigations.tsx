import { CustomTFunction } from "@/app/i18n";


export const navigations = (t: CustomTFunction) => {

  return [
    {
      text: t("about"),
      link: "#",
    },
    {
      text: t("choose_kitchen"),
      link: "#",
    },
    {
      text: t("get_design"),
      link: "#",
    },
    {
      text: t("updates"),
      link: "#",
    },
  ];
} 