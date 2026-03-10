"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { menuItems } from "./common/data";
import { cn } from "@/src/lib/utils";
import { useScrollDirection } from "@/src/hooks/useScrollDirection";
import {
  IconArrowRight,
  IconClose,
  IconLogoHongThai,
  IconMenu,
  IconTextHongThai,
} from "@/src/assets";
import LanguageSwitcher from "@/src/features/language-select";

export default function Header() {
  const t = useTranslations("HeroSection");
  const [openMenu, setOpenMenu] = useState(false);

  const scrollDirection = useScrollDirection(10, "up");
  const scrollClass = useMemo(() => {
    return scrollDirection === "down"
      ? "-translate-y-[120px]"
      : "translate-y-0";
  }, [scrollDirection]);

  return (
    <>
      <header
        className={[
          "header fixed top-3 left-3 right-3 z-[100] mx-auto w-auto max-w-6xl rounded-2xl px-4 py-3 md:top-4 md:left-5 md:right-5 md:px-5 lg:top-5 lg:left-0 lg:right-0 lg:w-full lg:px-7 2xl:max-w-7xl",
          "transition-transform duration-700",
          scrollClass,
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3 md:gap-4 lg:gap-6">
          <div className="flex shrink-0 items-center justify-center gap-2 md:gap-3 lg:gap-4">
            <IconLogoHongThai />
            <div className="hidden sm:block">
              <IconTextHongThai />
            </div>
          </div>

          <div className="mx-4 hidden min-w-0 flex-1 lg:block">
            <ul className="flex w-full items-center justify-between">
              {menuItems.map((item: any, index: number) => (
                <li
                  key={index}
                  className={cn(
                    "cursor-pointer text-sm leading-5 text-white-cus-50 transition-all duration-500 hover:-translate-y-1 hover:text-white xl:text-base",
                  )}
                >
                  <Link href={item.href}>{t(item.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right action desktop/tablet */}
          <div className="hidden shrink-0 items-center gap-3 md:flex lg:gap-4">
            <LanguageSwitcher />
            <button className="flex cursor-pointer items-center justify-between gap-2 rounded-3xl bg-white-cus-100 px-4 py-2.5 text-sm transition-all duration-700 hover:scale-[1.02] md:px-5 lg:px-6 lg:py-3 lg:text-base">
              {t("getConsultationNow")}
              <IconArrowRight className="text-black" />
            </button>
          </div>

          {/* Mobile + tablet menu button */}
          <button
            onClick={() => setOpenMenu(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white md:flex lg:hidden"
            aria-label="Open menu"
          >
            <IconMenu />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden",
          openMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[82%] max-w-[380px] bg-[#0F2E27] p-5 transition-transform duration-300 md:w-[420px]",
            openMenu ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconLogoHongThai />
              <div className="sm:block">
                <IconTextHongThai />
              </div>
            </div>

            <button
              onClick={() => setOpenMenu(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Close menu"
            >
              <IconClose />
            </button>
          </div>

          <div className="mb-6">
            <LanguageSwitcher />
          </div>

          <ul className="flex flex-col gap-4">
            {menuItems.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className="block border-b border-white/10 py-3 text-base text-white-cus-50 transition hover:text-white"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>

          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-3xl bg-white-cus-100 px-5 py-3 text-sm font-medium text-black transition-all duration-500 hover:scale-[1.02]">
            {t("getConsultationNow")}
            <IconArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </>
  );
}
