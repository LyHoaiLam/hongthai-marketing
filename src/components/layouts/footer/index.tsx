import { IconLogoHongThaiFooter, IconTextHongThaiFooter } from "@/src/assets";
import { Link } from "@/src/i18n/routing";

export function Footer() {
  return (
    <footer className="w-full bg-lime-300 text-neutral-900 border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl 2xl:max-w-7xl flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between px-5 md:px-6 xl:px-0 lg:px-0 lg:py-12">
        <div className="max-w-sm space-y-3 text-sm md:text-base">
          <p className="font-semibold">Giải pháp thiết kế website toàn diện</p>
          <p>Nền tảng vững chắc cho mọi thành công.</p>
        </div>

        <div className="flex flex-col gap-6 text-sm md:text-base md:text-right">
          <div className="space-y-1">
            <p className="font-medium">Info@hongthaix.com</p>
            <p>Thứ 2 - Thứ 6 | 09:00 - 18:00</p>
            <p>58 Huỳnh Mẫn Đạt, Phường Thạnh Mỹ Tây</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <span className="h-1 w-1 rounded-full bg-neutral-900" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <span className="h-1 w-1 rounded-full bg-neutral-900" />
              <span>Website</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <span className="h-1 w-1 rounded-full bg-neutral-900" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-neutral-800 md:flex-row md:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <IconLogoHongThaiFooter />
            <IconTextHongThaiFooter />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-neutral-800 md:inline-block" />
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Service
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-neutral-800 md:inline-block" />
            <span>HongThai. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
