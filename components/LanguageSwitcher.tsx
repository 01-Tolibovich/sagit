"use client";

import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const locales = ["tj", "uz", "en", "ru"];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams(); // contains `locale`

  const currentLocale = params.lng;

  const handleChange = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLocale; // заменяем /[locale]

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div className="flex gap-4 items-center justify-center text-popover">
      {locales.map((lng) => (
        <div key={lng} className={`size-7 rounded-full flex items-center justify-center border border-primary/50 ${lng === currentLocale ? "bg-primary" : ""}`}>
          <button
            onClick={() => handleChange(lng)}
            className="text-sm cursor-pointer font-[500]"
          >
            {lng.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
};
