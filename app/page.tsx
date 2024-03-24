import { Suspense } from "react";
import { ListCart } from "./components/ListCart";
import { MapFilterItens } from "./components/MapFilterItens";
import prisma from "@/lib/db";
import { Esqueleto } from "./components/Esqueleto";
import { NoItem } from "./components/NoItem";

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

async function getData({ searchParams,userId}: {userId:string | undefined; searchParams?:{search:string;};}){

  const data = await prisma.home.findMany({
    where:{   addedCategory:true,
              addedDescription:true,
              addedLocation:true,
              categoryName:searchParams?.search ?? undefined,
            },
             
              select:{
                photo:true,
                id:true,
                price:true,
                description:true,
                country:true,
                Favorite:{
                  where:{userId:userId ?? undefined}
                }
               
              }
  })
  return data
}


export default  function Home({
  searchParams}: {searchParams?:{search:string}
}) {
  console.log(searchParams?.search)
  
  
 
  return (
 <div className="container mx-auto px-5 lg:px-10">
<MapFilterItens/>
<Suspense key={searchParams?.search} fallback={<EsqueletoLoading/>}>
<ShowItems searchParams={searchParams}/>
</Suspense>

 </div>
  );

  

}




async function ShowItems({searchParams,}: {searchParams?: {search: string;};}) {
 
 const {getUser} = getKindeServerSession()
 const user = await getUser()
  const data = await getData({ searchParams: searchParams,userId:user?.id})

  return (
    <>
       {data.length==0 ? (<NoItem/>):(<div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-8 mt-8">
        {data.map((item)=>(<ListCart key={item.id} description={item.description as string}
        imagePath={item.photo as string} price={item.price as number} location={item.country as string}
        userId={user?.id}
        favoriteId={item.Favorite[0]?.id} isInFavorite={item.Favorite.length >0 ? true : false}
        />))}
       </div>)}
    </>
  );
}

function EsqueletoLoading(){
  return (
       <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-8 mt-8">
       <Esqueleto/>

        </div>
  )
}


