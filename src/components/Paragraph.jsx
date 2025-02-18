const Paragraph = ({ children, img }) => {
    return (
      <div className="text-base">
        <p>{children}</p>
        {img && <img src={img} alt="" className="h-[550px] w-full my-4" />}
      </div>
    );
  };
  
  export default Paragraph;
  