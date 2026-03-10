import Image from "next/image";
import { benefits } from "./common/data";
import AnimateOnView from "../animations/motion-wrapper";

export function MarketingSection() {
  const delays = [100, 300, 500, 700, 900];
  const durations = [300, 500, 700, 900, 1000];

  return (
    <section className="relative w-full bg-white py-12 xl:py-25 overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-6xl 2xl:max-w-7xl px-5 md:px-6 xl:px-0">
        <div className="flex flex-col w-full md:w-1/2 pr-10">
          <div className="">
            <AnimateOnView duration={300} delay={500}>
              <h2 className="text-[50px] leading-15 font-semibold text-black-cus-300">
                Đồng hành toàn diện - Vận hành tối ưu
              </h2>
            </AnimateOnView>

            <AnimateOnView duration={500} delay={700} className="py-9">
              <p className="text-base leading-5 font-medium text-gray-cus-300">
                Quy trình hỗ trợ doanh nghiệp đảm bảo Website AI luôn hoạt động
                với hiệu suất cao nhất.
              </p>
            </AnimateOnView>
          </div>

          <div className="flex flex-wrap gap-4">
            <AnimateOnView from="right" duration={500} delay={700}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Nhận tư vấn ngay
                <span className="ml-2" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C11.3132 20 12.6136 19.7413 13.8268 19.2388C15.0401 18.7362 16.1425 17.9997 17.0711 17.0711C17.9997 16.1425 18.7362 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 -1.95685e-08 10 0C7.34784 3.95203e-08 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10.7856 14.1189C10.6824 14.2221 10.5599 14.304 10.4251 14.3599C10.2903 14.4158 10.1458 14.4446 9.99984 14.4447C9.85389 14.4447 9.70937 14.416 9.57452 14.3602C9.43966 14.3044 9.31712 14.2226 9.21389 14.1194C9.11065 14.0163 9.02875 13.8938 8.97285 13.759C8.91696 13.6242 8.88816 13.4797 8.88811 13.3337C8.888 13.039 9.00499 12.7563 9.21333 12.5478L10.65 11.1111H6.66667C6.37198 11.1111 6.08937 10.994 5.88099 10.7857C5.67262 10.5773 5.55556 10.2947 5.55556 10C5.55556 9.70532 5.67262 9.4227 5.88099 9.21433C6.08937 9.00595 6.37198 8.88889 6.66667 8.88889H10.6511L9.21445 7.45222C9.0061 7.24373 8.88912 6.96102 8.88922 6.66627C8.88932 6.37153 9.00651 6.0889 9.215 5.88056C9.42349 5.67221 9.7062 5.55523 10.0009 5.55533C10.2957 5.55543 10.5783 5.67262 10.7867 5.88111L14.12 9.21445C14.3283 9.42281 14.4453 9.70537 14.4453 10C14.4453 10.2946 14.3283 10.5772 14.12 10.7856L10.7867 14.1189H10.7856Z"
                    fill="white"
                  />
                </svg>
              </a>
            </AnimateOnView>

            <AnimateOnView from="right" duration={900} delay={1000}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-lime-400 bg-lime-100/60 px-6 py-2.5 text-sm font-semibold text-neutral-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-200"
              >
                Báo giá ưu đãi
                <span className="ml-2" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C11.3132 20 12.6136 19.7413 13.8268 19.2388C15.0401 18.7362 16.1425 17.9997 17.0711 17.0711C17.9997 16.1425 18.7362 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 -1.95685e-08 10 0C7.34784 3.95203e-08 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10.7856 14.1189C10.6824 14.2221 10.5599 14.304 10.4251 14.3599C10.2903 14.4158 10.1458 14.4446 9.99984 14.4447C9.85389 14.4447 9.70937 14.416 9.57452 14.3602C9.43966 14.3044 9.31712 14.2226 9.21389 14.1194C9.11065 14.0163 9.02875 13.8938 8.97285 13.759C8.91696 13.6242 8.88816 13.4797 8.88811 13.3337C8.888 13.039 9.00499 12.7563 9.21333 12.5478L10.65 11.1111H6.66667C6.37198 11.1111 6.08937 10.994 5.88099 10.7857C5.67262 10.5773 5.55556 10.2947 5.55556 10C5.55556 9.70532 5.67262 9.4227 5.88099 9.21433C6.08937 9.00595 6.37198 8.88889 6.66667 8.88889H10.6511L9.21445 7.45222C9.0061 7.24373 8.88912 6.96102 8.88922 6.66627C8.88932 6.37153 9.00651 6.0889 9.215 5.88056C9.42349 5.67221 9.7062 5.55523 10.0009 5.55533C10.2957 5.55543 10.5783 5.67262 10.7867 5.88111L14.12 9.21445C14.3283 9.42281 14.4453 9.70537 14.4453 10C14.4453 10.2946 14.3283 10.5772 14.12 10.7856L10.7867 14.1189H10.7856Z"
                    fill="black"
                  />
                </svg>
              </a>
            </AnimateOnView>
          </div>

          <div className="mt-10 space-y-0 border-t border-neutral-200 text-sm text-neutral-900 md:text-base">
            {benefits.map((item, index) => (
              <AnimateOnView
                key={index}
                duration={
                  (durations[index] as any) ?? durations[durations.length - 1]
                }
                delay={(delays[index] as any) ?? delays[delays.length - 1]}
                className="border-b border-neutral-200 py-4"
              >
                <div className="flex flex-col md:flex-row gap-7.5">
                  <h3 className="text-[20px] w-full md:min-w-40 md:max-w-40 leading-6.25 font-semibold">
                    {item.title}
                  </h3>
                  <p className="w-full max-w-none text-sm leading-relaxed text-neutral-700 md:w-2/3">
                    {item.description}
                  </p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>

      <AnimateOnView className="absolute inset-y-0 -right-10 hidden w-1/2 md:block">
        <Image
          src="/images/bg-section-comprehensive-support.webp"
          alt="Đội ngũ làm việc triển khai chiến lược marketing tại văn phòng"
          fill
          priority
          className="object-cover"
        />
      </AnimateOnView>

      <div className="mt-8 px-4 md:hidden">
        <AnimateOnView className="relative h-64 w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/bg-section-comprehensive-support.webp"
            alt="Đội ngũ làm việc triển khai chiến lược marketing tại văn phòng"
            fill
            priority
            className="object-cover"
          />
        </AnimateOnView>
      </div>
    </section>
  );
}
