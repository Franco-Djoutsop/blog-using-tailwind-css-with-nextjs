import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function section3() {
    return(
        <section className="container mx-auto md:px-20 py-16">
            <h1 className='font-bold text-4xl py-12 text-center'>Most  Popular</h1>

            {/* swiper */}
            <Swiper
                slidesPerView={2}
                >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>

        </section>
    )
}

function Post() {
    return(
        <div className='grid '>
            <div className='images'>
                <Link href={"/"}>
                    <Image src={'/images/img1.jpg'} width={500} height={350} alt='image here'/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href="/">Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href="/">-May 2023</Link>
                </div>
                <div className="title">
                    <Link className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600" href="/">Enim proident proident Lorem nulla aliquip sunt laboris. </Link>
                </div>
                <p className="text-gray-500 py-3 ">laborum eu aliquip ea est do esse sit aute ad consequat culpa sed Excepteur deserunt deserunt.non sint esse aute proident non ullamco fugiat incididunt cillum cillum amet Excepteur consectetur Excepteur Excepteur et. labore ipsum labore cillum sint sed occaecat tempor est aute amet commodo eu adipiscing est sed aliqua sunt.</p>
                <Author></Author>
            </div>
        </div>
    )
}