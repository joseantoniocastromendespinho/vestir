"use client"
import {categoryItems} from "@/app/lib/CategoryItens"
import { Card, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
export function SelectCategoy(){
    const [selected,setSelect]= useState<string |undefined>(undefined)
    return(
        <div className="grid grid-cols-4 gap-8 mt-10 mx-auto mb-30">
            <input type="hidden" name="categoryName" value={selected as string}/>
{categoryItems.map((item)=>(
    <div key={item.id} className="cursor-pointer">
        <Card className={selected === item.name ? "border-primary" :""}
        onClick={()=>setSelect(item.name)}>
            <CardHeader>
                <Image src={item.imageUrl} alt={item.name} height={32} width={32} className="w-8 h-8"/>
            </CardHeader>
            <h3 className="font-medium">{item.title}</h3>
        </Card>

    </div>
))}
        </div>
    )
}