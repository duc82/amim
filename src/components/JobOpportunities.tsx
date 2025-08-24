import { motion } from "framer-motion";

export default function JobOpportunities() {
  return (
    <section id="jobOpportunities">
      <div className="text-center px-2.5 py-8 lg:pt-[61px] relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#165BB8] uppercase font-inter font-bold text-sm flex items-center justify-center space-x-1.5 mb-1.5 lg:font-semibold lg:text-base"
        >
          <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
          <span>Đồng hành tiến bước</span>
          <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
        </motion.div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-[315px] lg:max-w-[630px] mx-auto font-bold text-2xl leading-[1.2] tracking-tight bg-linear-[83deg] from-[#328AE2] to-[#FF0D39] bg-clip-text text-transparent mb-6 lg:text-[50px]"
        >
          Chào đón bạn trở thành <br /> Người đồng hành tiếp theo!
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter font-medium text-sm leading-normal mb-6 max-w-[315px] lg:max-w-[580px] mx-auto lg:text-lg lg:tracking-tight"
        >
          Bạn thích một môi trường làm việc năng động, sáng tạo và gắn kết? Hãy
          ứng tuyển để trở thành thành viên trong gia đình Ami&M!
        </motion.p>
        <motion.button
          type="button"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-full py-3.5 px-6 font-inter text-xs font-semibold flex items-center justify-center bg-[#3E4089] text-white mx-auto space-x-2 lg:text-base lg:py-5 lg:px-8"
        >
          <span>Cơ hội việc làm</span>
          <img src="/arrow-right.svg" alt="Arrow Right" />
        </motion.button>
      </div>
      <img
        src="/job-opportunities.png"
        alt="Job Opportunities"
        className="lg:-mt-[250px] w-full"
      />
    </section>
  );
}
