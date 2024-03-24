import { Skeleton } from "@/components/ui/skeleton";

export function Esqueleto(){
    return(
        <div className="flex flex-col space-y-3">
                <Skeleton className="h-72 w-full rounded-lg"/>
                <div className="space-y-2 flex flex-col">
                        <Skeleton className="h-4 w-full"/>

                </div>
        </div>
        )
}