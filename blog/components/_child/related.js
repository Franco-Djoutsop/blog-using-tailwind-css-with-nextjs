import Image from "next/image"
import Link from "next/link"
import Author from "./author"
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

export default function Related() {
    const {data, isLoading, isError} = fetcher('api/trending')
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>
    return(
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1>
            <div className="flex flex-col gap-10">
                {
                    data.map((index,value)=>{
                        <Post key={index} data={value}></Post>
                    })
                }
            </div>
        </section>
    )
}

function Post({data}){
    const {id,author, title, category, published}=data
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`posts/${id}`}><Image src={img || '/'}  width={250} height={200} className="rounded" /></Link></div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={`posts/${id}`}>{category || "Not Category"}</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={`posts/${id}`}>-{published || "Unknown"}</Link>
                </div>
                <div className="title">
                    <Link className="text-xl font-bold text-gray-800 hover:text-gray-600" href={`posts/${id}`}>{title}</Link>
                </div>
                {author? <Author {...author}></Author> : <></>}
            </div>
        </div>
        
    )
}