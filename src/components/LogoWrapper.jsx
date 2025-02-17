import { Logo } from "../assets/index";

const LogoWrapper = () => {
  return (
    <div className="static xl:absolute xl:shadow-md w-full xl:w-[15%] xl:max-w-[200px] top-0 left-[calc((100vw_-_1210px)_/_2)] z-50">
      <div className="bg-white text-center">
        <a href="/">
          <img
            src={Logo}
            alt="CÔNG TY LUẬT BẾN THÀNH LAW"
            className="w-full h-[126px] object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default LogoWrapper;
