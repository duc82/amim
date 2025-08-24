export default function Footer() {
  return (
    <footer className="relative bg-linear-to-t from-[#102A4D] from-0% via-[#191868] via-100% to-[#191868] to-100% pt-6 pb-16 lg:pb-24 px-2.5 lg:px-4 xl:px-[100px] lg:pt-[75px] overflow-hidden">
      <div className="grid grid-cols-1 items-center lg:grid-cols-6 text-white">
        <div className="lg:col-span-2 mb-8">
          <a href="/" className="mb-6 inline-block text-left lg:mb-20">
            <img
              src="logo.png"
              alt="Logo"
              className="mr-auto mb-2 w-[142px] lg:w-[198px]"
            />
            <p className="font-bold text-[8.84px] lg:text-xs lg:leading-[1.2] mb-2 lg:mb-3">
              Creating true prosperity together
            </p>
          </a>
          <h6 className="uppercase mb-4 font-bold text-xs text-white/45 tracking-widest ml-2.5 lg:text-sm">
            Đăng ký nhận thông tin từ Ami&m
          </h6>
          <div className="relative lg:max-w-[412px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập Email của bạn"
              className="border border-white/[26%] bg-inherit w-full rounded-full px-6 py-4 placeholder:text-xs placeholder:font-semibold placeholder:font-inter placeholder:text-white/[58%] focus:outline-0 focus:border-white transition lg:pl-8 lg:py-5 lg:placeholder:text-sm pr-[120px]"
            />
            <button
              type="button"
              className="absolute top-1/2 right-1.5 -translate-y-1/2 font-inter text-xs font-semibold w-[100px] h-11 lg:h-12 lg:right-2 lg:text-sm bg-linear-[103deg] from-[#2B67B8] to-[#7A44D1] rounded-full"
            >
              Đăng ký
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:col-span-4">
          <div>
            <h6 className="uppercase mb-4 font-bold text-xs text-white/45 tracking-widest">
              Khám phá
            </h6>
            <ul className="font-inter text-sm leading-7 xl:text-base xl:font-bold">
              <li>
                <a href="#" className="inline-block">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#about" className="inline-block">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#dictionary" className="inline-block">
                  Từ điển Ami&M
                </a>
              </li>
              <li>
                <a href="#recruitment" className="inline-block">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#news" className="inline-block">
                  Tin tức
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase mb-4 font-bold text-xs text-white/45 tracking-widest">
              Mạng xã hội
            </h6>
            <ul className="font-inter text-sm leading-7 xl:text-base xl:font-bold">
              <li>
                <a href="https://linkedin.com" className="inline-block">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="inline-block">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="inline-block">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 mt-6 lg:mt-0 lg:col-span-2">
            <h6 className="col-span-4 hidden lg:block uppercase mb-4 font-bold text-xs text-white/45 tracking-widest">
              Liên hệ
            </h6>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-2">
              <div className="grid col-span-2 lg:grid-cols-5 lg:col-span-4">
                <h6 className="lg:col-span-1 uppercase mb-1.5 font-bold text-xs text-white/45 tracking-widest whitespace-nowrap xl:text-sm xl:leading-6 xl:mb-0 xl:normal-case xl:text-white/[62%]">
                  Địa chỉ
                </h6>

                <a
                  href="https://maps.app.goo.gl/wcJ6AfYD1VCY91kv7"
                  target="_blank"
                  className="col-span-2 lg:col-span-4 font-inter text-sm leading-7 xl:text-base xl:leading-6 xl:font-bold max-w-[318px]"
                >
                  Số 14 phố Đỗ Hành, phường Nguyễn Du, quận Hai Bà Trưng, thành
                  phố Hà Nội
                </a>
              </div>

              <div className="grid lg:grid-cols-5 lg:col-span-4">
                <h6 className="lg:col-span-1 uppercase mb-1.5 font-bold text-xs text-white/45 tracking-widest whitespace-nowrap xl:text-sm xl:leading-6 xl:mb-0 xl:normal-case xl:text-white/[62%]">
                  Điện thoại
                </h6>
                <a
                  href="tel:+842432012889"
                  className="lg:col-span-4 font-inter text-sm leading-7 xl:text-base xl:leading-6 xl:font-bold"
                >
                  (+84) 243 201 2889
                </a>
              </div>

              <div className="grid lg:grid-cols-5 lg:col-span-4">
                <h6 className="lg:col-span-1 uppercase mb-1.5 font-bold text-xs text-white/45 tracking-widest whitespace-nowrap xl:text-sm xl:leading-6 xl:mb-0 xl:normal-case xl:text-white/[62%]">
                  Email
                </h6>
                <a
                  href="mailto:info@amigroup.com.vn"
                  className="lg:col-span-4 font-inter text-sm leading-7 xl:text-base xl:leading-6 xl:font-bold"
                >
                  Info@amigroup.com.vn
                </a>
              </div>

              <div className="grid col-span-2 lg:grid-cols-5 lg:col-span-4">
                <h6 className="lg:col-span-1 uppercase mb-1.5 font-bold text-xs text-white/45 tracking-widest whitespace-nowrap xl:text-sm xl:leading-6 xl:mb-0 xl:normal-case xl:text-white/[62%]">
                  Website
                </h6>
                <a
                  href="https://amigroup.com.vn"
                  target="_blank"
                  className="lg:col-span-4 font-inter text-sm leading-7 xl:text-base xl:leading-6 xl:font-bold"
                >
                  amigroup.com.vn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src="/footer-vector.png"
        alt="Vector"
        className="absolute -bottom-[100px] left-0"
      />
      <img
        src="/footer-vector-2.png"
        alt="Vector 1"
        className="absolute size-16 -right-[27px] bottom-[420px] lg:size-auto lg:-right-[8%]"
      /> */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-r from-[#328AE2] to-[#ff0d39] p-2.5 lg:px-10 flex items-end justify-between text-xs font-semibold text-white/60">
        <span className="hidden lg:inline"></span>
        <span className="leading-3.5 lg:leading-5">
          © 2024 <br className="lg:hidden" /> Ami&M. All rights reserved.
        </span>
        <span className="leading-3.5 lg:leading-5">
          Design by OKHUB Agency.
        </span>
      </div>
    </footer>
  );
}
