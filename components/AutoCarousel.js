'use client';
import { Carousel } from 'react-bootstrap';

export default function AutoCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} style={{ height: '100vh' }}>
        <img
          className="d-block w-100 h-100 object-cover"
          src="/images/slide1.jpg" // 第一張圖片
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          {/* <p>First Slide Description</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: '100vh' }}>
        <img
          className="d-block w-100 h-100 object-cover"
          src="/images/slide2.jpg" // 第二張圖片
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Second Slide Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: '100vh' }}>
        <img
          className="d-block w-100 h-100 object-cover"
          src="/images/slide3.jpg" // 第三張圖片
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Third Slide Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
