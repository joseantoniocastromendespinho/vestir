"use client"
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function Counter({name}:{name:string}){
    const [amout,setAmout] = useState(0);
    return(
    <div className="flex items-center gap-x-4">
        <input type="hidden" name={name} value={amout}/>
<Button variant="outline" size="icon" type="button" onClick={()=>{if(amout >0)
    setAmout(amout-1)}}>
    <Minus className="h-4 w-4 text-primary"/>
</Button>
<p className="font-bold">{amout}</p>
<Button variant="outline" size="icon" type="button" onClick={()=>setAmout(amout+1)}>
    <Plus className="w-4 h-4 text-primary" />
</Button>
    </div>
    )
}