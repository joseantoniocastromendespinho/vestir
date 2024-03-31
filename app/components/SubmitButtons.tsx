"use client"
import { Button } from "@/components/ui/button"
import { Heart, Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButtons(){
    const {pending} = useFormStatus()
    return(
    <>
    {pending ? (
        <Button disabled size="lg">
            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
            Plese wait</Button> 
    ):(
        <Button type="submit" size="lg">Next</Button> 
    )}
    </>
    )
}

export function AddFavoriteButton(){
    const {pending} = useFormStatus()
    return(
        <>
        {pending ?
        (<Button variant="outline" size="icon" className="bg-primary-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary"/>
        </Button>):
        (
            <div>
<Button variant="outline" size="icon" className="bg-primary-foreground" type="submit">
<Heart className="w-4 min-h-4"/>
</Button>

            </div>)
}
        </>
    )
}
export function DeleteFromFavoriteButton(){
    const {pending} = useFormStatus()
    return(
        <>
        {pending ?
        (<Button variant="outline" size="icon" className="bg-primary-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary"/>
        </Button>):
        (
            <div>
<Button variant="outline" size="icon" className="bg-primary-foreground" type="submit">
<Heart className="w-4 min-h-4 text-primary" fill="#E21C49"/>
</Button>

            </div>)
}
        </>
    )

}