import { createCategoryPage } from "@/app/actions";
import { CreateButtomBar } from "@/app/components/CreateButtomBar";
import { SelectCategoy } from "@/app/components/SelectCatagory";

export default function EstruturaRoute({params}:{params:{id:string}}){
    return(<>
    <div className="w-3/5 mx-auto tracking-tight transition-colors">
<h2 className="text-3xl font-semibold">A melhor forma descrever a tua Home</h2>
    </div>
    <form action={createCategoryPage}>
        <input type="hidden" name="idHome" value={params.id}/>
        <SelectCategoy/>
        <CreateButtomBar/>
    </form>
    </>)
}