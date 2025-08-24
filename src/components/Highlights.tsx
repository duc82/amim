const milestones = [
  {
    value: "686 tỷ",
    label: "Tổng tài sản và Vốn chủ sở hữu",
    image: "/highlights-1.png",
  },
  { value: "93.9 tỷ", label: "Doanh thu thuần", image: "/highlights-2.png" },
  { value: "24,6 tỷ", label: "Lợi nhuận gộp", image: "/highlights-3.png" },
  { value: "20+", label: "Dự án trọng điểm", image: "/highlights-4.png" },
  {
    value: "03 văn phòng",
    label: "Trên các tỉnh thành",
    image: "/highlights-5.png",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative max-w-sm mx-auto p-6 flex flex-col lg:flex-row lg:items-start lg:max-w-none lg:py-0 lg:px-[50px] xl:px-[100px]"
    >
      {/* Heading */}
      <div className="mb-6 lg:mb-28 flex-1 lg:sticky lg:top-[150px] z-10">
        <div className="text-[#165BB8] font-bold font-inter text-sm uppercase flex items-center space-x-1.5 mb-1.5 lg:text-base lg:font-semibold">
          <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
          <span>TỪNG BƯỚC PHÁT TRIỂN</span>
        </div>
        <h1 className="text-[32px] font-bold tracking-tight bg-linear-[83deg] from-[#328AE2] to-[#FF0D39] bg-clip-text text-transparent mb-4 lg:text-4xl xl:text-[88px]">
          Dấu ấn Ami&M
        </h1>
        <p className="text-sm font-inter font-medium text-[#333333] leading-normal xl:text-lg lg:max-w-[527px]">
          Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những
          dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin cậy từ
          những Người đồng hành.
        </p>
      </div>

      {/* List */}
      <div className="flex-1">
        {milestones.map((item, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-6 lg:space-x-16 lg:border lg:border-[#EDEDED] lg:border-t-0 lg:last:border-b-0 lg:py-9 lg:px-10"
          >
            <div className="p-5 xl:p-10 rounded-full bg-[#FBFBFB]">
              <img
                src={item.image}
                alt="Image"
                className="size-10 xl:size-20"
              />
            </div>
            <div>
              <p className="font-inter text-2xl text-[#2A2B6B] font-bold bg-linear-[83deg] from-[#328AE2] to-[#FF0D39] bg-clip-text hover:text-transparent mb-1 xl:text-[68px] transition duration-500">
                {item.value}
              </p>
              <p className="text-sm font-inter font-medium text-[#646464] xl:text-lg xl:font-semibold">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
