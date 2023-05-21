import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function section3() {

    const {data, isLoading, isError} = fetcher('api/popular')
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return(
        <section className="container mx-auto md:px-20 py-16">
            <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>

            {/* swiper */}
            <Swiper
                breakpoints={{
                    640:{
                        slidesPerView:2,
                        spaceBetween:30
                    }
                }}
                >
                {
                    data.map((value,index)=>(
                        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

function Post({data}) {
    const {id, title,subtitle,category, description, img,published, author}=data
    return(
        <div className='grid'>
            <div className='images'>
                <Link href={`/posts/${id}`}><Image src={img || "/"} width={600} height={400} alt='image here'/></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={`/posts/${id}`}>{category || "Unknown"}</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={`/posts/${id}`}>-{published || "Unknown"}</Link>
                </div>
                <div className="title">
                    <Link className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600" href={`/posts/${id}`}>{title || "Unknown"}</Link>
                </div>
                <p className="text-gray-500 py-3 ">{description || "description"}</p>
                {author? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}