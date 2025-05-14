// app/i18n/i18n-client.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const runsOnServerSide = typeof window === 'undefined';

if (!i18n.isInitialized && !runsOnServerSide) {
  i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions());
}

export default i18n;
