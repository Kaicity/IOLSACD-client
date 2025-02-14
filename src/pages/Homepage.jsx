import BlogCard from "../components/BlogCard";

import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import { Blogcard_1 } from "../assets";

function HomePage() {
  const nagivate = useNavigate();

  return (
    <div>
      <Slider />
      {/* <Community /> */}

      <BlogCard
        path={"/products"}
        imageUrl={Blogcard_1}
        title={
          <>
            DẪN ĐẦU CÔNG NGHỆ AI{" "}
            <span className="text-brandSecondary font-semibold">
              TRONG LĨNH VỰC CÔNG NGHỆ THÔNG TIN
            </span>{" "}
          </>
        }
        content={
          <>
            <p>
              …Mỗi một sự vật, hiện tượng ra đời đều mang trong đó một câu
              chuyện….
            </p>
            <br />
            <p>
              Ben Thanh law được thành lập vào ngày 29/12/2006 tại quận Bình
              Thạnh với tên gọi Văn phòng Luật sư Bến Thành.
            </p>
            <br />
            <p>
              Ngày 08/04/2022 được chuyển đổi thành Công Luật Trách nhiệm Hữu
              hạn Bến Thành được điều hành bởi Luật sư Đỗ Ngọc Anh.
            </p>
            <br />
            <p>
              Chúng tôi gửi lời cảm ơn và tri ân đến cố Luật sư Trần Hữu Nhân đã
              tin tưởng và trao tặng thương hiệu Công ty tới đội ngũ Luật sư
              chúng tôi. Bến Thành Law với biểu tượng chợ Bến Thành, mang trong
              đó sự lắng đọng của đất và người Sài Thành với tinh thần cởi mở và
              sự phong lưu, phóng khoáng, nghĩa hiệp cùng với sự tin tưởng…”
            </p>
          </>
        }
        showBtn={true}
        btnContent="Xem sản phẩm"
      />

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16"></div>
    </div>
  );
}

export default HomePage;
