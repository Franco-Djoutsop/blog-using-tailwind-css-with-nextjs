import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';

export default function section1(){

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
                        {delay:2000}
                    }
                    loop={true}
                    zoom={true}
                    >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide2()}</SwiperSlide>
                    <SwiperSlide>{Slide3()}</SwiperSlide>
                    <SwiperSlide>{Slide4()}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2 gap-x-10">
            <div className="image">
                <Link href="/"><Image src={"/images/img1.jpg"}  width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
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
function Slide2(){
    return(
        <div className="grid md:grid-cols-2 gap-x-10">
            <div className="image">
                <Link href="/"><Image src={"/images/img2.jpg"}  width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
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
function Slide3(){
    return(
        <div className="grid md:grid-cols-2 gap-x-10">
            <div className="image">
                <Link href="/"><Image src={"/images/img3.png"}  width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
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
function Slide4(){
    return(
        <div className="grid md:grid-cols-2 gap-x-10">
            <div className="image">
                <Link href="/"><Image src={"/images/img4.png"}  width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
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