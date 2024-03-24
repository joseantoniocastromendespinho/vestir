import { File } from "lucide-react";

export function NoItem(){
return(
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md p-8 text-center animate-in mt-10">
            <div className="flex h-20 items-center justify-center rounded-full bg-primary">
                <File className="h-10 w-10 text-primary"/>
            </div>
            <h2 className="mt-6 text-3xl font-semibold">Não existem categorias!!!</h2>
            <p className="mt-2 text-center text-sm leading-6">Verifique a sua categoria!!!</p>
    </div>
    )
}

