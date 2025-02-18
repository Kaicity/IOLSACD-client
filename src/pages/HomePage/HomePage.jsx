import BlogCard from "../../components/BlogCard";
import { useNavigate } from "react-router-dom";
import CarouselBanner from "../../components/layouts/CarouselBanner";
import { Banner, Blogcard_1 } from "../../assets";
import ContentSection from "../../components/ContentSection";
import ILCKnowledgeSection from "../../components/KnowledgeSection/ILCKnowledgeSection";
import SliderCardsItem from "../../components/SliderCardsItem";
import StatisticsSection from "../../components/StatisticsSection";

const servicesArray = [
  {
    img: "https://picsum.photos/200?random=1",
  },
  {
    img: "https://picsum.photos/200?random=2",
  },
  {
    img: "https://picsum.photos/200?random=3",
  },
  {
    img: "https://picsum.photos/200?random=4",
  },
  {
    img: "https://picsum.photos/200?random=5",
  },
  {
    img: "https://picsum.photos/200?random=6",
  },
  {
    img: "https://picsum.photos/200?random=7",
  },
];

function HomePage() {
  const nagivate = useNavigate();

  return (
    <div>
      <CarouselBanner />

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

      <SliderCardsItem isCard={true} isPrevNextBtn={true} />

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <img
          src={Banner}
          alt=""
          className="w-full h-auto max-h-[500px] object-cover rounded-md"
        />
      </div>

      <ContentSection
        header={"NHÀ PHÁT TRIỂN CỦA CHÚNG TÔI"}
        content={
          "Tính đến năm 2025 công nghệ trí tuệ nhân tạo AI phát triển mạnh mẽ"
        }
      />

      <SliderCardsItem isCardAvatar={true} isPrevNextBtn={true} />

      <div className="py-4 invisible">=========SPACING============</div>

      <ContentSection
        header={"KIẾN THỨC VỀ LUẬT"}
        content={"Cùng cộng đồng phát triển"}
      />

      <ILCKnowledgeSection />

      <div className="py-4 invisible">=========SPACING============</div>

      <ContentSection header={"VIDEO CLIP"} content={""} />

      <SliderCardsItem isCardVideo={true} isPrevNextBtn={false} />

      <div className="py-4 invisible">=========SPACING============</div>

      <ContentSection header={"ĐỐI TÁC KHÁCH HÀNG"} content={""} />

      {/* <Community /> */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <div className="flex items-center gap-4 px-16">
          {servicesArray.map((service, index) => (
            <div className="cursor-pointer">
              <img
                src={service.img}
                alt={""}
                className=" p-2 h-[110px] w-[200px] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <StatisticsSection />
    </div>
  );
}

export default HomePage;
