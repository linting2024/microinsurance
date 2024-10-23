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
          <h3 className="text-gray-900 font-bold opacity-100">鍾念欣:</h3>
          <p className="pt-2 text-gray-900 opacity-100">「我們從思考社區問題開始，投入大量時間進行專案構想，最終確立了以「鳳梨幣」促進社區互助的計畫。整個過程中，我們不僅要確保其可行性，還需處理技術上的挑戰。尤其在網頁上的語法錯誤和新技術的應用成為了最大的難題。許多時候我們必須花費數天時間來排查錯誤，但透過團隊間的合作、查詢資料以及尋求外部資源的幫助，我們逐步克服了這些技術障礙。這次專案不僅讓我們對網頁技術有了更深入的了解，還提升了團隊協作的能力。當「鳳梨幣」最終成功完成的那一刻，所有的努力都化為滿滿的成就感，並激勵我們勇敢迎接未來的挑戰。」</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-10"
          src="/images/slide2.jpg" // 第2張圖片
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
          src="/images/slide3.jpg" // 第3張圖片
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
      </Carousel.Item>
      
    </Carousel>
  );
}
