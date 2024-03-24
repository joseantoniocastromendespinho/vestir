import Image from "next/image";
import Link from "next/link";
import DesktopImage from "@/public/airbnb-desktop.png"
import MobileImage from "@/public/airbnb-mobile.webp"
import { UserNav } from "./UserNav";


export function Navbar(){
    return(
    <nav className="w-full border-0">
     <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
            <Link href="/">
                <Image src={DesktopImage} alt="Imagem do logo"   className="w-32 hidden lg:block"/>
                <Image src={MobileImage} alt ="Imagem do logo" className="block lg:hidden w-12"/>
            </Link>
            <div className="rounded-full border px-5 py-2">
        <h1>Search</h1>
            </div>
            <UserNav/>
     </div>
    </nav>
)}