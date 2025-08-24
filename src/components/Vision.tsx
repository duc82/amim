import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      id="vision"
      className="bg-vision bg-center bg-cover bg-no-repeat h-screen flex items-center justify-center mb-10"
    >
      <div>
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#165BB8] uppercase font-inter font-bold text-sm flex items-center justify-center space-x-1.5 mb-4 lg:text-base lg:font-semibold"
        >
          <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
          <span>Tầm nhìn</span>
          <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
        </motion.div>
        <div className="px-7 max-w-[961px] mx-auto">
          <motion.h2
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-bold leading-[1.2] text-[#011942] lg:text-[42px]"
          >
            Ami&M xây dựng{" "}
            <span className="bg-linear-[-84deg] from-[#328AE2] to-[#FF0D39] bg-clip-text text-transparent">
              hệ sinh thái đa ngành phát triển nhanh và bền vững
            </span>{" "}
            trên hành trình kiến tạo sự thịnh vượng đích thực!
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
