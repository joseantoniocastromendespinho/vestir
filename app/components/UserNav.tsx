import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { createVestirHome } from "../actions";






export async function UserNav(){
    const {getUser}=getKindeServerSession()
    const user = await getUser();
  //  const createVestirHomeWhiteId = createVestirHome.bind(null,{id:user?.id})
    const createVestirHomeWhiteId = createVestirHome.bind(null, { id:user?.id as string});

  
    return(
        <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="rounded-full border px-2 py-2 lg:py-2 flex items-center gap-x-3">
                        <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>
                        <img src={user?.picture ?? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                        alt="Imagem logo"
                        className="rounded-full h-8 w-8 hidden lg:block"/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  {
                    user ? (
                    <>
                    <DropdownMenuItem>
                       <form className="w-full text-start" action={createVestirHomeWhiteId}>
                        <button type="submit">
                            Home
                        </button>

                       </form>

                      
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Link href="my-homes" className="w-full">My LIsting</Link>
                    </DropdownMenuItem>
              

                    <DropdownMenuItem>
                    <Link href="favorites" className="w-full">My Favorites</Link>
                    </DropdownMenuItem>
                   

                    <DropdownMenuItem>
                    <Link href="my-reserves" className="w-full">My Reserves</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        
                    <LogoutLink className="w-full">
                        Logout
                    </LogoutLink>
                       
                        </DropdownMenuItem>
                    
                    </>):(
                    <>
                    <DropdownMenuItem>
                    <RegisterLink className="w-full">
                        Register
                    </RegisterLink>
                       
                        </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LoginLink className="w-full">Login</LoginLink>
                    </DropdownMenuItem>
                    </>)
                  }



                </DropdownMenuContent>


        </DropdownMenu>
        )
}