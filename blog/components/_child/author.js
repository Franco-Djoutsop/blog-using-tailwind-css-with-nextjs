import Image from "next/image"
import Link from "next/link"

export default function author({name, img, designation}){
    if(!name && !img) return <></>

    return(
        <div className="author flex py-5">
            <Image src={img || '/'} width={50} height={50} alt="profile" className="rounded-full"/>
            <div className="flex flex-col justify-center px-4">
                <Link href="/" className="text-md font-bold text-gray-800 hover:text-gray-600">
                    {name || 'Not Name'}
                </Link>
                <span className="text-sm to-gray-500">{designation || "Unknown"}</span>
            </div>
        </div>
    )
}