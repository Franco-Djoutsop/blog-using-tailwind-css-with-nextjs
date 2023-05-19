import Icons from "./_child/icons"
import Newsletter from "./_child/newsletter"
import Link from "next/link"

export default function footer(){
    const bg={
        background: "url('images/footer.png') no-repeat",
        backgroundPosition: "bottom right"
    }
    return(
        <footer className="bg-gray-50" style={bg}>
            <Newsletter></Newsletter>
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Icons></Icons>
                    </div>
                    <p className="py-5 text-gray-400">Copyright @2023 All rights reserved | This template is made with by <Link href={"https://github.com/Franco-Djoutsop/"} className="hover:text-red-600">Franck Le Futé</Link></p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </footer>
    )
}