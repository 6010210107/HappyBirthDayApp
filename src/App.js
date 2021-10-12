import "./App.css";
import { Header, Bressing, Footer } from "./components";
import "aos/dist/aos.css";

const text = {
  header: "สุขสันต์วันเกิดนุ้งมด",
  bress1: "แก่ขึ้นอีกปีแล้ว ทำไมมันเหมือนไม่แก่เลยวะ 5555",
  bress2:
    "เราขอให้เธอมีความสุขมากๆนะ หลังจากวันนี้และตลอดไปเลย ขอให้เจอแต่สิ่งดีๆเข้ามาในชีวิต อะไรที่มันไม่ดีก็ไม่ต้องไปยุ่งกับมันและไม่ต้องเข้ามาหาเธอด้วยนะ เพี้ยงๆ",
  bress3:
    "เป็นคนที่น่ารักสดใส บ่นมาก งุ้งงิ้ง กุ้งกิ้ง ปุ้งปิ้ง ชิ้งๆ ต่อไปนะ 5555",
  bress4:
    "คิดถึงโมเม้นออกไปหาข้าวกินอีกจังเลยยยย หวังว่าจะมีวันนั้นอีกนะ มั้ง 5555",
};
function App() {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const isValidDate = date === "2021-10-12";

  function ShowTheContent() {
    if (!isValidDate) {
      return (
        <div className="wrong-date-container">
          <h1>เข้ามาผิดวันแล้ว วะฮ่าๆๆๆ</h1>
        </div>
      );
    }
    return (
      <div className="App bg ">
        <Header />
        <div className="bress-container">
          <Bressing
            text={text.header}
            duration={1000}
            delay={500}
            bold={true}
            large={true}
          />
          <Bressing text={text.bress1} duration={1000} delay={500} />
          <Bressing text={text.bress2} duration={1000} delay={500} />
          <Bressing text={text.bress3} duration={1500} delay={500} />
          <Bressing text={`.`} duration={1500} delay={500} />
          <Bressing text={`.`} duration={1500} delay={500} />
          <Bressing text={`.`} duration={1500} delay={500} />
          <Bressing text={`.`} duration={1500} delay={500} />
          <Bressing text={text.bress4} duration={1500} delay={500} />
        </div>
        <Footer />
      </div>
    );
  }

  return <ShowTheContent />;
}

export default App;
