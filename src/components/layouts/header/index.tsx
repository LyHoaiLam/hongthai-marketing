"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { menuItems } from "./common/data";
import { cn } from "@/src/lib/utils";
import { useScrollDirection } from "@/src/hooks/useScrollDirection";
import {
  IconArrowRight,
  IconLogoHongThai,
  IconTextHongThai,
} from "@/src/assets";
import LanguageSwitcher from "@/src/features/language-select";

export default function Header() {
  const t = useTranslations("HeroSection");

  const scrollDirection = useScrollDirection(10, "up");
  const scrollClass = useMemo(() => {
    return scrollDirection === "down"
      ? "-translate-y-[120px]"
      : "translate-y-0";
  }, [scrollDirection]);

  return (
    <header
      className={[
        "mx-auto w-full max-w-7xl py-3 px-7 fixed top-5 left-0 right-0 z-100 header",
        "transition-transform duration-800",
        scrollClass,
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center justify-center gap-4 shrink-0">
          <IconLogoHongThai />
          <IconTextHongThai />
        </div>

        <div className="flex-1 min-w-0 mx-6">
          <ul className="flex w-full items-center justify-between">
            {menuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={cn(
                    "text-base leading-5 text-white-cus-50 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:text-white",
                  )}
                >
                  <Link href={item.href}>{t(item.labelKey)}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="shrink-0 flex items-center gap-4">
          <LanguageSwitcher />
          <button className="flex items-center justify-between gap-2 rounded-3xl bg-white-cus-100 px-6 py-3 cursor-pointer transition-all duration-900 hover:rotate-y-45">
            {t("getConsultationNow")}
            <IconArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
