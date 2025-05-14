export const fallbackLng = "tj";
export const languages = [fallbackLng, 'uz', 'en', 'ru'];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
