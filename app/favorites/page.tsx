import prisma from "@/lib/db"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation"
import { NoItem } from "../components/NoItem";
import { ListCart } from "../components/ListCart";
import { Item } from "@radix-ui/react-dropdown-menu";

async function getData(userId: string){
     const data = await prisma.favorite.findMany({
where:{id:userId},
select:{
   Home:{
    select:{
        id:true,
        description:true,
        photo:true,
        Favorite:true,
        price:true,
        country:true,
        

    }
   }
}
     })
     return data
}


export default async function FavoriteRoute(){
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) return redirect("/")
    const data = await getData(user.id)
    return(
   <section className="container mx-auto px-5 lg:px-10 mt-10">

<h2 className="text-3xl font-semibold tracking-tight">
 
    Pagina de favoritos
</h2>
{data.length===0 ? (<NoItem title="Pagina Favoritos" description="Estas na pagina dos favoritos"/>):(
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
            {data.map((item)=>(
                <ListCart key={item.Home?.id} description={item.Home?.description as string}
                price={item.Home?.price as number} location={item.Home?.country as string}
                pathname="/favorites" homeId={item.Home?.id as string}
                imagePath={item.Home?.photo as string} isInFavorite={item.Home?.Favorite.length as number> 0 ?true:false}
                favoriteId={item.Home?.Favorite[0].id as string} userId={item.Home?.id as string}/>
            ))}
        </div>
    )}

   </section>
        )
}