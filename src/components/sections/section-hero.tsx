import { IconArrowRight, IconArrowRightVerTwo, IconCircle } from "@/src/assets";
import Image from "next/image";
import AnimateOnView from "../animations/motion-wrapper";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/bg-hero-section.webp')" }}
      />

      <div className="mt-30 sm:mt-0 relative z-10 flex min-h-screen w-full items-center justify-center px-1.25 py-16 px-5 sm:px-4 md:px-5 lg:px-0">
        <div className="w-full max-w-205.25">
          <div className="text-center">
            <AnimateOnView from="left">
              <h1 className="text-[30px] leading-9.5 font-normal text-white sm:text-[40px] sm:leading-12.5 lg:text-[60px] lg:leading-18.75">
                Giải pháp thiết kế
              </h1>
            </AnimateOnView>
            <AnimateOnView from="right">
              <h1 className="text-[30px] leading-9.5 font-normal text-white sm:text-[40px] sm:leading-12.5 lg:text-[60px] lg:leading-18.75">
                toàn diện đến từ hongThai
              </h1>
            </AnimateOnView>
          </div>

          <AnimateOnView className="mt-4 sm:mt-5 lg:mt-6 text-center">
            <h2 className="text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-[23.4px]">
              Sở hữu website tốc độ cao, tối ưu trải nghiệm người dùng và tương
              thích mọi thiết bị để biến
            </h2>
            <h2 className="text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-[23.4px]">
              mỗi lượt truy cập thành một khách hàng tiềm năng
            </h2>
          </AnimateOnView>

          <div className="mx-auto mt-6 flex w-full flex-col gap-4 sm:mt-8 sm:gap-5 lg:mt-6 lg:flex-row lg:gap-6">
            <div className="flex w-full flex-col gap-4 lg:w-57.25">
              <AnimateOnView className="rounded-[20px] bg-white-cus-300 p-4 sm:p-5 lg:rounded-3xl">
                <div className="flex items-center gap-2.5">
                  <AnimateOnView duration={300} delay={500}>
                    <p className="text-base leading-5 font-semibold text-black sm:text-lg sm:leading-[22.5px]">
                      Hơn 100 dự án
                    </p>
                  </AnimateOnView>

                  <AnimateOnView duration={500} delay={700}>
                    <Image
                      src={"/images/star.png"}
                      width={56}
                      height={60}
                      alt="star"
                      className="h-10.5 w-10 sm:h-15 sm:w-14"
                    />
                  </AnimateOnView>
                </div>

                <AnimateOnView duration={400} delay={600}>
                  <p className="mt-3 text-[48px] leading-15font-normal text-green-cus-400 sm:mt-4 sm:text-[64px] sm:leading20 lg:text-[80px] lg:leading-25">
                    100+
                  </p>
                </AnimateOnView>
              </AnimateOnView>

              <AnimateOnView
                from="left"
                className="flex max-w-37.5 items-center gap-3.25 rounded-xl bg-white-cus-300 p-4 sm:p-5"
              >
                <IconCircle className="shrink-0 text-green-cus-200" />
                <div className="flex flex-1 flex-col gap-1.75">
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                </div>
              </AnimateOnView>

              <AnimateOnView
                from="right"
                className="ml-8 flex max-w-37.5 items-center gap-3.25 rounded-xl bg-white-cus-300 p-4 sm:ml-15 sm:p-5"
              >
                <IconCircle className="shrink-0 text-green-cus-300" />
                <div className="flex flex-1 flex-col gap-1.75">
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                </div>
              </AnimateOnView>
            </div>

            {/* Center column */}
            <div className="flex w-full flex-col lg:flex-1">
              <AnimateOnView from="down" duration={300} delay={500}>
                <button className="mx-auto flex w-fit items-center justify-center gap-2 rounded-3xl bg-green-cus-200 px-5 py-3 text-sm leading-5 font-medium text-black-cus-300 transition-all duration-700 hover:scale-[1.02] sm:px-6 sm:text-base">
                  Báo giá ưu đãi
                  <IconArrowRightVerTwo />
                </button>
              </AnimateOnView>

              <AnimateOnView className="mt-6 flex flex-col gap-4 rounded-2xl bg-white-cus-300 p-4 sm:mt-8 sm:gap-5 sm:p-5 lg:mt-10 lg:gap-6">
                <AnimateOnView from="right" duration={300} delay={500}>
                  <p className="text-lg leading-[22.5px] font-semibold text-center bg-[#FFF] py-2 px-2.5 rounded-3xl">
                    Tỷ lệ khách hàng hài lòng: 95%
                  </p>
                </AnimateOnView>

                <AnimateOnView from="left" duration={300} delay={500}>
                  <p className="text-[48px] leading-15 font-semibold text-green-cus-400 sm:text-[64px] sm:leading-20 lg:text-[80px] lg:leading-25">
                    95%
                  </p>
                </AnimateOnView>

                <AnimateOnView from="right" duration={300} delay={500}>
                  <Image
                    className="mt-2 h-auto w-full rounded-2xl object-cover sm:mt-4 lg:mt-7"
                    src={"/images/image-hongthai-marketing-herosection.webp"}
                    width={1000}
                    height={1000}
                    quality={100}
                    alt="hongthai marketing hero"
                  />
                </AnimateOnView>
              </AnimateOnView>
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-53.75">
              <AnimateOnView className="herosection-item-3 rounded-[20px] p-4 sm:p-5">
                <AnimateOnView
                  duration={300}
                  delay={500}
                  className="flex items-center justify-between gap-1 bg-white/20 py-2 px-2.5 rounded-3xl"
                >
                  <IconArrowRight className="shrink-0 text-white" />
                  <span className="text-lg leading-[22.5px] font-semibold text-white sm:text-[18px] sm:leading-[22.5px]">
                    10+ngành hàng
                  </span>
                </AnimateOnView>
                <AnimateOnView duration={400} delay={600}>
                  <p className="mt-4 text-[48px] leading-15 font-medium text-white sm:text-[64px] sm:leading-20 lg:text-[80px] lg:leading-25">
                    10+
                  </p>
                </AnimateOnView>
              </AnimateOnView>

              <AnimateOnView
                from="right"
                className="flex max-w-37.5 items-center gap-3.25 rounded-xl bg-white-cus-300 p-4 sm:p-5"
              >
                <IconCircle className="shrink-0 text-green-cus-200" />
                <div className="flex flex-1 flex-col gap-1.75">
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                </div>
              </AnimateOnView>

              <AnimateOnView
                from="left"
                className="ml-8 flex max-w-37.5 items-center gap-3.25 rounded-xl bg-white-cus-300 p-4 sm:ml-15 sm:p-5"
              >
                <IconCircle className="shrink-0 text-green-cus-300" />
                <div className="flex flex-1 flex-col gap-1.75">
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                  <div className="h-3 w-full rounded-2xl bg-white-cus-200" />
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
