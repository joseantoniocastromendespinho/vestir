import prisma from "@/lib/db"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
async function getData(homeId:string){
    const data = await prisma.home.findUnique({
        where:{
            id:homeId
        },
        select:{
            photo:true,
            description:true,
            guests:true,
            batrooms:true,
            bedrooms:true,
            title:true,
            categoryName:true,
            price:true,

        }
    })
    return data
}

export default async function HomeRoute({params}:{params:{id:string,name:string}}){
const data = await getData(params.id)
console.log("os parametros"+params.id)
  return (
    <div className="w-[75%] mx-auto mt-10">
        <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
        <div>
            
        </div>
    </div>
  ) 

}