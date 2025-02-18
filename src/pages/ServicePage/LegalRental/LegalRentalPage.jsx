import {div} from "framer-motion/client";
import {SiZalo} from "react-icons/si";
import ItemKnowledge from "../../../components/KnowledgeSection/ItemKnowledge";
import Paragraph from "../../../components/Paragraph";

export default function LegalRentalPage() {
  const cardData = [
    {
      img: "https://picsum.photos/200?random=1",
      header: "Quy định về người đại diện hợp pháp trong tố tụng dân sự - ILC",
      content:
        "Cơ quan, tổ chức, cá nhân khởi kiện để bảo vệ quyền và lợi ích hợp pháp của người khác cũng là người đại diện theo pháp luật trong tố tụng dân sự của người được bảo vệ. Người đại diện trong tố tụng dân sự bao gồm người đại diện theo pháp luật và người đại diện theo ủy quyền. Dưới đây là các thông tin cần thiết giúp bạn đọc hiểu rõ hơn về vai trò của đại diện tố tụng. Hãy cùng Ben Thanh Law tìm hiểu nhé!",
    },
    {
      img: "https://picsum.photos/200?random=2",
      header: "Tiêu đề Card 2",
      content: "Nội dung cho card thứ 2.",
    },
    {
      img: "https://picsum.photos/200?random=3",
      header: "Tiêu đề Card 3",
      content: "Nội dung cho card thứ 3.",
    },
    {
      img: "https://picsum.photos/200?random=4",
      header: "Tiêu đề Card 4",
      content: "Nội dung cho card thứ 4.",
    },
  ];

  const paragraphs = [
    {
      text: "Công ty Luật TNHH Ben Thanh Law là một trong những đơn vị hàng đầu trong lĩnh vực pháp lý tại Việt Nam.",
      img: "https://picsum.photos/600/400?random=1", // Có ảnh
    },
    {
      text: "Đội ngũ nhân sự của chúng tôi bao gồm những luật sư và chuyên viên tư vấn pháp lý có trình độ chuyên môn cao.",
    }, // Không có ảnh
    {
      text: "Với đội ngũ nhân sự chuyên nghiệp là những luật sư có trình độ chuyên môn cao, sở hữu kiến thức chuyên sâu.",
      img: "https://picsum.photos/600/400?random=2", // Có ảnh
    },
    {
      text: "Chúng tôi luôn sẵn sàng hỗ trợ khách hàng 24/7 và mong muốn trở thành đối tác tin cậy.",
    }, // Không có ảnh
  ];

  return (
    <div className="w-3/4 mx-auto grid md:grid-cols-[2fr_1fr] gap-2 relative">
      <div className="border-r border-black p-4 space-y-4">
        <h1 className="font-semibold text-xl py-2">Giới Thiệu</h1>

        <div className="space-y-6">
          {paragraphs.map((item, index) => (
            <Paragraph key={index} img={item.img}>
              {item.text}
            </Paragraph>
          ))}
        </div>

        <div className="mt-4 font-semibold text-xl">
          {" "}
          <h1 className="mb-4 ">Chia sẽ</h1>
          <div className=" text-white w-24 text-base h-8 flex rounded-sm justify-center items-center my-2 ">
            <img
              src="https://bizweb.dktcdn.net/100/472/913/themes/888429/assets/addthis-zalo.svg?1725935235961"
              className="w-12 h-12 p-1"
              alt=""
            />
            <img
              src="https://themayanagari.com/wp-content/uploads/2020/09/Facebook-Logo-Png-Image-Free-Download.jpg"
              className="w-12 h-12 p-1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" relative py-2">
        <div className="sticky top-20 bottom-20 right-10 w-full">
          <h1 className="font-semibold text-xl py-2 text-red-600">
            Dịch vụ khác
          </h1>
          <div className="grid grid-rows-3 w-full gap-4">
            {cardData.map((card, index) => (
              <div key={index}>
                <ItemKnowledge {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
