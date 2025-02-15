import BlogCard from "../../components/BlogCard";

import { useNavigate } from "react-router-dom";
import CarouselBanner from "../../components/CarouselBanner";
import { Banner, Blogcard_1 } from "../../assets";
import ContentSection from "../../components/ContentSection";
import SliderCardsItem from "../../components/SliderCardsItem";

function HomePage() {
  const nagivate = useNavigate();

  return (
    <div>
      <CarouselBanner />
      {/* <Community /> */}
      <div className="py-4 invisible">=========SPACING============</div>
      <BlogCard
        path={"/products"}
        imageUrl={Blogcard_1}
        title={"DẪN ĐẦU CÔNG NGHỆ AI 2025"}
        subTitle={"CÔNG CUỘC - PHÁT TRIỂN - ĐỔI MỚI"}
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
        btnContent="Xem thêm"
      />

      <div className="py-4 invisible">=========SPACING============</div>

      <ContentSection
        header={"DỊCH VỤ KHÁCH HÀNG"}
        content={
          "Tiên phong cung cấp giải pháp pháp lý tổng thể và đồng hành cùng doanh nghiệp"
        }
      />

      <SliderCardsItem isCard={true} />

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <img
          src={Banner}
          alt=""
          className="w-full h-auto max-h-[500px] object-cover rounded-md"
        />
      </div>

      <ContentSection
        header={"KHÁM PHÁ CÔNG NGHỆ"}
        content={
          "Tính đến năm 2025 công nghệ trí tuệ nhân tạo AI phát triển mạnh mẽ"
        }
      />

      <SliderCardsItem isCardAvatar={true} />

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16"></div>
    </div>
  );
}

export default HomePage;
