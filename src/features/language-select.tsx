"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from "../i18n/routing";
import { IconFlagChina, IconFlagUSA, IconFlagVietNam } from "../assets";

const localeNames: Record<string, string> = {
  en: "English",
  "zh-CN": "中文",
  vi: "Tiếng Việt",
};

const localeIcons: Record<string, React.ReactNode> = {
  vi: <IconFlagVietNam />,
  en: <IconFlagUSA />,
  "zh-CN": <IconFlagChina />,
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  React.useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg cursor-pointer bg-transparent! px-4 py-2 text-sm font-medium text-zinc-900 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-4 w-4 items-center justify-center [&_svg]:h-4 [&_svg]:w-4">
            {localeIcons[locale] ?? null}
          </span>
        </span>

        <svg
          className="ml-1 h-4 w-4 fill-current text-zinc-700 dark:text-zinc-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-50 mt-2 w-full min-w-42 overflow-hidden rounded-xl border border-zinc-200 bg-white! shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
        >
          {routing.locales.map((loc) => {
            const active = loc === locale;
            return (
              <li key={loc} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => handleLocaleChange(loc)}
                  className={[
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm cursor-pointer",
                    "hover:bg-blue-cus-50!",
                    active
                      ? "font-semibold text-blue-cus-300 bg-blue-cus-100 rounded-lg"
                      : "font-medium",
                  ].join(" ")}
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center [&_svg]:h-4 [&_svg]:w-4">
                    {localeIcons[loc] ?? null}
                  </span>
                  <span className="flex-1">{localeNames[loc] || loc}</span>
                  {active ? <span className="text-blue-cus-300">✓</span> : null}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
