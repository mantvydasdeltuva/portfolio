import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/gallery.css";

export default function Gallery({
  images
}: Readonly<{
  images: string[];
}>): JSX.Element {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full rounded-lg border border-background shadow-sm"
    >
      {images.map((src) => (
        <SwiperSlide key={src}>
          <img src={src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
