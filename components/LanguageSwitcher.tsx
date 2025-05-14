'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

const locales = ['en', 'ru', 'tj'];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams(); // contains `locale`

  const currentLocale = params.locale;

  const handleChange = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split('/');
    segments[1] = newLocale; // заменяем /[locale]

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div>
      {locales.map((lng) => (
        <button
          key={lng}
          onClick={() => handleChange(lng)}
          style={{
            fontWeight: lng === currentLocale ? 'bold' : 'normal',
            marginRight: 8,
          }}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
