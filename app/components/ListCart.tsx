import Image from "next/image"
import Link from "next/link"
import { UseCoutries } from "../lib/GetCountries"
import { AddFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButtons"
import { DeleteFavorite, addFavorite } from "../actions"

interface AppProps{
    imagePath: string,
    description:string,
    location:string,
    price:number,
    userId:string | undefined,
    isInFavorite:boolean,
    favoriteId:string,
    homeId:string,
    pathname:string
    
}

export function ListCart({imagePath,description,location,price,userId,isInFavorite,favoriteId,homeId,pathname}:AppProps){
    const {getCoutriesByValue} = UseCoutries()
    const country = getCoutriesByValue(location)
    console.log(country?.region)
    return(

        <div className="flex flex-col">
                <div className="relative h-72">
                        <Image src={`https://iismhlxwbifuksitlqsa.supabase.co/storage/v1/object/public/images/${imagePath}`} alt="Imagem da casa" fill className="rounded-lg h-full object-cover mb-3"/>

{userId && (<div className="z-10 absolute top-2 right-2">

    {isInFavorite ? (
         <form action={DeleteFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId}/>
                <input type="hidden" name="userId" value={userId}/>
                <input type="hidden" name="pathname" value={pathname}/>
            <DeleteFromFavoriteButton/>
         </form>
         ):(
             <form action={addFavorite}>
                <input type="hidden" name="homeId" value={homeId}/>
                <input type="hidden" name="userId" value={userId}/>
                <input type="hidden" name="pathname" value={pathname}/>
              <AddFavoriteButton/>   
             </form>
          
        )}
 

</div>)}

                </div>

                <Link href={`/home/${userId}`} className="mt-2">
                    <h3>{country?.flag}/ {country?.label}</h3>
                    <p className="text-sm line-clamp-3">{description}</p>
                    <p>
                        <span className="font-bold">{price}</span> Euros
                    </p>
                </Link>


        </div>
    )
}