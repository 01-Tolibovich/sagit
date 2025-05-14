import { initTranslations } from "@/app/i18n";
import { MainHead } from "./part/MainHead";
import { navigations } from "@/shared/static/menuNavigations";

export const Header = async ({ lng }: { lng: string }) => {
  const { t } = await initTranslations(lng);

  const data = navigations(t);
  
  return <MainHead data={data} />;
};
