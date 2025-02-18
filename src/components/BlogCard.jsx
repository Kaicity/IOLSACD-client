import React from "react";
import { motion } from "framer-motion";
import { fadeInFramer } from "../helper/fadeInFramer.js";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  imageUrl,
  title,
  subTitle,
  content,
  showBtn,
  btnContent,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
      id="blog-product"
    >
      <div className="md:w-11/12 lg:w-3/4 mx-auto flex flex-col md:flex-row md:justify-between items-center gap-12">
        <motion.div
          className="md:w-3/5 mx-auto"
          variants={fadeInFramer("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className=" border-1 border-red-400 border-l-4">
            <h2 className="text-3xl font-extrabold text-brandSecondary mx-2 mb-2">
              {title}
            </h2>
            <h2 className="text-base font-light px-2 text-neutralDGrey mb-4  border-b-2">
              {subTitle}
            </h2>
          </div>

          <div className="text-black text-md leading-6 mb-8">{content}</div>

          {showBtn && (
            <button
              onClick={() => navigate(path)}
              className="rounded-md block ml-auto px-4 py-2 bg-brandSecondary text-white hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4"
            >
              {btnContent}
            </button>
          )}
        </motion.div>

        <motion.div
          variants={fadeInFramer("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={imageUrl} alt="" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogCard;
