import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Author from './_child/author'
export default function section2() {
    return(
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>
            {/* grid colums */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
} 

function Post() {
    return(
        <div className='item'>
            <div className='images'>
                <Link href={"/"}>
                    <Image className='rounded' src={'/images/img2.jpg'} width={500} height={350} alt='image here'/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href="/">Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href="/">-May 2023</Link>
                </div>
                <div className="title">
                    <Link className="text-xl font-bold text-gray-800 hover:text-gray-600" href="/">Enim proident proident Lorem nulla aliquip sunt laboris. </Link>
                </div>
                <p className="text-gray-500 py-3 ">laborum eu aliquip ea est do esse sit aute ad consequat culpa sed Excepteur deserunt deserunt.non sint esse aute proident non ullamco fugiat incididunt cillum cillum amet Excepteur consectetur Excepteur Excepteur et. labore ipsum labore cillum sint sed occaecat tempor est aute amet commodo eu adipiscing est sed aliqua sunt.</p>
                <Author></Author>
            </div>
        </div>
    )
}