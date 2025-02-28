import BlogCard from "../../components/BlogCard";
import {useNavigate} from "react-router-dom";
import CarouselBanner from "../../components/layouts/CarouselBanner";
import {Banner, Blogcard_1} from "../../assets";
import ContentSection from "../../components/ContentSection";
import ILCKnowledgeSection from "../../components/KnowledgeSection/ILCKnowledgeSection";
import SliderCardsItem from "../../components/SliderCardsItem";
import StatisticsSection from "../../components/StatisticsSection";
import SliderCounterparty from "../../components/SliderCounterparty";

const servicesArray = [
  {
    id: 1,
    img: "https://picsum.photos/200?random=1",
  },
  {id: 2, img: "https://picsum.photos/200?random=2"},
  {
    id: 3,
    img: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    img: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    img: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    img: "https://picsum.photos/200?random=6",
  },
  {
    id: 7,
    img: "https://picsum.photos/200?random=7",
  },
  {
    id: 8,
    img: "https://picsum.photos/200?random=6",
  },
  {
    id: 9,
    img: "https://picsum.photos/200?random=7",
  },
  {
    id: 10,
    img: "https://picsum.photos/200?random=6",
  },
  {
    id: 11,
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
        title={
          "Viện Khoa học pháp lý và Phát triển doanh nghiệp (Institute of Legal Science and Corporate Development - ILC)"
        }
        subTitle={"CÔNG CUỘC - PHÁT TRIỂN - ĐỔI MỚI"}
        content={
          <>
            <p>
              Là đơn vị trực thuộc thứ 29 của Hiệp hội Doanh nghiệp nhỏ và vừa
              Việt Nam (VINASME). Viện được thành lập năm 2024 với chức năng,
              nhiệm vụ chính như sau: Nghiên cứu khoa học về luật pháp và kinh
              doanh trong nước và quốc tế; Nghiên cứu các định chế thương mại
              của các tổ chức quốc tế; Nghiên cứu khoa học và thực hiện các đề
              tài, dự án liên quan pháp luật, tài chính, đầu tư, kinh doanh
              thương mại, quản trị doanh nghiệp, kinh tế số và trí tuệ nhân tạo,
              nguồn nhân lực và quản lý rủi ro.
            </p>
            <br />
            <p>
            Bên cạnh hoạt động nghiên cứu, Viện còn thực hiện các dịch vụ KH&CN:
            </p>
            <ul>
              <li>- Xây dựng dự án cố vấn pháp lý cho các DNNVV tại Việt Nam. </li>
              <li>- Tư vấn và xây dựng các đề án chuyển đổi số, công nghệ thông tin để hỗ trợ các DNNVV tại Việt Nam.</li>
              <li>- Tư vấn tài chính và hỗ trợ DNNVV tiếp cận vốn tín dụng ưu đãi.</li>
              <li>- Đào tạo, bồi dưỡng các kiến thức pháp luật và kỹ năng quản trị doanh nghiệp, quản trị nhân sự, chuyển đổi số.</li>
              <li>- Đào tạo, bồi dưỡng cấp chứng chỉ về môi giới bất động sản; quản lý, vận hành chung cư.</li>
            </ul>
            <br />
            <p>
              "Chúng tôi gửi lời cảm ơn và tri ân đến cố Luật sư Trần Hữu Nhân đã
              tin tưởng và trao tặng thương hiệu Công ty tới đội ngũ Luật sư
              chúng tôi. ILC với biểu tượng ILC, mang trong
              đó sự lắng đọng của đất và người Sài Thành với tinh thần cởi mở và
              sự phong lưu, phóng khoáng, nghĩa hiệp cùng với sự tin tưởng…"
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

      <SliderCounterparty servicesArray={servicesArray} />

      <StatisticsSection />
    </div>
  );
}

export default HomePage;
