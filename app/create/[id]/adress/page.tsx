"use client"
import { createLocation } from "@/app/actions";
import { CreateButtomBar } from "@/app/components/CreateButtomBar";
import { UseCoutries } from "@/app/lib/GetCountries";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function AdressPage({params}:{params:{id:string}}){
    const LazyMay = dynamic(()=> import('@/app/components/Map'),{ssr: false,loading:()=><Skeleton className="h-[50vh] w-full"/>})
    const {getCoutries} = UseCoutries()
    const [location,setLocation] = useState('')
    return(
        <>
        <div className="w-3/5 mx-auto mb-36">
            <h2 className="text-3xl font-semibold mb-10">Here is you location</h2>
        </div>
        <form action={createLocation}>
            <input type="hidden" name="id" value={params.id}/>
            <input type="hidden" name="country" value={location}/>
        <div className="w-3/5 mx-auto">
            <div className="mb-5">
                <Select required onValueChange={(value)=>setLocation(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleciona um pais?"/>

                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Pais</SelectLabel>
                            {getCoutries().map((item)=>(<SelectItem key={item.value} value={item.value}>{item.flag} {item.label}{item.region}</SelectItem>))}
                           
                        </SelectGroup>

                    </SelectContent>

                </Select>

            </div>
            <LazyMay location={location}/>

        </div>
        <CreateButtomBar/>
        </form>

        </>
        )
}