import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

export default function () {
    return(
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className='font-bold text-4xl py-12 text-center'>Business</h1>
                    <div className="flex flex-col gap-6">
                        {Post()}
                        {Post()}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                
                </div>
                <div className="item">
                <h1 className='font-bold text-4xl py-12 text-center'>Travel</h1>
                <div className="flex flex-col gap-6">
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>

                </div>
            </div>
        </section>
    )
}

function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex-col justify-start">
                <Link href="/"><Image src={"/images/img1.jpg"}  width={300} height={250} className="rounded" /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href="/">Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href="/">-May 2023</Link>
                </div>
                <div className="title">
                    <Link className="text-xl font-bold text-gray-800 hover:text-gray-600" href="/">Enim proident proident Lorem nulla aliquip sunt laboris. </Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}
 