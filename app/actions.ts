"use server"
import prisma from "@/lib/db"
import { supabase } from "@/lib/superbase"
import { redirect } from "next/navigation"

export async function createVestirHome({id}:{id:string}){
    const data = await prisma.home.findFirst(
    {
        where :{ userId:id},

        orderBy: {
          
            createdAt :"desc",
          },

    }
    
  
    
    )
   if(data==null){
    const data = await prisma.home.create({
        data :{
            userId:id
        }
    })
    return redirect(`/create/${data.id}/estrutura`)
}
    else if(!data.addedCategory && !data.addedDescription && !data.addedLocation){
        return redirect(`/create/${data.id}/estrutura`)
    
   } else if(data.addedCategory && !data.addedDescription){
      return redirect(`/create/${data.id}/description`)
   }
   else if(data.addedCategory && data.addedDescription && !data.addedLocation){
    return redirect(`/create/${data.id}/adress`)
   }
   else if(data.addedCategory && data.addedDescription && data.addedLocation){
    const data = await prisma.home.create({
        data :{
            userId:id
        }
    })
   }
  
    
}
export async function createCategoryPage(form:FormData){
    const categoryName = form.get("categoryName") as string
    const idHome = form.get("idHome") as string
    const data = await prisma.home.update({
        where:{id:idHome},
        data:{categoryName:categoryName,
               addedCategory:true}
    })
    return redirect(`/create/${idHome}/description`)
}

export async function createDescription(formData:FormData){
    const idHome = formData.get('idHome') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const price = formData.get('price')
    const imageFile = formData.get('foto')  as File

  
   
    const rooms = formData.get('rooms')as string
    const bedroons = formData.get('badroons') as string
    const guest = formData.get('guest') as string
   
    //const cleanedFileName = `${imageFile.name.replace(/\s+/g, "-")}-${Date.now()}`;
    
    const { data,error } = await supabase.storage
    .from("images")
    .upload(`${Math.random()}${imageFile.name}`, imageFile, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

console.log(data);
if (error) console.error("Upload error", error);
const dataHome = await prisma.home.update({
    where:{id:idHome},
    data:{
        title:title,
        description:description,
        price:Number(price),
        bedrooms:bedroons,
        batrooms:rooms,
        guests:guest,
        photo:data?.path,
        addedCategory:true

    }
})

return redirect(`/create/${idHome}/adress`)
}

export async function createLocation(formData:FormData){
    const id = formData.get('id') as string
    const countryValue = formData.get('countryValue') as string

    const data = await prisma.home.update({
        
            where:{id:id}
        ,
        data:{
            addedLocation:true,
            country:countryValue
            }
        })
        return redirect("/");
    }
export async function addFavorite(formDada: FormData){

    const homeId = formDada.get("homeId") as string
    const userId = formDada.get("userId") as string

    const date = await prisma.favorite.create(
        {
            data:{
                    userId:userId,
                    homeId:homeId
            },

        }


    )

}