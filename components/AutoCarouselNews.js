'use client';
import { Carousel } from 'react-bootstrap';

export default function AutoCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide1.jpg" // 第1張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-900 font-bold opacity-100">商模官網組:</h3>
          <p className="pt-2 text-gray-900 opacity-100">「我們從思考社區問題開始，投入大量時間進行專案構想，最終確立了以「鳳梨幣」促進社區互助的計畫。整個過程中，我們不僅要確保其可行性，還需處理技術上的挑戰。尤其在網頁上的語法錯誤和新技術的應用成為了最大的難題。許多時候我們必須花費數天時間來排查錯誤，但透過團隊間的合作、查詢資料以及尋求外部資源的幫助，我們逐步克服了這些技術障礙。這次專案不僅讓我們對網頁技術有了更深入的了解，還提升了團隊協作的能力。當「鳳梨幣」最終成功完成的那一刻，所有的努力都化為滿滿的成就感，並激勵我們勇敢迎接未來的挑戰。」</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide1.jpg" // 第1張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-900 font-bold opacity-100">商模動畫組:</h3>
          <p className="pt-2 text-gray-900 opacity-100">「我們團隊在動畫製作過程中緊密合作，從腳本撰寫、畫面安排、台詞創意設計，到動畫軟體的編排、AI語音的篩選以及音樂的整合，各個環節都有專業成員參與，確保品質一致。此次的配樂由具有音樂經驗的成員負責，為動畫創作統一風格中帶有微妙變化的旋律，這對團隊是一個新的挑戰，也深化了我們對動畫製作的理解，並啟發了日後更多創作靈感。」</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide2.jpg" // 第2張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-900 font-bold opacity-100">技術組:</h3>
          <p className="pt-2 text-gray-900 opacity-100">「在籌備金融科技展的過程中，每週例行會議不僅確認內容方向與進度，更要求每位成員在各自負責的領域中不斷提升技術知識。透過與商業模型團隊的密切溝通與反覆修正，確保最終呈現的UI/UX符合預期效果。這不僅是技術層面的挑戰，也展現了跨部門合作的價值，讓團隊共同致力於呈現創新且友好的使用者體驗，體現金融科技的實際應用與未來潛力。」</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide3.jpg" // 第3張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-900 font-bold opacity-100">美宣組:</h3>
          <p className="pt-2 text-gray-900 opacity-100">「在確立專案核心價值後，美宣團隊將商模組的構想圖像化，過程中經過不斷的修正與調整，運用各種風格來凸顯鳳梨幣的價值。並於展覽中設計各類文宣小物及手拿板以達到宣傳效果。非常感謝美宣團隊的每一個人，沒有大家的集思廣益就不會有那麼優質的設計。也希望為來美宣團隊能繼續帶來更多出色的作品。」</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide1.jpg" // 第4張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-900 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-900 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide2.jpg" // 第5張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-900 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-900 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      
    </Carousel>
  );
}
