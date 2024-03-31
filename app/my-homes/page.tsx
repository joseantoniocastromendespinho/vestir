import prisma from "@/lib/db"

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NoItem } from "../components/NoItem";
import { ListCart } from "../components/ListCart";


async function getData(userId:string){
    const data = await prisma.home.findMany({
        where: {userId:userId,
            addedCategory:true,
            addedDescription:true,
            addedLocation:true  
        },
        select:{
            id:true,
            country:true,
            photo:true,
            description:true,
            price:true,
                Favorite:{
                    where:{userId:userId}
                }
        },
        orderBy:{createdAt:"desc"}
    }
    )
    return data
}
export  default async function MyHomes(){
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) return redirect("/")
    const data = await getData(user?.id)
    return (
      <section className="container mx-auto px-5 lg:px-10 mt-10">
<h2 className="text-3xl font-semibold tracking-tight">Your Homes</h2>
{data.length === 0 ? (<NoItem title="Home page" description="Descrição home page"/>):
(
    <div className="grid lg:grid-cols-4 gap-8 mt-8">
        {data.map((item)=>
        <ListCart key={item.id} imagePath={item.photo as string} description={item.description as string}
        location={item.country as string} price={item.price as number} homeId={item.id} userId={user.id}
        isInFavorite={item.Favorite.length > 0  ? true : false} pathname="my-homes" favoriteId={item.Favorite[0]?.id}/>
   ) }
    </div>
)}
      </section>
        )
}