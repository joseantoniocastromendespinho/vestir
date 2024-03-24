"use client"
import Link from "next/link"
import { categoryItems } from "../lib/CategoryItens"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { cn } from "@/lib/utils"
export function MapFilterItens(){
    const searchParams = useSearchParams()
    const search = searchParams.get("search")
    const pathname = usePathname()
    
    const createQuery = useCallback((name:string,value:string)=>{
        const paramns = new URLSearchParams(searchParams.toString())
        paramns.set(name,value)
        return paramns.toString()
    },[searchParams])
    return(
        <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll">
            {categoryItems.map((items) => (
                <Link href={pathname + '?' + createQuery('search',items.name)}
                 className={cn(search===items.name ? 'border-b-2 border-black pb-2 flex-shrink-0':'opacity-70 flex-shrink-0',
                 'flex flex-col gap-y-3 items-center'
                 )}
                 key={items.id}>
                    <div className="relative w-6 h-6">
                    <Image src={items.imageUrl} alt={items.title} className="w-6 h-6"
                    width={24}
                    height={24}/>
                    </div>
                    <p className="text-xs font-medium">{items.title}</p>
                </Link>
            ))

            }
        </div>
        )
}