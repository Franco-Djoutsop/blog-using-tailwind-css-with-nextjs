import { ImTwitter,ImFacebook,ImYoutube } from "react-icons/im";
import Link from "next/link";

export default function () {
    return(
        <div className="flex gap-6">
            <Link href="#"><ImFacebook color="888888"/></Link>
            <Link href="#"><ImTwitter color="888888"/></Link>
            <Link href="#"><ImYoutube color="888888"/></Link>
        </div>
    )
}
 