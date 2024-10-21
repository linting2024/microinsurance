'use client';
import { Carousel } from 'react-bootstrap';

export default function AutoCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} style={{ height: '30vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-25"
          src="/images/slide1.jpg" // 第1張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-600 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-600 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000} style={{ height: '30vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-25"
          src="/images/slide2.jpg" // 第2張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-600 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-600 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000} style={{ height: '30vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-25"
          src="/images/slide3.jpg" // 第3張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-600 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-600 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000} style={{ height: '30vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-25"
          src="/images/slide1.jpg" // 第4張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-600 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-600 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000} style={{ height: '30vh' }}>
        <img
          className="d-block w-100 h-60 object-cover opacity-25"
          src="/images/slide2.jpg" // 第5張圖片
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '30%', transform: 'translateY(-50%)' }}>
          <h3 className="text-gray-600 font-bold opacity-100">名字</h3>
          <p className="pt-2 text-gray-600 opacity-100">「心得」</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}
