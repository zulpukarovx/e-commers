"use-client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Product from "./Product";

const PopularProdCarousel = ({ products }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-products-slider mb-8"
    >
      {products.map((prod) => {
        return (
          <SwiperSlide key={prod._id}>
            <Product product={prod} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularProdCarousel;
