'use client';
import { Carousel } from 'react-bootstrap';

export default function AutoCarousel() {
  return (
    <Carousel>
      {/* <Carousel.Item interval={3000} style={{ height: '100vh' }}> */}
      <Carousel.Item interval={3000} style={{ height: 'auto' }}>
        <img
          className="w-100 lg:max-w-screen-xl lg:h-screen lg:object-cover object-contain"
          src="/images/slide1.jpg" // 第一張圖片
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First Slide Label</h3> */}
          {/* <p>First Slide Description</p> */}
        </Carousel.Caption>
      
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: 'auto' }}>
        <img
          className="w-100 lg:max-w-screen-xl lg:h-screen lg:object-cover object-contain"
          src="/images/slide2.jpg" // 第二張圖片
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second Slide Label</h3>
          <p>Second Slide Description</p> */}
        </Carousel.Caption>
      
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: 'auto' }}>
        <img
          className="w-100 lg:max-w-screen-xl lg:h-screen lg:object-cover object-contain"
          src="/images/slide_3.jpg" // 第三張圖片
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third Slide Label</h3>
          <p>Third Slide Description</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
