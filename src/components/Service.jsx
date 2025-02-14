import apps from "../assets/icons/apps.png";
import coding from "../assets/icons/coding.png";
import immersive from "../assets/icons/immersive.png";
import startup from "../assets/icons/startup.png";
import ipsum from "../assets/icons/ipsum.png";
import sosos from "../assets/icons/sosos.png";

const Service = () => {
  return (
    <div className="md:px-14 px-4 py-6 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-2">
          Khách hàng của chúng tôi
        </h2>
        <p className="text-neutralDGrey">
          Chúng tôi đã được sự tin tưởng khi trao đổi mua bán với{" "}
          <span className="text-brandPrimary">500+ triệu</span> khách hàng
        </p>
      </div>

      {/* Dich vu item img */}
      <div className="my-12 flex flex-wrap items-center justify-between gap-8">
        <img className="" src={apps} alt="" />
        <img className="" src={startup} alt="" />
        <img className="" src={ipsum} alt="" />
        <img className="" src={coding} alt="" />
        <img className="" src={immersive} alt="" />
        <img className="" src={sosos} alt="" />
      </div>
    </div>
  );
};

export default Service;
