import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Author from './_child/author'
import getPost from '@/lib/helper'
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

export default function section2() {
    const {data, isLoading, isError} = fetcher('api/posts')
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    // getPost(1).then(res=>console.log(res))
    return(
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>
            {/* grid colums */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {
                    data.map((value, index) =>(
                        <Post data={value} key={index}></Post>
                    ))
                }
            </div>
        </section>
    )
} 

function Post({data}) {
    const {id,category,title,img,published,author}=data
    return(
        <div className='item'>
            <div className='images'>
                <Link href={`/posts/${id}`}>
                    <Image className='rounded' src={img || '/'} width={500} height={350} alt='image here'/>
                </Link>
            </div>
            <div className="info flex justify-center items-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={`/posts/${id}`}>{category || 'Unknown'}</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={`/posts/${id}`}>-{published || 'Unknown'}</Link>
                </div>
                <div className="title">
                    <Link className="text-xl font-bold text-gray-800 hover:text-gray-600" href={`/posts/${id}`}>{title || 'Unknown'} </Link>
                </div>
                <p className="text-gray-500 py-3 ">laborum eu aliquip ea est do esse sit aute ad consequat culpa sed Excepteur deserunt deserunt.non sint esse aute proident non ullamco fugiat incididunt cillum cillum amet Excepteur consectetur Excepteur Excepteur et. labore ipsum labore cillum sint sed occaecat tempor est aute amet commodo eu adipiscing est sed aliqua sunt.</p>
                {author? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}