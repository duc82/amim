import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-about-mobile lg:bg-about lg:h-screen bg-no-repeat bg-bottom h-[150vh] bg-cover px-4.5 lg:px-24 py-20 text-white lg:flex lg:items-center"
    >
      <div>
        <motion.p
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
          className="text-white/60 lg:text-white uppercase font-bold text-sm mb-4 lg:font-semibold lg:mb-2"
        >
          • Công ty cổ phần tập đoàn AMI&M Việt Nam
        </motion.p>
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
          className="text-[40px] font-bold uppercase mb-6 lg:w-[450px] lg:text-5xl leading-[1.2]"
        >
          Khởi nguồn từ tình bằng hữu
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
          className="mb-[27px] font-medium text-sm font-inter lg:w-[400px] lg:text-base"
        >
          Bắt đầu từ năm 2005 - thời điểm những người bạn cùng chung chí hướng
          chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không
          ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.
        </motion.p>
        <motion.p
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
          className="mb-10 font-medium text-sm font-inter lg:w-[450px] lg:text-base"
        >
          Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó và
          kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM - AM,
          được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách
          và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình tin
          tưởng.
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
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-primary font-inter font-semibold text-xs rounded-full px-6 py-3.5 flex items-center space-x-2 lg:uppercase"
        >
          <span>Hành trình của Ami&M</span>
          <img src="/arrow-right.svg" alt="Arrow Right" className="-mt-0.5" />
        </motion.button>
      </div>
    </section>
  );
}
