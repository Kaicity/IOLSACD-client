import React from "react";
import StatisticItem from "./StatisticsItem";
import { motion } from "framer-motion";
import { fadeInFramer, slideInLeft } from "../helper/fadeInFramer.js";

const statisticsData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa8c7e7ac6d05a684c8c89629c9774fa24658d7b3a4df86fac4f48921d52766a?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
    value: 2000,
    label: "Máy xúc đã bán",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b081c75d377203c89d017354ec51d8df2227b7ded6a709df5dd7a2c36bc88b7?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
    value: 500,
    label: "Dự án hoàn thành",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b4ed6f6101ec71213f980ad4aa121f8c3d3097e5ae83780579749854a2b13c1?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
    value: 1950000,
    label: "Giờ vận hành",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/722fbd87c1b2ca1f1b9dfcadf5d5e4bcfb0265069581864252df444bb8a7f7d8?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
    value: 5000000,
    label: "Khách hàng hài lòng",
  },
];

function StatisticsSection() {
  return (
    <section
      className="flex flex-wrap gap-10 justify-between items-center px-28 py-16 bg-slate-100 max-md:px-5"
      id="rating"
    >
      <motion.div
        className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[540px] max-md:max-w-full"
        variants={slideInLeft(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="overflow-hidden max-w-full text-4xl font-semibold leading-10 text-brandPrimary w-[408px]">
          Mang đến sự{" "}
          <span className="text-brandPrimary">đổi mới cho ngành xây dựng</span>
        </h2>
        <p className="mt-2 text-base text-zinc-900 max-md:max-w-full">
          Chúng tôi đạt được thành công nhờ nỗ lực và cam kết cung cấp các sản
          phẩm máy xúc hiện đại và chất lượng cao.
        </p>
      </motion.div>

      <motion.div
        className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full"
        variants={fadeInFramer("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex overflow-hidden flex-wrap gap-8 items-center whitespace-nowrap max-md:max-w-full">
          {statisticsData.slice(0, 2).map((item, index) => (
            <StatisticItem key={index} {...item} />
          ))}
        </div>
        <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-10 max-md:max-w-full">
          {statisticsData.slice(2).map((item, index) => (
            <StatisticItem key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default StatisticsSection;
