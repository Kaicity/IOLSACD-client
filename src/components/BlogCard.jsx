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
      className="max-w-7xl w-full px-2 md:w-3/4 mx-auto my-8"
      id="blog-product"
    >
      <div className="flex flex-col flex-wrap md:flex-row md:justify-between items-center gap-12">
        <motion.div
          className="md:w-3/4 mx-auto"
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
          
          <p className="text-black text-md leading-6 mb-8">{content}</p>

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
