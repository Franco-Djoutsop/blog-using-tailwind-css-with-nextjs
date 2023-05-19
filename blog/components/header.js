import Icons from "./_child/icons";
import Link from "next/link";

export default function header(){
    return(
        <header className="bg-blue-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input className="input-text" type="text" placeholder="search" />
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link className="font-bold uppercase text-3xl" href="#">Design</Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Icons></Icons>
                </div>
                </div>
            </div>
        </header>
    )
}