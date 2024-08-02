import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import Container from "../../components/container/Container";
import m1 from '../../assets/booking/m1.jpeg';
import m2 from '../../assets/booking/m2.jpeg';
import m3 from '../../assets/booking/m3.jpeg';
import m4 from '../../assets/booking/m4.jpeg';
import m5 from '../../assets/booking/m5.jpeg';

const ImageGallery = () => {
    return (
        <Container>
            <div className="my-20">
                <div>
                    <h2 className="text-4xl font-bold uppercase">Image Gallery</h2>
                    <p className='text-xl text-[#818181] mt-2'>To give a glimpse of our creativity in organising Events</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mt-8"
                >
                    <SwiperSlide><img src={m1} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={m2} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={m3} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={m4} className="rounded-md h-80 object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={m5} className="rounded-md h-80 object-cover" /></SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default ImageGallery;