import {div} from "framer-motion/client";
import {SiZalo} from "react-icons/si";
import ItemKnowledge from "../../../components/KnowledgeSection/ItemKnowledge";

export default function TeamPage() {
  const Paragraph = ({children}) => <p className="text-base">{children}</p>;
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

  return (
    <div className="w-3/4 mx-auto grid md:grid-cols-[2fr_1fr] gap-2">
      <div className="border-r border-black p-4 space-y-4">
        <h1 className="font-semibold text-xl py-2">Đội Ngũ Nhân Sự</h1>

        <Paragraph>
          Công ty Luật TNHH Ben Thanh Law là một trong những đơn vị hàng đầu
          trong lĩnh vực pháp lý tại Việt Nam. Chúng tôi tự hào có một đội ngũ
          nhân sự tài năng và giàu kinh nghiệm trong lĩnh vực pháp luật, đảm bảo
          mang lại sự hài lòng và niềm tin cho khách hàng.
        </Paragraph>

        <Paragraph>
          Đội ngũ nhân sự của chúng tôi bao gồm những luật sư và chuyên viên tư
          vấn pháp lý có trình độ chuyên môn cao, sở hữu kiến thức chuyên sâu về
          các lĩnh vực pháp lý, đồng thời cũng có kinh nghiệm thực tế trong việc
          giải quyết các vấn đề pháp lý phức tạp của khách hàng.
        </Paragraph>

        <Paragraph>
          Với đội ngũ nhân sự chuyên nghiệp là những luật sư có trình độ chuyên
          môn cao, sở hữu kiến thức chuyên sâu và am hiểu sâu sắc về các lĩnh
          vực pháp lý; đồng thời các luật sư đã có kinh nghiệm thực tế trong
          việc giải quyết các vấn đề pháp lý phức tạp. Chúng tôi cam kết mang
          đến cho khách hàng những dịch vụ tư vấn pháp lý chuyên nghiệp và hiệu
          quả nhất, giúp khách hàng giảm thiểu chi phí và tối ưu hóa lợi nhuận.
        </Paragraph>

        <Paragraph>
          Thông qua các lĩnh vực hoạt động cốt lõi và đội ngũ nhân sự giàu kinh
          nghiệm, công ty Luật TNHH Bến Thành hy vọng sẽ mang lại cho khách hàng
          những giải pháp pháp lý tốt nhất và đáp ứng được những nhu cầu khắt
          khe nhất của khách hàng. Chúng tôi luôn sẵn sàng hỗ trợ khách hàng
          24/7 và mong muốn trở thành đối tác tin cậy và đồng hành cùng khách
          hàng trong suốt quá trình phát triển kinh doanh của họ.
        </Paragraph>

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

      <div className=" font-bold text-lg p-4 space-y-4">
      <h1 className="font-semibold text-xl py-2 text-red-600">Dịch vụ khác</h1>
      <div className="grid grid-rows-3 w-full gap-4">
          {cardData.map((card, index) => (
            <div key={index}><ItemKnowledge {...card}/></div>
          ))}
        </div>
      </div>
    </div>
  );
}
