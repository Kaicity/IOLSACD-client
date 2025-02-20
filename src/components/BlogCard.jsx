import React from "react";
import {motion} from "framer-motion";
import {fadeInFramer} from "../helper/fadeInFramer.js";
import {useNavigate} from "react-router-dom";

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
    <div className=" max-w-7xl mx-auto md:w-3/4" id="blog-product">
      <div className="flex flex-wrap items-center gap-12">
        <motion.div
          className="md:w-1/2 px-2"
          variants={fadeInFramer("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.5}}
        >
          <div className=" border-1 border-red-400 border-l-4">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-brandSecondary mx-2 mb-2">
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
        <div>
          <motion.div
            variants={fadeInFramer("up", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.5}}
          >
            <img src={imageUrl} alt="" className="w-3/4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
