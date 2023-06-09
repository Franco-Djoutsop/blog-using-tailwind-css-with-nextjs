import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

export default function section1(){
    const {data, isLoading, isError} = fetcher('api/trending')
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition:'right'
    }
    return(
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                
                <Swiper
                    slidesPerView={1}
                    autoplay={
                        {delay:3000}
                    }
                    loop={true}
                    >
                    {
                        data.map((value, index)=>(
                            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

function Slide({data}){
    const {id,category,title,img,published,author, description}=data
    return(
        <div className="grid md:grid-cols-2 gap-x-10">
            <div className="image">
                <Link href={`/posts/${id}`}><Image src={img || "/"}  width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={`/posts/${id}`}>{category || 'Unknown'}</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={`/posts/${id}`}>-{published || "Unknown"}</Link>
                </div>
                <div className="title">
                    <Link className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600" href={`/posts/${id}`}>{title} </Link>
                </div>
                <p className="text-gray-500 py-3 ">{description || "description"}</p>
                {author? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}