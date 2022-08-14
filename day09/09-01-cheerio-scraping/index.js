import axios from "axios";
import cheerio from "cheerio";

async function createMessage() {
  // 1. 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기
  // 2. 해당 문장을 axios.get으로 요청해서 html 코드 받아오기 => 스크래핑
  const result = await axios.get("https://www.naver.com");
  // console.log(result.data);

  // 3. 스크래핑 결과에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")?.includes("og:")) {
      // optional chaining
      const key = $(el).attr("property"); // og:title, og:description, ....
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
}

createMessage();
