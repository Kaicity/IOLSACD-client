import { Logo } from "../assets/index";

const LogoWrapper = () => {
  return (
    <div className="hidden 2xl:block absolute w-[200px] h-[142px] bg-slate-50 top-[1px] left-[400px] -translate-x-1/2 z-50 items-center justify-center">
      <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
    </div>
  );
};

export default LogoWrapper;
