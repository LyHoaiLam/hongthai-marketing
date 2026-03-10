import type { Metadata } from "next";
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import HeroSection from "@/src/components/sections/section-hero";
import Header from "@/src/components/layouts/header";

import "./globals.css";
import { MarketingSection } from "@/src/components/sections/section-comprehensive-support";
import { ContactSection } from "@/src/components/sections/contact-section";
import { FaqSection } from "@/src/components/sections/faq-section";
import { Footer } from "@/src/components/layouts/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type AppLocale = (typeof routing.locales)[number];
function isLocale(value: string): value is AppLocale {
  return (routing.locales as readonly string[]).includes(value);
}

const SUPPORTED_LOCALES = new Set(["en", "vi", "zh-CN"]);

type Seo = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
};

async function loadSeo(locale: string): Promise<Seo> {
  const safeLocale = SUPPORTED_LOCALES.has(locale) ? locale : "en";
  const filePath = path.join(process.cwd(), "messages", `${safeLocale}.json`);

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(raw);
    const seo: Seo | undefined = json?.seo;

    if (!seo?.title || !seo?.description) return fallbackSeo();
    return seo;
  } catch (error) {
    console.error("loadSeo error:", error);
    return fallbackSeo();
  }
}

function fallbackSeo(): Seo {
  return {
    title: "Hồng Thái – Thiết Kế Website Chuyên Nghiệp & Giải Pháp Marketing",
    description:
      "Hồng Thái cung cấp dịch vụ thiết kế website chuyên nghiệp, tối ưu giao diện, trải nghiệm người dùng và hỗ trợ marketing hiệu quả. Giải pháp phù hợp cho doanh nghiệp muốn xây dựng thương hiệu và tăng chuyển đổi.",
    ogTitle:
      "Hồng Thái – Thiết Kế Website & Giải Pháp Marketing Cho Doanh Nghiệp",
    ogDescription:
      "Khám phá Hồng Thái với dịch vụ thiết kế website hiện đại, chuẩn SEO, tối ưu chuyển đổi và đồng hành cùng doanh nghiệp trong chiến lược marketing số.",
    keywords: [
      "Hồng Thái",
      "thiết kế website",
      "công ty thiết kế website",
      "website doanh nghiệp",
      "thiết kế web chuyên nghiệp",
      "website chuẩn SEO",
      "dịch vụ marketing",
      "giải pháp marketing số",
      "thiết kế landing page",
      "tối ưu chuyển đổi website",
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("NEXT_LOCALE")?.value;

  console.log(cookieLang);
  const lang =
    cookieLang && SUPPORTED_LOCALES.has(cookieLang) ? cookieLang : locale;

  const seo = await loadSeo(lang);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      type: "website",
    },
  };
}

export default async function RootLayout({
  // children,
  params,
}: Readonly<{
  // children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main className="w-full">
            <HeroSection />
            <MarketingSection />
            <ContactSection />
            <FaqSection />
          </main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
