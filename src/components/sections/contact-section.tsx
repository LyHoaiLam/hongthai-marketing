"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none ring-0 focus:border-lime-400 focus:bg-white focus:ring-2 focus:ring-lime-200";

export function ContactSection() {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    email: "",
    domain: "",
    businessNeed: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        setMessage({
          type: "error",
          text: json.error || "Gửi thất bại. Vui lòng thử lại.",
        });
        return;
      }

      setMessage({
        type: "success",
        text: "Gửi thành công! Chúng tôi sẽ liên hệ sớm.",
      });
      setFormData({
        customerName: "",
        phoneNumber: "",
        email: "",
        domain: "",
        businessNeed: "",
        note: "",
      });
    } catch {
      setMessage({ type: "error", text: "Có lỗi xảy ra. Vui lòng thử lại." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const update =
    (key: keyof typeof formData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };
  return (
    <section id="contact" className="w-full bg-[#041722] py-20 text-white">
      <div className="mx-auto w-full flex max-w-6xl 2xl:max-w-7xl flex-col gap-10 px-5 md:px-6 xl:px-0 md:flex-row md:items-stretch">
        {/* Left content */}
        <div className="flex flex-1 flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center text-lime-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                  className="h-10 w-10"
                >
                  <g clipPath="url(#clip0_40_3040)">
                    <path
                      d="M54.8925 36.9765L37.0174 29.9908L55.0478 23.0052C55.9804 22.6947 56.6021 21.608 56.4469 20.6766C56.136 18.6585 55.2034 16.7956 54.1151 15.088C53.1825 13.2252 51.939 11.6728 50.385 10.2757C49.6076 9.65474 48.5198 9.65474 47.7424 10.2757L32.6652 22.3842L35.7739 3.29C36.0848 2.20334 35.463 1.27192 34.5304 0.961442C32.6652 0.185255 30.4891 -0.125217 28.4684 0.0300204C26.4478 -0.125217 24.2717 0.185255 22.4065 0.961442C21.4739 1.27192 20.8521 2.35858 21.163 3.29L24.2717 22.3842L9.19448 10.2757C8.41729 9.49949 7.32926 9.49949 6.55208 10.2757C4.99774 11.5176 3.75424 13.2252 2.82164 15.088C1.57815 16.7956 0.800974 18.6585 0.33467 20.6766C0.179235 21.7633 0.800977 22.6947 1.73359 23.0052L19.4532 29.9908L1.42272 36.9765C0.490106 37.287 -0.131631 38.3737 0.0238041 39.3052C0.334674 41.3231 1.11185 43.1861 2.35533 44.8935C3.28794 46.7565 4.53142 48.309 6.08576 49.7059C6.86295 50.3269 7.95101 50.3269 8.72816 49.7059L23.8054 37.5975L20.6967 56.6917C20.3858 57.7785 21.0076 58.7096 21.9402 59.1754C23.9608 59.7964 25.9815 60.1069 28.0021 59.9516C30.0228 60.1069 32.1989 59.7964 34.0641 59.1754C34.9967 58.8649 35.6185 57.7785 35.3076 56.6917L32.1989 37.5975L47.2763 49.7059C48.0533 50.3269 49.1415 50.3269 50.0741 49.7059C51.6281 48.4642 52.8716 46.9117 53.8043 45.0487C55.0478 43.3414 55.8251 41.4784 56.2912 39.4605C56.4469 38.2185 55.9804 37.287 54.8925 36.9765Z"
                      fill="#9DFF71"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_40_3040">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h2 className="text-[40px] font-semibold leading-tight md:text-[48px]">
                <span>Liên Hệ Với</span>
                <br />
                <span>Chúng Tôi</span>
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-sm md:text-base">
            <p>Info@hongthaix.com</p>
            <p>Thứ 2 - Thứ 6 | 09:00 - 18:00</p>
            <div className="h-px w-24 bg-white/40" />
            <p className="text-white/80">
              Địa chỉ: 58 Huỳnh Mẫn Đạt, Phường Thạnh Mỹ Tây
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="flex-1">
          <div className="rounded-3xl bg-white p-6 text-sm text-neutral-900 shadow-xl md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {message && (
                <div
                  className={`rounded-md px-3 py-2 text-sm ${
                    message.type === "success"
                      ? "bg-lime-100 text-lime-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wide text-neutral-600">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    placeholder="Tên khách hàng"
                    value={formData.customerName}
                    onChange={update("customerName")}
                    className={inputClass}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wide text-neutral-600">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Số điện thoại"
                    value={formData.phoneNumber}
                    onChange={update("phoneNumber")}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wide text-neutral-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={update("email")}
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wide text-neutral-600">
                    Lĩnh vực
                  </label>
                  <input
                    type="text"
                    name="domain"
                    placeholder="Tên lĩnh vực"
                    value={formData.domain}
                    onChange={update("domain")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wide text-neutral-600">
                  Nhu cầu doanh nghiệp <span className="text-red-500">*</span>
                </label>
                <select
                  name="businessNeed"
                  value={formData.businessNeed}
                  onChange={update("businessNeed")}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>
                    Chọn nhu cầu
                  </option>
                  <option value="Thiết kế Landing Page">
                    Thiết kế Landing Page
                  </option>
                  <option value="Website Doanh nghiệp">
                    Website Doanh nghiệp
                  </option>
                  <option value="Website Bán hàng (E-commerce)">
                    Website Bán hàng (E-commerce)
                  </option>
                  <option value="Nâng cấp/Sửa chữa Website cũ">
                    Nâng cấp/Sửa chữa Website cũ
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wide text-neutral-600">
                  Ghi chú thêm
                </label>
                <textarea
                  name="note"
                  rows={3}
                  placeholder="Ghi chú yêu cầu"
                  value={formData.note}
                  onChange={update("note")}
                  className={inputClass + " resize-none"}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Đang gửi..." : "NHẬN TƯ VẤN NGAY"}
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
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
